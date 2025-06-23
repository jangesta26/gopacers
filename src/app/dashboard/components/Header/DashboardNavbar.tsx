import BrandLogo from '@/svg/BrandLogo'
import Link from 'next/link'
import React from 'react'
import Notification from './Notification'
import SwitchMode from '@/components/Switch/SwitchMode'

const DashboardNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
            <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
                <div className="bg-primary text-white p-1 rounded-full">
                    <BrandLogo />
                </div>
                <span className="text-xl font-bold text-primary dark:text-blue-400">
                    GoPacers
                </span>
            </Link>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex gap-4">
                    <SwitchMode />
                    <Notification />
                </div>
            </div>
        </div>
    </header>
  )
}

export default DashboardNavbar
