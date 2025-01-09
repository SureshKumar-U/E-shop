"use client"
import React, { useState } from "react";
import { ShoppingCart } from 'lucide-react';
import ProfileMenu from "./../components/ProfileMenu"
import {Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation()
    const {cartItems} = useSelector(state => state.cart)
    const [login, setLogin] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <nav className="bg-blue-900 w-[100%]">
            <div className="max-w-7xl mx-auto p-1 me-2">
                <div className="flex items-center justify-between h-[50px]">
                    <div className="flex items-center">
                        {/* <!-- Logo --> */}
                        <div className="flex items-center" >
                            <Link to="/" className="text-white text-lg font-semibold">E Shop</Link>
                        </div>
                    </div>
                    <div className="flex relative space-x-2">
                    <span class=" absolute -left-0.3 -top-3 inline-flex items-center  px-1 py-0.2  rounded-full text-xs font-medium bg-white text-black">{cartItems?.length}</span>
                        <button className="text-white text-sm border border-white px-2 py-1 rounded-sm relative" onClick={() => navigate("/cart")}>  
                            <ShoppingCart /></button>
                        {login &&<ProfileMenu  isMenuOpen ={isMenuOpen}setMenuOpen= {setMenuOpen} login={login}/>  }
                        {!login && pathname != "/login" && pathname != "/signup" && <button className="text-xs bg-white px-2 rounded" onClick={()=>navigate("/login")}>Login</button>}
                    </div>
                </div>
            </div>








        </nav>
    )


};

export default Navbar;