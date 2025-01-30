
import Orders from "../models/orderModel.js"


const addOrder = (req, res) => {
    try {
        const { orderItems, shippingAddress, paymentMethod } = req.body;
        if (!orderItems || orderItems.length == 0) {
            return res.status(400).json({ message: "Order items are empty" })
        }
        // NOTE: here we must assume that the prices from our client are incorrect.
        // We must only trust the price of the item as it exists in
        // our DB. This prevents a user paying whatever they want by hacking our client

        const ordersFromDB = Orders.find({ _id: { $in: orderItems.map(x => x._id) } })
        // map over the order items and use the price from our items from database
        //    const order = new Order({})

    } catch (err) {
        return res.status(500).json({ message: "Internal or External server error", error: err })
    }

    res.json({ message: "product added successfully" })
}
const getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.find({})

        if (!orders || orders.length == 0) {
            return res.status(200).json({ message: "No orders available", orders: orders })
        }
        return res.status(200).json({ message: "Orders fetched successfully", orders: orders })

    } catch (err) {
        return res.status(500).json({ message: "Internal or External server error", error: err.message })
    }
}
const getMyOrders = async (req, res) => {
    try {
        const myOrders = await Orders.findById(req.userId)
        if (!myOrders || myOrders.length == 0) {
            return res.status(200).json({ message: "You dont have any orders", myOrders })
        }
        return res.status(200).json({ message: "Orders fetched successfully", myOrders })

    } catch (err) {
        return res.status(500).json({ message: "Internal or External server error", error: err })
    }

}
const getOrderById = async (req, res) => {

    try {
        const { id: OrderId } = req.params
        if (!OrderId) {
            return res.status(400).json({ message: "OrderId was not available in request params" })
        }
        const Order = await Orders.findOne({ _id: OrderId })
        if (!Order) {
            return res.status(400).json({ message: "No order avilable with the requested OrderId" })
        }
        return res.status(200).json({ message: "Order fetched successfully", Order: Order })
    } catch (err) {
        return res.status(500).json({
            message: "Internal or External server error",
            error: err
        })
    }

}

const updateOrderToDelivered = async(req, res) => {
    try {
        const { id: orderId } = req.params
        if (!orderId) {
            return res.status(400).json({ message: "Order id was not found in the url params" })
        }
        const order = await Orders.findById(orderId)
        if(!order){
            return res.status(200).json({message:"No order was existed with provided OrderId"})
        }
        order.isDelivered = true
        order.deliveredAt = Date.now()

        const updatedOrder = await order.save()
    return res.status(200).json({message:"order updated succesfully", updatedOrder})
    } catch (err) {
        return res.status(500).json({ message: "Internal or External server error", error: err.message })

    }
    res.json({ message: "updated order to delivered" })
}

const updateOrderToPaid = (req, res) => {
    res.json({ message: "order updated to paid successfully" })
}

export {
    addOrder,
    getAllOrders,
    getMyOrders,
    getOrderById,
    updateOrderToDelivered,  //access by admin
    updateOrderToPaid  //access by admin

}