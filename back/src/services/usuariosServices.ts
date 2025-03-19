import { NextFunction, Request, Response } from "express"
import { PrismaClient as Usuarios } from "../clientes/PrismaUsuarios"
import { PrismaClient as valijas } from "../clientes/PrismaValijas"
import { bcryptAdapter } from "../config/bcrypt"
import { AuthService } from "./authService"


const ClientUsuarios = new Usuarios();
const ClienteValijas = new valijas();

export const UsuariosServices = {
  //servicio para conseguir todos los usuarios
  getAll: async (req: Request, res: Response) => {

    try {

      const d = await ClientUsuarios.usuario.findMany({
        orderBy: {
          nombre: "asc"
        }
      })
      const data = []
      for (let i = 0; i < d.length; i++) {
        data.push([d[i].nombre, d[i].id, d[i].codigoEmpleado, d[i].inventario])
      }
      res.send(data)

    } catch (error) {
      console.log(error)
    }
  },

  // servicio para registrar un usuario
  register: async (req: Request, res: Response) => {

    try {
      const {
        user,
        codigo,
        transferencia = false,
        supervisor = null,
        Cargo = "cajero",
        EIE = false,
        preparacion = false,
        recepcion = false,
        contrasena } = req.body

      const validacion = await ClientUsuarios.usuario.findFirst({
        where: {
          codigoEmpleado: parseInt(codigo)
        }
      })

      if (validacion) {
        res.send([validacion, false])
      } else {
        const saldoDeEmpleado = await ClientUsuarios.saldo.create({
          data: {}
        })

        const empleado = await ClientUsuarios.usuario.create({
          data: {
            nombre: user,
            codigoEmpleado: typeof (codigo) === "string" ? parseInt(codigo) : codigo,
            transferencia: Boolean(transferencia),
            SupervisorID: parseInt(supervisor),
            cargo: Cargo,
            EIE,
            preparacion,
            recepcion,
            contrasena: bcryptAdapter.hash(contrasena),
            saldoId: saldoDeEmpleado.id
          }
        })


        res.send([empleado, true])
      }
      // res.send(saldoDeEmpleado)
    } catch (error) {
      console.log(error)
      res.send(error)
    }

  },

  //servicio login de los usuarios
  login: async (req: Request, res: Response) => {
    try {
      const { codigo, Contrasena } = req.body

      const { nombre, contrasena, cargo, transferencia, recepcion, EIE, SupervisorID, preparacion, saldoId } = (await ClientUsuarios.usuario.findFirst({
        where: {
          codigoEmpleado: parseInt(codigo)
        }
      })) || {}

      const comparacion = bcryptAdapter.compare(Contrasena, contrasena!)
      if (comparacion) {
        const token = await AuthService.login({ nombre, cargo, transferencia, recepcion, EIE, SupervisorID })
        res.send([{ nombre, cargo, transferencia, recepcion, EIE, SupervisorID, codigo, preparacion, saldoId }, true])
        // localStorage.setItem("token",JSON.stringify(token)) 
      } else {
        res.json(["usuario o contraseña invalidos", false])
      }
    } catch (error) {
      res.json(["usuario o contraseña invalidos", false])
    }

  },




  //servicio para las asignaciones de las valijas
  asignacion: async (req: Request, res: Response) => {

    try {
      const { valija, userDestino, userFuente } = req.body


      const valijaBuscada = await ClienteValijas.valija.findFirst({ where: { codigo: valija } })
      if (valijaBuscada === null) {
        return res.send([null, false])
      }

      const usuarioFuente = await ClientUsuarios.usuario.findFirst({ where: { codigoEmpleado: parseInt(userFuente) } });
      const usuarioDestino = await ClientUsuarios.usuario.findFirst({ where: { codigoEmpleado: parseInt(userDestino) } });

      if (!usuarioFuente?.inventario.includes(valijaBuscada.codigo)) {
        return res.send(['el usuario no contiene la valija', false])
      }


      const nuevoInventario = usuarioFuente!.inventario
      const valijaAEliminar = usuarioFuente!.inventario.indexOf(valija)
      nuevoInventario.splice(valijaAEliminar, 1)


      await ClientUsuarios.usuario.update({
        where: { codigoEmpleado: usuarioFuente!.codigoEmpleado },
        data: { inventario: nuevoInventario }
      })

      const actUsuarioDestino = await ClientUsuarios.usuario.update({
        where: {
          codigoEmpleado: parseInt(userDestino)
        },
        data: {
          inventario: [...usuarioDestino!.inventario, valijaBuscada!.codigo]
        }
      })
      res.send(actUsuarioDestino)

    } catch (error) {
      res.send('klk')
    }


  },



  consultaPorUsuario: async (req: Request, res: Response) => {
    try {
      const { codigo } = req.params
      const respuesta = await ClientUsuarios.usuario.findFirst({
        where: {
          codigoEmpleado: parseInt(codigo)
        }

      }) || {}
      res.send(respuesta)
    } catch (error) {
      res.send(error)
    }
  },
  error: (req: Request, res: Response)=>{
    res.send('error')
  }

}

