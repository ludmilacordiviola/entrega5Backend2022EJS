import { Router } from 'express'
import  {postProductController, getProductController}  from '../controller/productsController.js'

const router = Router()

router.get('/productos', getProductController)

router.post('/productos', postProductController)

export default router