import express from 'express'
import userController from '../../controllers/user'

const router = express.Router()

// GET /user
router.get('/', userController.get)

export default router