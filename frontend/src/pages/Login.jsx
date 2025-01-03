
import React from "react"
import { useState } from "react"
import { User } from "lucide-react"
import { useNavigate,Link } from "react-router-dom"
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useLoginMutation } from "../redux/slices/userApiSlice";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/slices/userSlice";

const Login = () => {
    const dispatch = useDispatch()

    const [user,setUser] = useState({email:"",password:""})
    const [validationerrors, setValidationerrors] = useState({})
    const [login ] = useLoginMutation()
    const submitHandler = async(e)=>{
    e.preventDefault()
     const error = validator(user.email,user.password)
     if(Object.keys(error).length != 0){
        return  //restrict api call when error exist
     }  

    try{
        const response = await login(user).unwrap()
        const {user:User} = response
        dispatch(saveUser(User))
    }catch(err){
        console.log(err)
    }


   
     


    
    }

    const changeHandler = (e)=>{
        setUser({...user, [e.target.name] : e.target.value})
        setValidationerrors({...validationerrors, [e.target.name]: ""})

    }

    const validator = (email,password)=>{
       const  error = {}
        const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const passwordRegex =  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/
        if(!email){
            error.email = 'Email is required'
           
        }
        else if(!emailRegex.test(email)){
            error.email = "Email is invalid"

        }
        if (!password){
            error.password = "Password is required"
        
        }
        else if(!passwordRegex.test(password)){
            error.password = "password is invalid"
        }
        setValidationerrors(error)
        return error





    }

    return (
        <section className="bg-white h-[100vh] bg-gray-150">
            <div className="flex flex-col items-center justify-center px-2 py-2 mx-auto md:h-[90vh] lg:py-0">
                <h1 className="text-center text-xl font-bold text-black mb-4">
                    Login to your account
                </h1>
                <div className="w-full border border-gray-300 text-black bg-white rounded-md shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-5 space-y-4 md:space-y-6 ">
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter email"
                                onChange = {changeHandler}
                                className="placeholder:text-xs border border-gray-300  rounded-md focus:border-blue-500  focus:outline-none block w-full p-1" />
                            </div>
                            {validationerrors?.email && <span className="text-red-500 text-xs m-0">{validationerrors.email}</span>}
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-blackplaceholder:text-xl">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter password"
                                onChange = {changeHandler}
                                className="placeholder:text-xs border border-gray-300  rounded-md focus:border-blue-500  focus:outline-none block w-full p-1" />
                            </div>
                            {validationerrors?.password && <span className="text-red-500 text-xs mt-0">{validationerrors.password}</span>}
                        
                            <button type="button" className="w-full mt-1 text-white bg-blue-900 hover:bg-yellow-600  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={submitHandler}>Login to your account</button>   
                                                     <p className="text-sm font-light ">
                                Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login