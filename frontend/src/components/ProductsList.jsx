import React from 'react'

import {useNavigate} from "react-router-dom"

const ProductsList = ({products,clickHandler,cartItems }) => {

    const navigate = useNavigate()


  return (
    <>
          {products?.map(product=>{
        return (
          <>
  <div className="p-1 mx-auto min-h-[250px] w-[200px] bg-white shadow-2xl rounded-lg border border-slate-300 flex flex-col">
  <img
    src={product.image}
    height={500}
    width={70}
    alt="Product 1"
    className="!h-[100px] mx-auto"
  />
  <div className="p-2 mt-2 flex-grow">
    <div className="text-xs cursor-pointer"
     onClick={()=>{navigate(`/product/${product._id}`)}} 
     >{product.name}</div>
    <p className="text-gray-600 text-sm mt-1">{product.price}</p>
  </div>
  <div className="p-2 mt-auto">
    {cartItems.find(item=> item.id == product.id ) ? <button
      className="mt-1 text-sm w-full bg-yellow-400 text-slate py-1 rounded hover:bg-yellow-500"
      onClick={()=>{clickHandler(product)}}>
  Go to cart
    </button> : <button
      className="mt-1 text-sm w-full bg-yellow-400 text-slate py-1 rounded hover:bg-yellow-500"
      onClick={()=>{clickHandler(product)}}
    >
      Add to cart
    </button>}
  </div>
</div>

          </>
        )
      })}

    </>
  )
}

export default ProductsList