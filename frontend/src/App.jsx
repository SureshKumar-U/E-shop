import { useState } from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from "./pages/Signup"
import Cart from "./pages/CartPage"
import Product from "./pages/ProductDetails"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element = {<Login/>} />
      <Route path="/signup" element = {<Signup/>} />
      <Route path="/cart" element = {<Cart/>} />
      <Route path="/product/:id" element = {<Product/>} />
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
