
import { Request, Response, Router } from "express";
import { PrismaClient } from "../clientes/PrismaValijas/index";
import { log } from "console";


export const router = Router()
const ClientValijas = new PrismaClient()

// esta ruta es para conseguir todas las valijas
router.get('/getAll', async (req: Request, res: Response) => {
  try {
    const allValijas = await ClientValijas.valija.findMany()
    res.send(allValijas)
  } catch (error) {
    console.log(error)
  }
})

//esta ruta es para conseguir una valija por codigo
router.get('/getByCodigo/:codigo', async (req: Request, res: Response) => {
  try {
    const { codigo } = req.params
    const [allValijas] = await ClientValijas.valija.findMany({
      where: {
        codigo
      }
    })
    res.send(allValijas)
  } catch (error) {
    console.log(error)
  }
})

//esta ruta es para conseguir una valija por id
router.get('/getById/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const [allValijas] = await ClientValijas.valija.findMany({
      where: {
        id: parseInt(id)
      }
    })
    res.send(allValijas)
  } catch (error) {
    console.log(error)
  }
})

//esta ruta es para conseguir las valijas por el usuario a cargo
router.get('/getAllByUser/:usuarioACargo', async (req: Request, res: Response) => {
  try {
    const { usuarioACargo } = req.params
    const allValijas = await ClientValijas.valija.findMany({
      where: {
        usuarioACargo
      }
    })
    res.send(allValijas)
  } catch (error) {
    console.log(error)
  }
})


/*
Esta ruta es para darle entrada a una valija con el usuario recepcion por defecto.
Podria cambiarse para que el usuario que le de entrada se la quede,
pero por defecto es mejor tenerlo en un solo usuario.
*/
router.post('/registrarValija', async (req: Request, res: Response) => {
  const { codigo } = req.body
  try {
    const valijaCreada = await ClientValijas.valija.create({
      data: {
        codigo,
        usuarioACargo: "Recepcion"
      }
    })
    res.send(valijaCreada)

  } catch (error) {
    res.send(error)
  }
})


//esta ruta es para para actualizar los datos de la valija
router.put('/UpdateValija', async (req: Request, res: Response) => {
  try {
    const { codigo , moneda } = req.query
    const consulta = await ClientValijas.valija.findFirst({
      where: {
        codigo : codigo as string
      },
      include:{
        valijaDop: true
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
    if(consulta == undefined){
      res.send('no existe la valija')
    }
    else if(moneda === 'DOP'){
      // * esta condicion es si la valijaDop se crea por primera vez
      if(consulta.valijaDopId === null){
        const valijaCreada = await ClientValijas.valijaDop.create({
          data:{
            depositos : 1,
            valija: {
              connect : {id : consulta.id}
            },
            transaccionDop :{
              create:{
                D1 : 2,
                D5 : 2,
                D10 : 2,
                D25 : 2,
                D50 : 2,
                D100 : 2,
                D200 : 2,
                D500 : 2,
                D1000 : 2,
                D2000 : 2,
              }
            }
          }
        })
        log(consulta.valijaDop)
        res.send(valijaCreada)
      }
      // * esta es por si ya tiene valijaDop
      else if(consulta.valijaDopId >= 1){
        const transaccionCreada = await ClientValijas.transaccionesDop.create({
          data:{
                D1 : 3,
                D5 : 3,
                D10 : 3,
                D25 : 3,
                D50 : 3,
                D100 : 3,
                D200 : 3,
                D500 : 3,
                D1000 : 3,
                D2000 : 3,
                valijaDop:{
                  connect:{
                    id : consulta.valijaDopId
                  }
                } 
          }
        })
        const depositos = consulta.valijaDop!.depositos!
        const valijaActualizada = await ClientValijas.valijaDop.update({
          where: {
           id : consulta.valijaDopId
          },
          data:{
            depositos : depositos + 1
          }
        })
        
        res.send() 
      }

    }



    else if(moneda === 'USD'){
      if(consulta.valijaUsdId === null){
      res.json('la valija no tiene parte de dop')
      }
      
    }
    else{
      if(consulta.valijaEurId === null){
      res.json('la valija no tiene parte de dop')
      }
      
    }





  } catch (error) {
    console.log(error)
    res.json('error')
  }
})

