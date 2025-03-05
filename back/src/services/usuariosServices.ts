import { Request, Response } from "express"
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
      const respuesta = await ClientUsuarios.usuario.findMany()
      res.send(respuesta)

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
        res.send([validacion,false])
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
        res.send([empleado,true])
      }
      // res.send(saldoDeEmpleado)
    } catch (error) {
      console.log(error)
      res.send(error)
    }

  },

  //servicio login de los usuarios
  login: async (req: Request, res: Response) => {
    const { codigo, Contrasena } = req.body
    console.log(codigo,Contrasena)

    const { nombre, contrasena, cargo, transferencia, recepcion, EIE, SupervisorID, preparacion } = (await ClientUsuarios.usuario.findFirst({
      where: {
        codigoEmpleado: parseInt(codigo)
      }
    })) || {}

    const comparacion = bcryptAdapter.compare(Contrasena, contrasena!)
    if (comparacion) {
      const token = await AuthService.login({ nombre, cargo, transferencia, recepcion, EIE, SupervisorID })
      res.send({ nombre, cargo, transferencia, recepcion, EIE, SupervisorID, codigo, preparacion })
      // localStorage.setItem("token",JSON.stringify(token)) 
    } else {
      res.send("usuario o contraseña invalidos")
    }
  },

  //servicio para las asignaciones de las valijas
  asignacion: async (req: Request, res: Response) => {
    const { valija, user } = req.body


    const valijaBuscada = await ClienteValijas.valija.update({
      where: {
        codigo: valija
      },
      data: {
        usuarioACargo: user
      }
    })

    const usuario = await ClientUsuarios.usuario.findFirst({
      where: {
        codigoEmpleado: parseInt(user)
      }
    })

    const inventario = await ClientUsuarios.usuario.update({
      where: {
        codigoEmpleado: parseInt(user)
      },
      data: {
        inventario: usuario?.inventario.concat(valija)
      }
    })
    res.send(inventario)
  }
}

