import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FaFacebookF, FaTwitter, FaStrava, FaCcVisa, FaCcMastercard, FaCcPaypal   } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import SocialMedia from './SocialMedia'
import { FaCcAmex } from 'react-icons/fa6'
import Link from 'next/link';
import QuickLinks from './QuickLinks';

const Footer = ({
  brandLogo,
  title,
  description,
}:{
  brandLogo:React.ReactNode,
  title:string
  description:string,
}) => {
  return (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-600 text-white p-1 rounded-full">
              {brandLogo}
            </div>
            <span className="text-xl font-bold text-white">{title}</span>
          </div>
          <p className="text-gray-400 mb-6">
            {description}
          </p>
          <div className="flex space-x-4">
            <SocialMedia 
              socialMediaLinks={[
                {
                  id: 1,
                  pathname: 'facebook.com/goraceday',
                  icon: <FaFacebookF />,
                },
                {
                  id: 2,
                  pathname: 'twitter.com/goraceday',
                  icon: <FaTwitter />,
                },
                {
                  id: 3,
                  pathname: 'instagram.com/goraceday',
                  icon: <AiFillInstagram />,
                },
                {
                  id: 4,
                  pathname: 'strava.com/goraceday',
                  icon: <FaStrava />,
                },
              ]}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <QuickLinks
          quickLinksItem={[
            {
              id:1,
              pathname:'/',
              labelName:"Home"
            },
            {
              id:2,
              pathname:'#something',
              labelName:"Events"
            },
            {
              id:3,
              pathname:'#something',
              labelName:"Gallery"
            },
            {
              id:4,
              pathname:'#something',
              labelName:"Community"
            },
            {
              id:5,
              pathname:'#something',
              labelName:"About Us"
            },
            {
              id:6,
              pathname:'#something',
              labelName:"Contact"
            }
          ]}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Resources</h3>
          <QuickLinks
          quickLinksItem={[
            {
              id:1,
              pathname:'#something',
              labelName:"Training Plans"
            },
            {
              id:2,
              pathname:'#something',
              labelName:"Race Reviews"
            },
            {
              id:3,
              pathname:'#something',
              labelName:"Running Guides"
            },
            {
              id:4,
              pathname:'#something',
              labelName:"Nutrition Tips"
            },
            {
              id:5,
              pathname:'#something',
              labelName:"Injury Prevention"
            },
            {
              id:6,
              pathname:'#something',
              labelName:"Gear Reviews"
            }
          ]}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get the latest updates on races and running tips.
          </p>
          <div className="flex mb-4">
            <Input
              placeholder="Your email address"
              className="bg-gray-800 border-gray-700 text-white rounded-r-none"
            />
            <Button className="rounded-l-none !rounded-button whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        {/* Payment Method */}
          <div className="flex items-center space-x-4 mt-6">
            <div className="flex items-center">
              <FaCcVisa className='text-2xl text-gray-400 mr-2'/>
              <FaCcMastercard className='text-2xl text-gray-400 mr-2'/>
              <FaCcAmex className='text-2xl text-gray-400 mr-2'/>
              <FaCcPaypal className='text-2xl text-gray-400 mr-2'/>
            </div>
          </div>
        </div>
      </div>
      {/*  Terms and Policy */}
      <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left md:flex md:justify-between md:items-center">
        <p className="text-gray-500">
          &copy; 2025 GoPacers. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
            <li>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-400 text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-400 text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-400 text-sm"
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
