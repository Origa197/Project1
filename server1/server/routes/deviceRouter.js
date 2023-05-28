import  express  from 'express'
import { deviceController } from '../controllers/deviceController.js';

const deviceRouter = express ();
deviceRouter.post('/', deviceController.create)
deviceRouter.get('/', deviceController.getAll)
deviceRouter.get('/:id', deviceController.getOne)

export { deviceRouter }
