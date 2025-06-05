import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const NavBar = ({
    eventTitle
}:{
    eventTitle:string
}) => {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center">
            <Link
                href="/"
                data-readdy="true"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
                <FaArrowLeft  className='mr-2'/>
                <span className="hidden md:inline">Back to Event Page</span>
            </Link>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
                {eventTitle}
            </h1>
            <div className="w-[100px]"></div> {/* Spacer for centering */}
        </div>
    </header>
  )
}

export default NavBar
