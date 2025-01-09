"use client"
import React from "react"
import mobileImg from "./../../public/mobiles.jpg"
import { Trash } from 'lucide-react';
const CartItem = ({ id, image, itemName, itemPrice, removeItemHandler, qty, countInStock, changeHandler, product }) => {

  return (
    <>
      <div className=" flex flex-col md:flex-row  items-center shadow-lg justify-between border-b border-gray-200 p-4">
        <div className="flex items-center  gap-10 w-full md:w-auto">
          <img
            src={image}
            height={50}
            width={50}
            className="object-cover rounded-md "
          />
          <div className="w-full md:w-40">
            <h2 className="text-sm font-bold text-gray-80 ">{itemName}</h2>
          </div>
        </div>
        <div className="w-[50%] md:w-24 text-center flex-shrink-0 mt-2 md:mt-0">
          <p className="text-gray-600 text-sm">{itemPrice}</p>
        </div>
        <div className="flex items-center mt-2 md:mt-0">

          <select onChange={(event) => changeHandler(product, event)}
            value={qty} className="w-25 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 max-h-40 overflow-y-auto">
            {Array(countInStock).fill(null).map((item, index) => (
              <option className="block px-4 py-2 text-sm text-gray-700" key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <button className="ml-4 text-black-500 p-2 bg-gray-300 rounded-md" onClick={() => removeItemHandler(id)}><Trash /></button>
        </div>
      </div>
    </>
  )
}

export default CartItem