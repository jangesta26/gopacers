import React from 'react'
import { Button } from '@/components/ui/button'


interface SocialMediaProps {
  id: number
  name: string
  icon: React.ReactNode
}

const SocialMediaIntegration = ({
    title,
    description,
    buttonItem
}:{
    title:string
    description:string
    buttonItem:SocialMediaProps[]
}) => {
  return (
    <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
       {buttonItem.map((item) => 
        <Button
        key={item.id}
        variant="outline"
        className="bg-white dark:bg-gray-800 !rounded-button whitespace-nowrap flex items-center gap-2 px-4"
        >
          {item.icon}
          {item.name}
        </Button>
        )} 
      </div>
    </div>
  )
}

export default SocialMediaIntegration
