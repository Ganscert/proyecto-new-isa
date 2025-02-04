import { Request, Response } from "express"
import { PrismaClient as Usuarios } from "../clientes/PrismaUsuarios"
import { PrismaClient as valijas } from "../clientes/PrismaValijas"
import { bcryptAdapter } from "../config/bcrypt"

const ClientUsuarios = new Usuarios()

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

      const {nombre,codigoEmpleado,cargo} = await ClientUsuarios.usuario.create({
        data: {
          nombre: user,
          codigoEmpleado: typeof (codigo) == "string" ? parseInt(codigo) : codigo,
          transferencia: Boolean(transferencia),
          SupervisorID: parseInt(supervisor),
          cargo: Cargo,
          EIE,
          preparacion,
          recepcion,
          contrasena: bcryptAdapter.hash(contrasena)
        }
      })
      res.send({nombre,codigoEmpleado,cargo})
    } catch (error) {
      console.log(error)
      res.send(error)
    }

  },

  login: async(req : Request, res: Response)=>{
    const {codigo, Contrasena} = req.body

    const usuario = await ClientUsuarios.usuario.findFirst({
      where:{
        codigoEmpleado : parseInt(codigo)
      }
    })

    const comparacion = bcryptAdapter.compare(Contrasena ,usuario!.contrasena)
    if(comparacion){
      res.send(usuario)
    }else{
      res.send("usuario o contraseña invalidos")
    }
  }
}