
import cartItemsdata from "./cartitems"
import CartItem from "./../components/CartItem"
import React from "react"
import Navbar from "./../components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../redux/slices/cartSlice"
const Cartpage = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const dispatch = useDispatch()
    const removeItemHandler = (id) => {
        dispatch(removeItem(id))
    }

    const changeHandler = (product, event) => {
        const quantity = event.target.value
        dispatch(addItem({ ...product, quantity }))
    }
    return (
        <>
            <Navbar />
            <div className="container p-5">
                <header className="mb-1">
                    <h1 className=" font-bold text-gray-800">Shopping Cart</h1>
                </header>
                <div className="bg-white rounded-lg jutsify-around flex gap-10 flex-col md:flex-row">
                    {/* <!-- Cart Items --> */}
                    <div className="space-y-2 flex-1">
                        {/* <!-- Cart Item --> */}

                        {cartItems.length ? cartItems.map(item => {
                            return (
                                <CartItem
                                    product={item}
                                    id={item._id}
                                    removeItemHandler={removeItemHandler}
                                    changeHandler={changeHandler}
                                    image={item.image}
                                    itemName={item.name}
                                    itemPrice={item.price}
                                    qty={item.quantity}
                                    countInStock={item.countInStock}
                                />

                            )
                        }) : <>No data found</>}

                        {/* <!-- End of Cart Items --> */}
                    </div>
                    
                        {/* <!-- Cart summary --> */}
                    <div class=" min-w-[300px] max-h-[250px] p-4 bg-white border border-gray-200 rounded-sm shadow-sm ">
                        <h6 class="mb-3  font-bold  tracking-tight text-gray-700 dark:text-white">Cart summary</h6>
                        <div className="border border-grey-900 "></div>
                        <div className="flex justify-between m-1">
                        <p class="text-sm text-gray-700 dark:text-gray-400">subtotal</p>
                        <p class="text-sm text-gray-700 dark:text-gray-400">{cart.itemsPrice}</p>
                        </div>
                        <div className="flex justify-between m-1">
                        <p class="text-sm text-gray-700 dark:text-gray-400">Tax</p>
                        <p class="text-sm text-gray-700 dark:text-gray-400">{cart.taxPrice}</p>
                        </div>
                        <div className="flex justify-between m-1">
                        <p class="text-sm text-gray-700 dark:text-gray-400">Shipping</p>
                        <p class="text-sm text-gray-700 dark:text-gray-400">{cart.shippingPrice}</p>
                        </div>
                        <div className="flex justify-between m-1">
                        <p class=" text-sm text-gray-700 dark:text-gray-400">Order Total</p>
                        <p class=" text-sm font-bold text-gray-700 dark:text-gray-400">{cart.totalPrice}</p>
                        </div>
                      
                        <button className="mt-3 w-full text-sm bg-blue-900 text-white p-2 rounded-md shadow-md hover:bg-blue-800 focus:outline-none">
                            Proceed to checkout
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cartpage