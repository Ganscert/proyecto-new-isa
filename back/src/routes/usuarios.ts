import { Router } from "express";
import { UsuariosServices } from "../services/usuariosServices";

export const router = Router()
//esta ruta es para conseguir todos los usuarios
router.get("/getAll", UsuariosServices.getAll)

//esta es la ruta para registar algun usuario
router.post("/register", UsuariosServices.register)

router.post("/login", UsuariosServices.login)