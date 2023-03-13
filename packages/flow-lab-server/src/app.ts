import express, { Application, Request, Response } from 'express'
import userRouter from './routes/user'

const app: Application = express()

const PORT: number = 3001

// app.use('/', (req: Request, res: Response): void => {
//   res.send('Hello world!')
// })

app.use('/user', userRouter)

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`)
})