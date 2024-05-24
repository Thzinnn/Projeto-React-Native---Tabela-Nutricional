import express from 'express'
import { PORT, HOST } from './config.js'
import comidaRouter from './routers/comidaRouter.js'
import refeicaoRouter from './routers/refeicaoRouter.js'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8081', 'http://meusite.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }))

app.use(express.json())

app.use('/comida', comidaRouter)
app.use('/refeicao', refeicaoRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando em ${HOST}:${PORT}`);
})