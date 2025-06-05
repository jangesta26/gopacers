import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardFooter } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { PiUsersThreeFill } from "react-icons/pi";
import { UpcomingRaceCalendarItem } from '@/types/race-calendar'
import Image from 'next/image'
import React from 'react'
import { FaClock } from "react-icons/fa6";


const FeaturedEventSection = ({
    title,
    description,
    upcomingRaces
}:{
    title:string
    description:string
    upcomingRaces:UpcomingRaceCalendarItem[]
}) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
           {description}
        </p>

        <Carousel className="w-full">
            <CarouselContent>
            {upcomingRaces.slice(0, 4).map((race) => (
                <CarouselItem
                key={race.id}
                className="md:basis-1/2 lg:basis-1/3"
                >
                <div className="p-1">
                    <Card className="overflow-hidden h-full pt-0">
                    <div className="relative h-64 overflow-hidden">
                        <Image
                        src={race.image}
                        alt={race.name}
                        className="w-full h-full object-cover object-top"
                        width={500}
                        height={500}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                        <h3 className="text-xl font-bold mb-1">
                            {race.name}
                        </h3>
                        <p className="text-gray-200 mb-2">
                            {race.location}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                            <PiUsersThreeFill />
                            <span>{race.participants} runners</span>
                            </div>
                            <div>
                            <Badge className="dark:text-white">
                                {race.priceRange}
                            </Badge>
                            </div>
                        </div>
                        </div>
                    </div>

                    <CardFooter className="flex justify-between items-center">
                        <div>
                            <p className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                                <FaClock className='mr-1'/>
                                Registration closes: {race.deadline}
                            </p>
                        </div>
                        <Button
                        size="sm"
                        className="!rounded-button whitespace-nowrap dark:text-white"
                        >
                        Details
                        </Button>
                    </CardFooter>
                    </Card>
                </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <div className="hidden md:flex">
            <CarouselPrevious />
            <CarouselNext />
            </div>
        </Carousel>
        </div>
    </section>
  )
}

export default FeaturedEventSection
