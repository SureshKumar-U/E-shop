import React from 'react'

import { Link, useNavigate } from "react-router-dom"
import Rating from './Rating'

const ProductsList = ({ products, clickHandler, cartItems }) => {

  const navigate = useNavigate()


  return (
    <>
      {products?.map(product => {
        return (
          <>
            <div className="box-border min-h-[150px] p-2 w-[180px] bg-white shadow-2xl rounded-lg border border-slate-300 flex flex-col">
              <img
                src={product.image}
                alt="Product 1"
                className="!h-[120px] "
              />
              <div className=" mt-2 flex-grow">
                <Link className="text-xs  text-slate-900  cursor-pointer"
                  to={`/product/${product._id}`}
                >{product.name.slice(0, 18)}...</Link>
                <p className="text-gray-600 text-sm ">${product.price}</p>
              </div>
              
              <Rating rating={product?.rating} />
              <p className='text-sm'>{product.numReviews} reviews</p>

              

            </div>

          </>
        )
      })}

    </>
  )
}

export default ProductsList