import { Brand } from "../model/model.js"
import { ApiError } from '../error/ApiError.js';

class BrandController {
    async create (req,res) {
            const {name} = req.body
            const brand = await Brand.create ({name})
            return res.json(brand)
        }
    
        async getAll (req,res) {
            const brands =  await Brand.findAll()
            return res.json(brands)
        }
    }
const brandController = new BrandController ()
export { brandController }