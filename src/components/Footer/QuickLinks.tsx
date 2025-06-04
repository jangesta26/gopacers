import Link from 'next/link'
import React from 'react'

interface QuickLinksProps {
    id:number
    pathname:string
    labelName:string
}


const QuickLinks = ({
    quickLinksItem
}:{
    quickLinksItem:QuickLinksProps[]
}) => {
  return (
    <ul className="space-y-3">
        {quickLinksItem.map((item) => 
        <li key={item.id}>
            <Link
            href={item.pathname}
            className="text-gray-400 hover:text-white transition-colors"
            >
                {item.labelName}
            </Link>
        </li>
        )}
    </ul>
  )
}

export default QuickLinks
