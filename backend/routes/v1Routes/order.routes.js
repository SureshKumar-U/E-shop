import express from "express"
const router = express.Router()
import { addOrder,getAllOrders,getMyOrders,getOrderById,updateOrderToPaid,updateOrderToDelivered } from "../../controllers/orders.controllers.js";
import { admin,authMiddleware } from "../../middlewares/authMiddleware.js";

router.get("/myorders", authMiddleware,getMyOrders)
router.post("/", authMiddleware,addOrder)
router.get("/:id", authMiddleware,getOrderById)
router.put("/:id/paid", authMiddleware,admin, updateOrderToPaid)
router.put("/:id/paid",authMiddleware,admin, updateOrderToDelivered)
router.get("/",getAllOrders)

export default router