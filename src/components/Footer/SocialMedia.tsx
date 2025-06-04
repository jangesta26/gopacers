import Link from 'next/link'
import React from 'react'

interface SocialMediaProps {
  id: number
  pathname: string
  icon: React.ReactNode
}

const SocialMedia = ({
  socialMediaLinks,
}: {
  socialMediaLinks: SocialMediaProps[]
}) => {
  return (
    <>
      {socialMediaLinks.map((item) => (
        <Link
          key={item.id}
          href={item.pathname.startsWith('http') ? item.pathname : `https://${item.pathname}`}
          className="text-gray-400 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </>
  )
}

export default SocialMedia
