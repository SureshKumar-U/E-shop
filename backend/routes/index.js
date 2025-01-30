import express from "express"
const router = express.Router()
import productRoutes from "./v1Routes/product.routes.js"
import orderRoutes from "./v1Routes/order.routes.js"
import userRoutes from "./v1Routes/user.routes.js"

router.use("/v1/products", productRoutes)
router.use("/v1/users", userRoutes)
router.use("/v1/orders",orderRoutes)
export default router

