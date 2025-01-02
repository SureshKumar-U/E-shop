import React from "react"

const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-blue-900 text-white text-center p-2 fixed bottom-0 w-full">
            <p>© {currentYear} E Shop. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer