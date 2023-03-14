import express from 'express'
import modelsController from '../../controllers/models'

const router = express.Router()

// GET /models
router.get('/', modelsController.get)

export default router