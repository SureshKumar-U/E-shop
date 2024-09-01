import ProductsList from "./../components/ProductsList"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./../components/Navbar"


const Products = () => {
  const router = useNavigate()

  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState([])

  const getAllProducts = async () => {

    try{
      const response = await fetch("http://localhost:8080/api/v1/products")
      const {status,message,data} = await response.json()
      setProducts(data)

    }catch(err){
      console.log(err)
    }
    const cartItems = JSON.parse(localStorage.getItem("cartItems"))
    if(!cartItems){
      localStorage.setItem("cartItems",JSON.stringify([]))
      return
    }
    setCartItems(cartItems)
  }
  useEffect(() => {
    getAllProducts()
  },[])

  const getFilteredProducts = async(event)=>{

    const category = event.target.value
    if(!category){
      return 
    }
    if(category == "all"){
      getAllProducts()
      return
    }
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const filteredProducts = await response.json()
    setProducts(filteredProducts)

  }

  const clickHandler = (newproduct) => {
      const cartitems = JSON.parse(localStorage.getItem("cartItem"))

      const itemExist = cartItems.find((item)=>item.id == newproduct.id)
      if(itemExist){
        return
      }

      const updatedCart = [...cartItems, newproduct]
      localStorage.setItem("cartItems",JSON.stringify(updatedCart))
      setCartItems(updatedCart)

    // add the item in local storage 
    //and update the cart context
    //navigate the user to the cart page

    // router.push("/cart")
  }


  return (
    <div className="w-100  min-h-[100vh]">
    <Navbar/>
     <div className="container mx-auto px-10 mt-6 border-box" >
      <p className="font-semibold">Products</p>
      <div className="mb-4  col-span-12 mt-2 md:flex-nowrap">
        <select onChange={getFilteredProducts} className="text-sm border border-slate-500 py-1 rounded-md focus:outline-none">
        <option value="all">All</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's clothing</option>
      <option value="electronics">Electronics</option>
      <option value="women's clothing">Women's clothing</option>
    </select>


      </div>



      <div className="grid gap-10  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        <ProductsList clickHandler={clickHandler} products={products} cartItems={cartItems} />

      </div>
    </div>

    </div>
   
  )
}

export default Products