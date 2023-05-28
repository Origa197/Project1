import  express  from 'express'
import { brandRouter } from './brandRouter.js'
import { deviceRouter } from './deviceRouter.js'
import { typeRouter } from './typeRouter.js'
import { userRouter } from './userRouter.js'

const rootRouter = express ();

rootRouter.use('/user', userRouter)
rootRouter.use('/type', typeRouter)
rootRouter.use('/brand', brandRouter)
rootRouter.use('/device', deviceRouter)

export {rootRouter}

