'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const headerItems = [
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

const HeaderItem = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden items-center sm:flex ml-10 space-x-8">
      {headerItems.map((item) => {
        const isActive = pathname === item.path

        return (
          <Link
            key={item.id}
            href={item.path}
            className={`font-medium ${
              isActive
                ? 'text-blue-900 dark:text-white underline'
                : 'text-blue-600 dark:text-blue-400'
            }`}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default HeaderItem
