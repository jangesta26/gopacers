import React from 'react'
import { FaMedal, FaTshirt } from 'react-icons/fa'
import { FaCamera } from "react-icons/fa6";

const RegistrationBenefits = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
            Registration Benefits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-3 mr-4">
                <FaMedal className='text-blue-600'/>
            </div>
            <div>
                <h4 className="font-semibold mb-1">Finisher Medal</h4>
                <p className="text-sm text-gray-600">
                Exclusive medal for all participants who complete the race
                </p>
            </div>
            </div>
            <div className="flex items-start">
            <div className="bg-green-100 rounded-full p-3 mr-4">
                <FaTshirt className="text-green-600"/>
            </div>
            <div>
                <h4 className="font-semibold mb-1">Race Kit</h4>
                <p className="text-sm text-gray-600">
                Premium race bib, timing chip, and sponsor goodies
                </p>
            </div>
            </div>
            <div className="flex items-start">
            <div className="bg-purple-100 rounded-full p-3 mr-4">
                <FaCamera className=" text-purple-600"/>
            </div>
            <div>
                <h4 className="font-semibold mb-1">Free Photos</h4>
                <p className="text-sm text-gray-600">
                Professional race photos available for download
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default RegistrationBenefits
