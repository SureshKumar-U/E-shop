import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const categories = mongoose.model('categories', categorySchema);
module.exports = categories
