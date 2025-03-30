import { Request, Response } from "express"
import { PrismaClient as valijas } from "../../prisma/valijasDB"
import { PrismaClient as Usuarios } from "../../prisma/usuariosDB"



const ClientValijas = new valijas()
const ClientUsuarios = new Usuarios();


export const ValijasServices = {
  getAll: async (req: Request, res: Response) => {
    try {
      const allValijas = await ClientValijas.valija.findMany()
      res.send(allValijas)
    } catch (error) {
      console.log(error)
      res.send(error)
    }
  },
  
  getByCodigo: async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params
      const [valija] = await ClientValijas.valija.findMany({
        where: {
          codigo
        }
      })
      if(valija === undefined){
        res.send(false)
      }else{
        res.send([valija,true]) 
      }
    } catch (error) {
      console.log(error)
    }
  },

  getById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params
      const [valija] = await ClientValijas.valija.findMany({
        where: {
          id: parseInt(id)
        }
      })
      res.send([valija,true])
    } catch (error) {
      console.log(error)
    }
  },

  getAllByUser: async (req: Request, res: Response) => {
    try {
      const { usuarioACargo } = req.params
      const allValijas = await ClientValijas.valija.findMany({
        where: {
          usuarioACargo
        }
      })
      res.json(allValijas)
    } catch (error) {
      console.log(error)
    }
  },

  registerValija: async (req: Request, res: Response) => {
    const { codigo } = req.body
    try {
      const valijaCreada = await ClientValijas.valija.create({
        data: {
          codigo,
          usuarioACargo: "Recepcion"
        }
      })
      const recepcion = await ClientUsuarios.usuario.findFirst({ where : { nombre : 'Recepcion'}})
      await ClientUsuarios.usuario.update({
        where:{ nombre : 'Recepcion'},
        data:{
          inventario : [...recepcion!.inventario,codigo]
        }
      })
      console.log(valijaCreada)
      res.send([valijaCreada,true])
    } catch (error) {
      res.send(error)
    }
  },

  updateValija: async (req: Request, res: Response) => {
    try {
      const { codigo, moneda } = req.query
      const consulta = await ClientValijas.valija.findFirst({
        where: {
          codigo: codigo as string
        },
        include: {
          valijaDop: true,
          valijaUsd: true,
          valijaEur: true
        }
      })


      /*
      * * En las condiciones siguientes, se valida qeu tipo de moneda se esta deseando agregar, 
      * * para no crear todas las valijasDOP/USD/EUR, sino, las que sean necesarias,
      * * si no existe, devuelve que no existe
  
      * * En las condiciones interiores a estas, se validara si la tiene creada, y sino tiene creada la parte de la valija 
      * * dependiendo de la divisa, se creara, sino, se procedera a crear las actualizaciones necesarias
      * * como actualizacion de las transferencias, y la actualizacion de la cantidad de depositos.
      */
      if (consulta == undefined) {
        res.send('no existe la valija')
      }
      else if (moneda === 'DOP') {
        // * esta condicion es si la valijaDop se crea por primera vez
        if (consulta.valijaDopId === null) {
          const valijaCreada = await ClientValijas.valijaDop.create({
            data: {
              depositos: 1,
              valija: {
                connect: { id: consulta.id }
              },
              transaccionDop: {
                create: {
                  D1: 2,
                  D5: 2,
                  D10: 2,
                  D25: 2,
                  D50: 2,
                  D100: 2,
                  D200: 2,
                  D500: 2,
                  D1000: 2,
                  D2000: 2,
                }
              }
            }
          })
          res.send(valijaCreada)
        }
        // * esta es por si ya tiene valijaDop
        else if (consulta.valijaDopId != null) {
          const transaccionCreada = await ClientValijas.transaccionesDop.create({
            data: {
              D1: 3,
              D5: 3,
              D10: 3,
              D25: 3,
              D50: 3,
              D100: 3,
              D200: 3,
              D500: 3,
              D1000: 3,
              D2000: 3,
              valijaDop: {
                connect: {
                  id: consulta.valijaDopId
                }
              }
            }
          })
          const depositos = consulta.valijaDop!.depositos!
          const valijaActualizada = await ClientValijas.valijaDop.update({
            where: {
              id: consulta.valijaDopId
            },
            data: {
              depositos: depositos + 1
            }
          })
          res.send({ valijaActualizada, transaccionCreada })
        }
      }
      else if (moneda === 'USD') {
        if (consulta.valijaUsdId === null) {
          // * esta condicion es si la valijaUsd se crea por primera vez
          const valijaCreada = await ClientValijas.valijaUsd.create({
            data: {
              depositos: 1,
              valija: {
                connect: { id: consulta.id }
              },
              transaccionUsd: {
                create: {
                  D1: 2,
                  D2: 2,
                  D5: 2,
                  D10: 2,
                  D20: 2,
                  D50: 2,
                  D100: 2
                }
              }
            }
          })
          res.send(valijaCreada)
        }
        // * esta es por si ya tiene valijaUsd
        else if (consulta.valijaDopId != null) {
          const transaccionCreada = await ClientValijas.transaccionesUsd.create({
            data: {
              D1: 2,
              D2: 2,
              D5: 2,
              D10: 2,
              D20: 2,
              D50: 2,
              D100: 2,
              valijaUsd: {
                connect: {
                  id: consulta.valijaUsdId
                }
              }
            }
          })
          const depositos = consulta.valijaUsd!.depositos!
          const valijaActualizada = await ClientValijas.valijaUsd.update({
            where: {
              id: consulta.valijaUsdId
            },
            data: {
              depositos: depositos + 1
            }
          })
          res.send({ valijaActualizada, transaccionCreada })
        }
      }
      else if (moneda === "EUR") {
        if (consulta.valijaEurId === null) {
          // * esta condicion es si la valijaUsd se crea por primera vez
          const valijaCreada = await ClientValijas.valijaEur.create({
            data: {
              depositos: 1,
              valija: {
                connect: { id: consulta.id }
              },
              transaccionEur: {
                create: {
                  D10: 1,
                  D20: 1,
                  D50: 1,
                  D100: 1,
                }
              }
            }
          })
          res.send(valijaCreada)
        }
        // * esta es por si ya tiene valijaUsd
        else if (consulta.valijaEurId != null) {
          const transaccionCreada = await ClientValijas.transaccionesEur.create({
            data: {
              D10: 1,
              D20: 1,
              D50: 1,
              D100: 1,
              valijaEur: {
                connect: {
                  id: consulta.valijaEurId
                }
              }
            }
          })
          const depositos = consulta.valijaEur!.depositos!
          const valijaActualizada = await ClientValijas.valijaEur.update({
            where: {
              id: consulta.valijaEurId
            },
            data: {
              depositos: depositos + 1
            }
          })
          res.send({ valijaActualizada, transaccionCreada })
        }
      }
    } catch (error) {
      console.log(error)
      res.json('error')
    }
  }
}