import { Request, Response, NextFunction } from 'express'
import dbModels from '../../services/models'

const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const models = await dbModels.getModels()
    res.json(models) 
  } catch (err: any) {
    console.error(err)
    next(err)
  }
}

export default { get }