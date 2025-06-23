'use client'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ModeToggle } from '../Toggle/ModeToggle'
import MobileMenuOpen from '../Sheet/MobileMenuOpen'
import BrandLogo from '@/svg/BrandLogo'
import HeaderItem from './HeaderItem'
import { TbLayoutGridFilled } from "react-icons/tb";
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter();

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
            <HeaderItem />
            <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-4">
                    <ModeToggle />
                    <Button 
                    onClick={() => router.push('/dashboard')}
                    className="whitespace-nowrap dark:text-white"
                    >
                        <TbLayoutGridFilled />
                        Dashboard
                    </Button>
                </div>
                <MobileMenuOpen />
            </div>
        </div>
    </header>
  )
}

export default Header
