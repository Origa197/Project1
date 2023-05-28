import  express  from 'express'
import { config } from 'dotenv'
import { sequelize } from './db.js'
import * as model  from './model/model.js'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { rootRouter } from './routes/index.js'
import { errorHandler } from './middleware/ErrorHandingMiddleware.js'
import { resolve } from 'path'

config();
const mod = model;
const app = express();
const cors = cors()

const PORT = process.env.PORT || 3334;
const HOST = process.env.HOST || 'http://localhost'

app.use(cors())
app.use(express.json())
app.use(express.static(resolve('static')))
app.use(fileUpload({}))
app.use('/api', rootRouter)


app.use(errorHandler)

app.get ('/', (req, res) => {
    res.status(200).json ({message: 'It is working'})
})

const start = async () => {
    try{ 
       await sequelize.authenticate();
       await sequelize.sync();
        app.listen(PORT, HOST, () => {
            console.log(`Server start from http://${HOST}:${PORT}`)
        })   
    } catch(e) {
        console.log(e)
    }
}

start ();