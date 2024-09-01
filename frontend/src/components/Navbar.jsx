"use client"
import React, { useState } from "react";
import { ShoppingCart } from 'lucide-react';
import ProfileMenu from "./../components/ProfileMenu"
import {Link, useNavigate, useLocation } from "react-router-dom";



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const {pathname} = useLocation()

    const [login, setLogin] = useState(false)
    const [isMenuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <nav className="bg-blue-900 w-[100%]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[10vh]">
                    <div className="flex items-center">
                        {/* <!-- Logo --> */}
                        <div className="flex items-center" >

               


                            <Link to="/" className="text-white text-lg font-semibold">E Shop</Link>
                        </div>
                    </div>
                    <div className="flex space-x-2">


                        <button className="text-white border border-white px-2 py-1 rounded" onClick={() => navigate("/login")}><ShoppingCart /></button>
                        {login &&<ProfileMenu  isMenuOpen ={isMenuOpen}setMenuOpen= {setMenuOpen} login={login}/>  }
                        {!login && pathname != "/login" && <button className="text-sm bg-white py-0.5 px-4 rounded" onClick={()=>navigate("/login")}>Login</button>}
                    </div>
                </div>
            </div>








        </nav>
    )


};

export default Navbar;