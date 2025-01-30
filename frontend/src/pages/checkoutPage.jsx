import { useState } from "react"
import { Link } from "react-router-dom"
import { saveShippingAddress } from "../redux/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Stepper from "../components/stepper"
const CheckoutPage = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ShippingAddress = useSelector((state)=> state.cart)
    const [country,setCountry] = useState("")
    const [address,setAddress] = useState("")
    const [postalcode,setpostalCode] = useState("")
    const [city, setCity] = useState("")

    const submitHandler = (e)=>{
      console.log(country,address,postalcode, city)
        if(!country  || !address || !postalcode || !city){
            alert("all fields are mandatory")
            return
        }
       dispatch(saveShippingAddress({country,address,postalcode, city}))
       navigate("/")
    

    }
    return (
         <section className="bg-white min-h-[82.5vh]">
                   <div className="flex flex-col items-center justify-center p-2 mx-auto lg:py-0">
                       <h1 className=" text-xl font-bold text-black m-3">
                           Shipping
                       </h1>
                       <Stepper/>
                       <div className="w-[500px] border border-gray-300 text-black bg-white rounded-sm shadow-2xl md:mt-0 sm:max-w-md xl:p-0">
                           <div className="p-4">
                               <form className="space-y-2">
                                   <div>
                                       <label for="address" className="block mb-1 text-sm  ">Address</label>
                                       <input type="text"
                                        name="adress" 
                                        id="address" 
                                        className="placeholder:text-xs border border-gray-300  rounded-sm focus:border-blue-500  focus:outline-none block w-full p-1" 
                                        placeholder="Enter address"
                                        onChange={(e)=>{setAddress(e.target.value)}}
                                        />
                                   </div>
                                   <div>
                                       <label for="city" className="block mb-1  text-sm font-medium text-black" >City</label>
                                       <input type="text" name="City" id="city" 
                                       placeholder="Enter city" 
                                       className="placeholder:text-xs border border-gray-300  rounded-sm focus:border-blue-500  focus:outline-none block w-full p-1"
                                       onChange={(e)=>{setCity(e.target.value)}}
                                        />
                                   </div>
                                   <div>
                                       <label for="postal_code" className="block mb-1  text-sm font-medium text-black" >Postal code</label>
                                       <input type="text" name="City" id="postal_code" 
                                       placeholder="Enter postal code" 
                                       className="placeholder:text-xs border border-gray-300  rounded-sm focus:border-blue-500  focus:outline-none block w-full p-1"
                                       onChange={(e)=>{setpostalCode(e.target.value)}}
                                        />
                                   </div>
                                   <div>
                                       <label for="country" className="block mb-1  text-sm font-medium text-black" >Country</label>
                                       <input type="text" name="City" id="country" 
                                       placeholder="Enter country" 
                                       className="placeholder:text-xs border border-gray-300  rounded-sm focus:border-blue-500  focus:outline-none block w-full p-1"
                                       onChange={(e)=>{setCountry(e.target.value)}}
                                        />
                                   </div>
                                   
                                   <button type="button"
                                    className=" mt-1 text-white bg-blue-900 hover:bg-blue-800  focus:outline-none  rounded-sm text-sm px-2 py-1.5 text-center"
                                    onClick={submitHandler}
                                    >Continue</button>   
                                    
                               </form>
                           </div>
                       </div>
                   </div>
               </section>
    )
}


export default CheckoutPage