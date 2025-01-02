import mongoose from "mongoose";


export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MongoDB_URI)
        console.log("db connected")
    }catch(err){
        console.log(err)
    }
}

