import React, { useEffect ,useState} from 'react';
import mobileImg from "./../../public/mobiles.jpg"
import Navbar from "./../components/Navbar"
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {

  const [product,setProduct] = useState([])
   const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    const getProductbyId = async()=>{
      const response = await fetch(`http://localhost:8080/api/v1/products/${id}`)
      const {status,message, data} = await response.json()
      if(status != 200){
        console.log(message)
      }

      setProduct(data)

    
    }
    getProductbyId()

    
  },[])



  return (
    <>
    <div className='w-[100%] h-[100vh] bg-white '>
    <Navbar/>
    <div className="container mx-auto p-2">
      <button className="bg-blue-900 text-white mb-3 px-2 py-2 text-sm rounded-md" 
      onClick={()=>{navigate("/")}}>Go Back</button>
      <div className="flex  flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Product Image Section */}
        <div className="lg:w-1/2 p-3">
          <img
            src={product.image}
            alt="Cool Sneakers"
            className="w-[50%] h-[70%] rounded-lg  mx-auto "
          />
        </div>

        {/* Product Info Section */}
        <div className="lg:w-1/2 p-3">
          <h1 className="text-xl font-bold text-gray-800 mb-2">{product?.name}</h1>
          <p className="text-gray-600 mb-4">{product?.category}</p>

          <p className="text-md text-gray-700 mb-4 leading-relaxed">
{product?.description}
          </p>

          <div className="flex items-center mb-4">
            <div className="text-lg font-semibold text-gray-900">₹
            {product?.price}</div>
          </div>


          <div className="mb-4 flex gap-2 items-center">
            <div className="text-lg font-semibold  text-gray">Instock:  </div>
          <div className="text-md font-semibold text-gray-900">{product?.countInStock}</div>
          </div>

    

          {/* Add to Cart and Wishlist Buttons */}
          <div className="flex space-x-4">
            <button
              className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
            >
              Add to Cart
            </button>
         
          </div>
        </div>
      </div>


    </div>
    </div>

    </>
  );
};

export default ProductDetails;
