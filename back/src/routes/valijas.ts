
import { Router } from "express";
import { ValijasServices } from "../services/valijasServices";


export const router = Router()

// esta ruta es para conseguir todas las valijas
router.get('/getAll', ValijasServices.getAll)

//esta ruta es para conseguir una valija por codigo
router.get('/getByCodigo/:codigo', ValijasServices.getByCodigo)

//esta ruta es para conseguir una valija por id
router.get('/getById/:id', ValijasServices.getById)

//esta ruta es para conseguir las valijas por el usuario a cargo
router.get('/getAllByUser/:usuarioACargo',ValijasServices.getAllByUser)


/*
Esta ruta es para darle entrada a una valija con el usuario recepcion por defecto.
Podria cambiarse para que el usuario que le de entrada se la quede,
pero por defecto es mejor tenerlo en un solo usuario.
*/
router.post('/registrarValija', ValijasServices.registerValija)


//esta ruta es para para actualizar los datos de la valija
router.put('/UpdateValija', ValijasServices.updateValija)

