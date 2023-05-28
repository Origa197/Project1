import  express  from 'express'
import { brandController } from '../controllers/brandController.js'

const brandRouter = express ();
brandRouter.post('/', brandController.create)
brandRouter.get('/', brandController.getAll) 

export { brandRouter }
