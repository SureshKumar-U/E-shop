const userModel = require("./../models/usersModel")
const bcrypt = require("bcryptjs")

const login = async (request, response) => {
    try {
        const { email, password } =   request.body
        if (!email || !password) {
            return response.status(400).json({ status: 400, message: "All fields are madatory" })
        }
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return response.status(400).json({ status: 400, message: "Invalid email" })
        }
        const match = bcrypt.compareSync(password, user.password)
        if (!match) {
            return response.status(400).json({ status: 400, message: "Invalid password" })
        }
        //create token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        })
        return response.status(400).json({ status:200, message: "Login successfull", token: token })
    }
    catch (err) {
        return response.status(400).json({ status: 500, message: err.message })
    }

}



export const signup = async(request,response)=>{

    try{
    
        const {email, password} = req.body
        //validate the email and password
         if(!email || !password){
            return  response.status(400).json({status:400, message:"All fields are mandatory"})
         }
        //check if email already exists or not
        const user = await userModel.findOne({email:email})
        if(user){
            return  response.status(400).json({status:400, message:"User already existed"})
        }
        //create user,if user was not exists
        const hashpassword = bcrypt.hashSync(password, 10)
        await userModel.create({email:email,password:hashpassword})
        return response.json({status:200,message:"user created successfully"})

    }catch(err){
        return  response.status(500).json({status:"500", message:err.message})
    }
}