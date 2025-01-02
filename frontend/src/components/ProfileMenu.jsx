import React from "react"

import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";


const ProfileMenu = ({ isMenuOpen, setMenuOpen, login }) => {
    return (
        <div >
            {login &&
                <>
                    <img
                        width={8}
                        height={8}
                        className=" relative inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src={"/profile.jpg"} alt="profile.jpg"
                        onClick={() => setMenuOpen(!isMenuOpen)} />

                    {/* <!-- Profile dropdown --> */}
                    {isMenuOpen && <div


                        id="user-menu"
                        className=" absolute right-1 z-10 mt-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg divide-y ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabindex="-1"
                    >
                        <Link
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-0"
                            onClick={() => setMenuOpen(!isMenuOpen)}
                        >Your Profile</Link >
                        <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                            role="menuitem"
                            tabindex="-1"
                            id="user-menu-item-2"
                            onClick={() => setMenuOpen(!isMenuOpen)}
                        >Sign Out</Link>
                    </div>}



                </>}

        </div>
    )
}

export default ProfileMenu