
import cartItemsdata from "./cartitems"
import CartItem from "./../components/CartItem"
import React from "react"
import Navbar from "./../components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../redux/slices/cartSlice"
const Cartpage = () => {

    const {cartItems} = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const removeItemHandler = (id) => {
        dispatch(removeItem(id))
    }
    return (
        <>
        <Navbar/>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <header className="mb-2">
                    <h4 className=" font-bold text-gray-800">Shopping Cart</h4>
                </header>

                <div className="bg-white rounded-lg shadow-md ">
                    {/* <!-- Cart Items --> */}
                    <div className="space-y-4">
                        {/* <!-- Cart Item --> */}

                  { cartItems.length ?  cartItems.map(item=>{
                    return (
                         <CartItem  id = {item._id}  removeItemHandler={removeItemHandler}image={item.image} itemName ={item.name} itemPrice = {item.price}/>
                    )
                  }):<>No data found</>}
                        
      
              
 
                
                        {/* <!-- End of Cart Items --> */}
                    </div>

                    {/* <!-- Cart Summary --> */}
                    <div className="mt-6 border-t border-gray-200 p-3 flex justify-between items-center">
                        <div className="text-gray-800 ">Total:</div>
                        <div className="text-2xl font-bold text-gray-800">40.00</div>
                    </div>

                    {/* <!-- Checkout Button --> */}z
                    <div className="mt-6 flex justify-end p-3 ">
                        <button className=" bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Checkout
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cartpage