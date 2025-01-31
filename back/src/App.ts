import express, { Request, Response } from 'express'
import { router } from './routes/valijas'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', router)

app.listen(3000, () => {
  console.log('listo')
})

