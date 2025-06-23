'use client'
import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from '../ui/sheet'
import { Separator } from '../ui/separator'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Menu, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const mobileMenuItems = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Events',
    path: '/events',
  },
  {
    id: 3,
    name: 'Gallery',
    path: '/gallery',
  },
  {
    id: 4,
    name: 'Community',
    path: '/community',
  },
]

const MobileMenuOpen = () => {

  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden !rounded-button whitespace-nowrap"
        >
          <Menu className='h-9 w-9' />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-4">
        <SheetTitle className="text-lg font-semibold mb-4">Mobile Menu</SheetTitle>

        <div className="flex flex-col gap-6 mt-2">
          {mobileMenuItems.map((item) => {
            const isActive = pathname === item.path
            return (
              <Link
                key={item.id}
                href={item.path}
                className={`font-medium text-lg ${
                  isActive
                    ? 'text-blue-900 dark:text-white underline'
                    : 'dark:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            )
          })}

          <Separator />

          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="whitespace-nowrap"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className='mr-2' />
              ) : (
                <Moon className='mr-2' />
              )}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenuOpen
