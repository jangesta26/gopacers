import Link from 'next/link'
import React from 'react'

interface QuickLink {
  id: number;
  path: string;
  labelName: string;
}

const RegistrationQuicklinks = ({quickLinks}:{quickLinks:QuickLink[]}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {quickLinks.map((item) =>
      <Link
      key={item.id}
      href={item.path}
      className="text-gray-300 hover:text-white transition-colors text-sm"
      >
        {item.labelName}
      </Link>
      )}
    </div>
  )
}

export default RegistrationQuicklinks
