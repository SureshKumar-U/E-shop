import mongoose from 'mongoose';


const cartSchema = new mongoose.Schema({

},{timestamps:true})


const cartModel = mongoose.model.cart || mongoose.model("cart", cartSchema)

module.exports = cartModel