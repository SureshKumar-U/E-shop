import { useState } from 'react'
import { Outlet} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from "./pages/Signup"
import Cart from "./pages/CartPage"
import Product from "./pages/ProductDetails"
import Footer from './components/Footer'
import AlertContainer from './components/AlertContainer'
import Navbar from './components/Navbar'
function App() {
  return (
    <div >
      {/* <AlertContainer/> */}
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
