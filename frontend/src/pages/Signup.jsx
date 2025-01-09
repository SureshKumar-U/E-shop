
import React, { useState } from "react"
import { Link } from "react-router-dom"
import {useSignupMutation} from "../redux/slices/userApiSlice"
import { saveUser } from "../redux/slices/auth.slice"
import { useDispatch } from "react-redux"
import { validator } from "../utils/validations"
const Signup = () => {

    const [user,setUser] = useState({email:"",password:""})
    const [validationerrors, setValidationerrors] = useState({})
    const [signup] = useSignupMutation()  
    const dispatch = useDispatch()

    const submitHandler = async(e)=>{
    e.preventDefault()
     const errors = validator(user.email,user.password)
     if(Object.keys(errors).length != 0){
        return  //restrict api call when error exist
     }
     //make an api call to signup
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

    return (
        <section className="bg-white h-[82.5vh] flex items-center ">
            <div className="flex flex-col items-center justify-center p-2 mx-auto lg:py-0">
                <h1 className="text-center text-lg font-bold text-black mb-3">
                    Create your account
                </h1>
                <div className="w-[380px] border border-gray-300 text-black bg-white rounded-md shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-4 space-y-4 md:space-y-6 ">
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