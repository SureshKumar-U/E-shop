import ProductsList from "./../components/ProductsList"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./../components/Navbar"
import { useGetAllProductsQuery } from "../redux/slices/productApiSlice"
import AlertMessage from "../components/AlertMessage"
import { addItem } from "../redux/slices/cartSlice"
import Footer from "../components/Footer"
import { useDispatch } from "react-redux"
const Products = () => {
  const router = useNavigate()
  const dispatch = useDispatch()
  const [category, setCategory] = useState("all")
  const {data:products,isLoading, error,isError} = useGetAllProductsQuery(category)
  const [cartItems, setCartItems] = useState([])
   

  const clickHandler = (newproduct) => {
   
    // try{
    //   dispatch(addItem(newproduct))
    // }catch(error){
    //   console.log(error)
    // }

  
    // const cartitems = JSON.parse(localStorage.getItem("cartItem"))
    // const itemExist = cartItems.find((item) => item.id == newproduct.id)
    // if (itemExist) {
    //   return
    // }

    // const updatedCart = [...cartItems, newproduct]
    // localStorage.setItem("cartItems", JSON.stringify(updatedCart))
    // setCartItems(updatedCart)
 
    // add the item in local storage 
    //and update the cart context
    //navigate the user to the cart page

    // router.push("/cart")
  }

  const changeHandler = (e)=>{
    setCategory(e.target.value)
  }
  return (
    <div className="w-100  min-h-[100vh]">
      <Navbar />
      
      <div className="container mx-auto px-10 mt-2 border-box" >
        <p className="font-semibold">Products</p>
        <div className="mb-4  col-span-12 mt-2 md:flex-nowrap">
          <select  onChange={changeHandler} className="text-sm border border-slate-500 py-1 rounded-md focus:outline-none">
            <option value="all">All</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products?.data.length > 0 && <ProductsList clickHandler={clickHandler} products={products.data} cartItems={cartItems} />
}
        </div>
      </div>
      <Footer/>

    </div>

  )
}

export default Products