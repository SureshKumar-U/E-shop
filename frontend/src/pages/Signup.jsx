
import React, { useState } from "react"
import { Link } from "react-router-dom"
import {useSignupMutation} from "../redux/slices/userApiSlice"
import { saveUser } from "../redux/slices/userSlice"
import { useDispatch } from "react-redux"
const Signup = () => {

    const [user,setUser] = useState({email:"",password:""})
    const [validationerrors, setValidationerrors] = useState({})
    const [signup] = useSignupMutation()  
    const dispatch = useDispatch()
    const submitHandler = async(e)=>{
    e.preventDefault()
     const error = validator(user.email,user.password)
     if(Object.keys(error).length != 0){
        return  //restrict api call when error exist
     }

     try{
       const response = await signup(user).unwrap()
         console.log(response)
        //  dispatch(saveUser(response))
     }
     catch(err){
         console.log(err)
     }

    //  if(status !== 200){
    //     alert(message)
    //     return
    //  }
    //  alert(message)
    //  setUser({email:"", password:""})
    //  router.push("/")


     

     
   

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
        <section className="bg-white h-[100vh] ">
            <div className="flex flex-col items-center justify-center p-2 mx-auto md:h-[90vh] lg:py-0">
                <h1 className="text-center text-xl  font-bold text-black mb-4">
                    Create your account
                </h1>
                <div className="w-full border border-gray-300 text-black bg-white rounded-lg shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-5 space-y-4 md:space-y-6 ">
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium">Email</label>
                                <input type="email"
                                 name="email" 
                                 id="email" 
                                 className="placeholder:text-xs border border-gray-300  rounded-lg focus:border-blue-500  focus:outline-none block w-full p-1" 
                                 placeholder="Enter email"
                                 onChange={changeHandler}/>
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-black" >Password</label>
                                <input type="password" name="password" id="password" 
                                placeholder="Enter password" 
                                className="placeholder:text-xs border border-gray-300  rounded-lg focus:border-blue-500  focus:outline-none block w-full p-1"
                                onChange={changeHandler} />
                            </div>
                        
                            <button type="button"
                             className="w-full text-white bg-blue-900 hover:bg-yellow-600  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                             onClick={submitHandler}>Create your account</button>   
                                                     <p className="text-sm font-light ">
                                Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup