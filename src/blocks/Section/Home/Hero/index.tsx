'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import BackgroundImageHeroSection from './BackgroundImage';
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MyDatePicker } from '@/components/Calendar.tsx/MyDatePicker';
import { useRouter } from 'next/navigation';

const HeroSection = ({
    title,
    calendarDate,
    location,
    description,
    imgUrl
}:{
    title:string
    calendarDate:string
    location:string
    description:string
    imgUrl:string
}) => {
    const router = useRouter();
  return (
    <section className="relative">
        <BackgroundImageHeroSection 
        imageBackground={imgUrl}
        />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
                {calendarDate} • {location}
            </p>
            <p className="text-lg mb-8 text-gray-200">
            {description}
            </p>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                <Input
                    placeholder="Search races by location or name"
                    className="bg-white/20 border-0 text-white placeholder:text-gray-300 h-12"
                />
                </div>
                <MyDatePicker />
                <Button className="h-12 bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap dark:text-white">
                Find Races
                <FaSearch />
                </Button>
            </div>
            </div>

            <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 !rounded-button whitespace-nowrap dark:text-white"
            onClick={() => router.push('/registration')}
            >
            Register Now
            <FaArrowRight />
            </Button>
        </div>
        </div>
    </section>
  )
}

export default HeroSection
