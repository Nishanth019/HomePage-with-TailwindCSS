import React from 'react'
import { FaPlus } from 'react-icons/fa';

const Header1 = () => {
  return (
    <div className="flex p-2 tracking-tight space-x-7  justify-between items-center h-auto w-screen bg-stone-800	text-gray-200 lg:justify-center">
      <p className=" text-left transition cursor-pointer  hover:underline underline-offset-4 ">Click and Collect is now available at select stores. Enjoy complimentary carbon neutral shipping on all orders. </p><FaPlus size={12} />
      
    </div>
  )
}

export default Header1
