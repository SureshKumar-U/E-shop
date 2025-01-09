import ProductsList from "./../components/ProductsList"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./../components/Navbar"
import { useGetAllProductsQuery } from "../redux/slices/productApiSlice"
import { addItem } from "../redux/slices/cartSlice"
import Footer from "../components/Footer"
import { useDispatch } from "react-redux"
import Carousel from "../components/carousel"
const Products = () => {
  const router = useNavigate()
  const dispatch = useDispatch()
  const [category, setCategory] = useState("all")
  const { data: products, isLoading, error, isError } = useGetAllProductsQuery(category)
  const [cartItems, setCartItems] = useState([])




  const changeHandler = (e) => {
    setCategory(e.target.value)
  }
  return (
    <div className="w-100 min-h-[95vh] h-auto p-5 overflow-scroll-y">
      <div className="container mx-auto  mt-2 border-box" >
        <Carousel/>
        <div className="mt-5 md:flex-nowrap">
          <select onChange={changeHandler} className="text-sm border border-slate-500 py-1 rounded-md focus:outline-none">
            <option value="all">All</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>
        <p className="text-center mb-6 text-2xl font-bold">Latest products</p>
        {products?.data.length > 0 ? <div className="grid gap-4 justify-around grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <ProductsList  products={products.data} />  </div> :
          <p className="text-center font-bold">No products found</p>
        }
      </div>


    </div>

  )
}

export default Products