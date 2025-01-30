import userModel from "./../models/usersModel.js"
import  jwt from "jsonwebtoken"

export const authMiddleware = async(req, res) => {

  console.log(req.cookie)
    if (req.cookie.jwt) {
        try {
            const token = req.cookie.jwt
            if (!token) {
                return res.status(401).json({ status: 400, message: "Unauthorized user" })
            }
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.userId = decode.id
            next()
        } catch (err) {
            console.log(err)
            return res.status(401).json({ status: 500, message: "invalid token" })
        }

    }
    else {
        return res.status(401).json({ status: 401, message: "Unautorized user" })
    }

}

export const admin = async(req,res)=>{
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(401).json({message:"Not authorized as admin"})
    }

}