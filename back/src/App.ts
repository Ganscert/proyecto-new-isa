import express from 'express'
import { router as ValijasRoutes } from './routes/valijas'
import { router as UsersRoutes } from './routes/usuarios'


const app = express()
const cors = require("cors");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

// esta es la ruta para poder hacer las peticiones con respecto a todo lo que son las valijas
app.use('/valijas', ValijasRoutes)

//esta es la ruta para poder hacer las peticiones con respecto a todo lo que son los usuarios
app.use('/user', UsersRoutes)

app.listen(3000, () => {
  console.log('listo')
})

