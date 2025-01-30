import bcrypt from "bcrypt"
import userModel from "../models/usersModel.js"
import jwt from "jsonwebtoken"
import generateToken from "../utils/generatetoken.js"
 const userLogin= async (req, res) => {
    try {
        const { email, password } =   req.body
        if (!email || !password) {
            return res.status(400).json({ status: 400, message: "All fields are madatory" })
        }
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ status: 400, message: "Invalid email" })
        }
        const match = bcrypt.compareSync(password, user.password)
        if (!match) {
            return res.status(400).json({ status: 400, message: "Invalid password" })
        }
        //create token
        generateToken(user._id,res)
        user.password = undefined
        return res.status(200).json({ status:200, message: "Login successfull", user })
    }
    catch (err) {
        return res.status(400).json({ status: 500, message: err.message })
    }

}

const userSignup = async(req,res)=>{
    try{
        const {email, password} = req.body

       
        //validate the email and password
         if(!email || !password){
            return  res.status(400).json({status:400, message:"All fields are mandatory"})
         }
        //check if email already exists or not
        const user = await userModel.findOne({email:email})
        if(user){
            return  res.status(400).json({status:400, message:"User already existed"})
        }
        //create user,if user was not exists
        const hashpassword = bcrypt.hashSync(password, 10)
       const newUser = new userModel({email:email,password:hashpassword})
        await newUser.save()
        return res.json({status:200,message:"user created successfully"})

    }catch(err){
        console.log(err)
        return  res.status(500).json({status:"500", message:err.message})
    }
}

const userLogout = async(req,res)=>{
    try{
        res.clearCookie("jwt")
       return res.status(200).json({message:"user Logout successfully"})
    }catch(err){
        return res.status(500).json({message:"user Logout successfully"})
    }
}

 const getUserProfile = async(req,res)=>{
    try{
        const userId = rqq.user._id
        const user = await user.findById(userId)
        if(!user){
            return res.status(200).json({message:"No user available with requested userId"})
        } 
        return res.status(200).json({message:"user profile fetched successfully", user})

    }catch(err){
        return res.status(500).json({message:"Internal or External server error"})
    }

}

 const updateUserProfile = async(req,res)=>{
    return res.status(200).json({messsage:"updated user profile"})
}

const deleteUserProfile = async(req,res)=>{
    return res.status(200).json({message:"userProfile deleted successfully"})
}



const getAllUsers = async(req,res)=>{
    return res.json("fetched all users successfully")
}


export {getAllUsers,getUserProfile,updateUserProfile,userSignup,userLogin,userLogout,deleteUserProfile}