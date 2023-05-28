import  express  from 'express'
import { typeController } from '../controllers/typeController.js'
import { checkRoleMiddleware } from '../middleware/checkRoleMiddleware.js'


const typeRouter = express ();
typeRouter.post('/', checkRoleMiddleware("ADMIN"), typeController.create)
typeRouter.get('/', typeController.getAll)

export { typeRouter }
