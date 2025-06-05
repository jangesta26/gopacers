import BrandLogo from '@/svg/BrandLogo'
import React from 'react'
import RegistrationQuicklinks from './RegistrationQuicklinks'

const RegistrationFooter = ({
eventTitle,
createdAt,
location
}:{
eventTitle:string
createdAt:string
location:string
}) => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-600 text-white p-1 rounded-full">
                <BrandLogo />
              </div>
              <span className="text-lg font-bold">{eventTitle}</span>
            </div>
            <p className="text-center text-sm text-gray-400">
              {createdAt} • {location}
            </p>
          </div>
          <RegistrationQuicklinks 
          quickLinks={[
            {
              id:1,
              path:'#something',
              labelName:'Contact Us',

            },
            {
              id:2,
              path:'#something',
              labelName:'FAQ',

            },
            {
              id:3,
              path:'#something',
              labelName:'Terms & Conditions',

            },
            {
              id:4,
              path:'#something',
              labelName:'Privacy Policy',

            },
            {
              id:5,
              path:'/',
              labelName:'Back to Event Page',

            },
          ]}
          />
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          &copy; 2025 GoPacers. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default RegistrationFooter
