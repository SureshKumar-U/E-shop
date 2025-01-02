import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,  // URL or path to the image
      required: true,
    },
    category: {
      type: String,  // URL or path to the image
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
// Use mongoose.models to avoid re-compiling the model

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;









// const mongoose = require("mongoose")


// const reviewSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     rating: { type: Number, required: true },
//     comment: { type: String, required: true },
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User',
//     },
//   },
//   {
//     timestamps: true,
//   }
// )




// const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     image: {
//       type: String,  // URL or path to the image
//       required: true,
//     },
//     category:{
//       type:String
//     },
//     countInStock: {
//       type: Number,
//       required: true,
//       default: 0,
//     },
//     reviews : [reviewSchema]
//   },
//   {
//     timestamps: true,
//   }
// );

// const Product = mongoose.model('Product', productSchema);
// module.exports = Product;
   



