import { Request, Response, NextFunction } from 'express'

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send('Made it to the user controller!')
  } catch (err: any) {
    console.error(err)
    next(err)
  }
}

export default { get }