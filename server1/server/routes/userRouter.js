import  express  from 'express'
import { userController } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const userRouter = express ();

userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)
userRouter.get('/auth', authMiddleware, userController.auth)

export { userRouter };
