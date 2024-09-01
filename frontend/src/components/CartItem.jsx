"use client"
import React from "react"
import mobileImg from "./../../public/mobiles.jpg"

const CartItem = ({itemName, itemPrice}) => {


    return (
        <>
<div className="flex flex-col md:flex-row mx-auto items-center shadow-lg justify-between border-b border-gray-200 p-3">
  <div className="flex items-center w-full md:w-auto">
    <img
      src={mobileImg}
      alt="Product Image"
      height={24}
      width={24}
      className="w-24 h-24 object-cover rounded-md mr-4"
    />
    <div className="w-full md:w-40">
      <h2 className="text-sm font-bold text-gray-800 truncate">{itemName}</h2>
      <p className="text-gray-600">price:{itemPrice}</p>
    </div>
  </div>
  <div className="w-full md:w-24 text-center flex-shrink-0 mt-2 md:mt-0">
    <p className="text-gray-600">{itemPrice}</p>
  </div>
  <div className="flex items-center mt-2 md:mt-0">
    <input
      type="number"
      min="1"
      className="w-16 border border-black rounded-md text-center"
    />
    <button className="ml-4 text-red-500 hover:text-red-700">Remove</button>
  </div>
</div>



        </>
    )
}

export default CartItem