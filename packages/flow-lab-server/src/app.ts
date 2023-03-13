import express, { Application, Request, Response } from 'express'
import cors, { CorsRequest, CorsOptions } from 'cors'
import userRouter from './routes/user'

const app: Application = express()
const PORT: number = 3001

const corsOptions: CorsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use('/user', userRouter)

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`)
})