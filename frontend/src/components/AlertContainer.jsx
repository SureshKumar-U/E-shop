import React from "react"

const AlertContainer = ({ message, type }) => {
    const  bgcolor = type == "error" ? "bg-red-900" : "bg-green-700"
 return (
    <div className="w-100 relative"> 
    <div className= {`${bgcolor} hidden absolute right-2 rounded-sm text-white  w-auto min-w-[300px]  mt-1 border-red-500 p-1 px-3 mx-auto`}  role="alert">
  <p class="font-bold">Informational message</p>
  <p class="text-sm">{message}</p>
</div>

    </div>
 )
} 

export default AlertContainer