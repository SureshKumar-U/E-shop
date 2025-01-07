import React, { useEffect, useState } from 'react';
import mobileImg from "./../../public/mobiles.jpg";
import Navbar from "./../components/Navbar";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../redux/slices/productApiSlice';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error, isError } = useGetProductQuery(id);
  const navigate = useNavigate();
  const {cartItems} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [quantity,setQuatntity] = useState(1)

  const clickHandler = ()=>{
    try{
      dispatch(addItem({...product?.data,quantity}))
    }catch(error){
      console.log(error)
  }
}  

const changeHandler = (e)=>{
  const quantity = e.target.value
  dispatch(addItem({...product?.data,quantity}))

}
  return (
    <>
      <div className='w-full min-h-screen bg-gray-50'>
        <div className="container mx-auto px-2 mt-1 ">
          <Link
            className="bg-blue-900 text-sm px-2 py-1 text-sm rounded-md text-white hover:bg-blue-800 transition duration-300 mb-2 inline-block"
            to={"/"}
          >
            Go Back
          </Link>
          {isLoading ? (
            <p className="text-center text-lg text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-center text-lg text-red-500">{error?.message}</p>
          ) : (
            <div className="bg-white shadow-xl rounded-md border border-gray-300 ">
              <div className="flex flex-col md:flex-row p-4 min-h-[200px] ">
                {/* Product Image */}
                <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
                  <img
                    src={product?.data.image}
                    alt={product?.data?.name}
                    className="w-full max-w-[200px] max-h-[300px] object-fit"
                  />
                </div>

                {/* Product Details */}
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <h1 className="text-xl font-semibold text-gray-800 mb-2">
                    {product?.data?.name}
                  </h1>
                  <p className="text-sm text-gray-700 mb-5">{product?.data?.description}</p>

                  <div className="flex items-center mb-5">
                    <span className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {product?.data?.rating} ★
                    </span>
                    <span className="text-sm text-gray-500 ml-3">
                      {product?.data?.numReviews} Reviews
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-bold text-gray-900">
                      ${product?.data?.price}
                    </span>
                    
                    {/* <p className="text-green-600 text-sm font-semibold">
                      Free Delivery
                    </p> */}
                  </div>

                  <div className="flex space-x-3 mb-3">
                    <button className="flex-1 bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 rounded-md shadow-md transition duration-300">
                      Buy Now
                    </button>
                    {!cartItems?.find(item => item._id == product?.data._id) ?
                    <button className="flex-1 bg-yellow-400 hover:bg-gray-300
                     text-gray-800 font-semibold py-2 rounded-md shadow-md transition duration-300"
                     onClick={clickHandler}>
                      Add to Cart
                    </button> : <button className="flex-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    onClick = {()=>navigate("/cart")}>Go to Cart</button>}
     <select onChange={changeHandler}  className="w-25 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 max-h-40 overflow-y-auto">
  {Array(product?.data?.countInStock).fill(null).map((item, index) => (
    <option  className="block px-4 py-2 text-sm text-gray-700" key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ))}
</select>
                  </div>

                  {/* Product Features (optional) */}
                  {/* <ul className="text-sm text-gray-700">
                    <li className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Core i5 Processor (12th Gen)
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      8 GB DDR4 RAM
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Windows 11 Home
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      512 GB SSD
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer/>
      </div>
  
    </>
  );
};

export default ProductDetails;
