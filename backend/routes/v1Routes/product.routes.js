import express from "express"
const router = express.Router()
import {getAllProducts,getProductDetails} from "../../controllers/product.controllers.js"
router.get("/", getAllProducts)
router.get("/:id",getProductDetails)


export default router