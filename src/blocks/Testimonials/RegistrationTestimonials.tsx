import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TestimonialsItemProps } from '@/types/testimonials'


const RegistrationTestimonials = ({
title,
testimonials
}:{
title:string
testimonials:TestimonialsItemProps[]
}) => {
  return (
    <div className="max-w-4xl mx-auto mt-8 mb-12">
        <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-6 text-center text-gray-800">
            {title}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item) => 
            <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={item.avatar} />
                    <AvatarFallback>{item.name}</AvatarFallback>
                    </Avatar>
                    <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs text-gray-500">
                    {item.race}
                    </p>
                    </div>
                </div>
                <p className="text-sm text-gray-700 italic">
                    &quot;{item.text}&quot;
                </p>
            </div>
            )}
        </div>

        </div>
    </div>
  )
}

export default RegistrationTestimonials
