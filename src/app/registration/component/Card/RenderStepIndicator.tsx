import React from 'react'
import { FaCheck } from 'react-icons/fa'

const RenderStepIndicator = ({
  getCurrentStep
}:{
  getCurrentStep:number
}) => {


  return (
      <div className="flex justify-between items-center mb-8 px-4 md:px-0">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                getCurrentStep === step
                  ? "bg-blue-600 text-white"
                  : getCurrentStep > step
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"
              }`}
            >
              {getCurrentStep > step ? <FaCheck/> : step}
            </div>
            <div className="text-xs mt-2 text-center hidden md:block">
              {step === 1 && "Personal Info"}
              {step === 2 && "Race Category"}
              {step === 3 && "Add-ons"}
              {step === 4 && "Payment"}
            </div>
            {step < 4 && (
              <div className="hidden md:block w-24 h-[1px] bg-gray-300 absolute translate-x-[70px]"></div>
            )}
          </div>
        ))}
      </div>
  )
}

export default RenderStepIndicator
