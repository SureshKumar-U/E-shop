
import jwt from "jsonwebtoken"

 const generateToken = (userId,res)=>{

    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    })
    //set token in cookie
    res.cookie('jwt',token, {
        httpOnly: true,
        secure : false,  // set true in production mode
        sameSite : "Strict",
        maxAge : 1 * 60 * 60 * 1000  // 1 hour
    });


}

export default generateToken
