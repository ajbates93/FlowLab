import { Request, Response, NextFunction } from 'express'
import dbUsers from '../../services/users'

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await dbUsers.getUsers()
    res.json(users) 
  } catch (err: any) {
    console.error(err)
    next(err)
  }
}

export default { get }