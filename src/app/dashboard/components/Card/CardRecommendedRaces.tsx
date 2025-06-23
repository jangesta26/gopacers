import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from 'next/image';

const CardRecommendedRaces = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <CardTitle>Recommended Races</CardTitle>
        <CardDescription>
            Based on your preferences and past performance
        </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
            {
                name: "Fall Foliage Half Marathon",
                date: "October 10, 2025",
                location: "Hudson Valley, NY",
                distance: "Half Marathon",
                price: "$85",
                image:
                "https://readdy.ai/api/search-image?query=Beautiful%2520autumn%2520forest%2520trail%2520with%2520colorful%2520fall%2520foliage%252C%2520perfect%2520for%2520trail%2520running%252C%2520golden%2520hour%2520lighting%252C%2520scenic%2520path%2520winding%2520through%2520trees%2520with%2520red%2520and%2520orange%2520leaves%252C%2520professional%2520nature%2520photography&width=400&height=200&seq=25&orientation=landscape",
            },
            {
                name: "City Lights Night Run",
                date: "July 20, 2025",
                location: "Manhattan, NY",
                distance: "10K",
                price: "$70",
                image:
                "https://readdy.ai/api/search-image?query=Nighttime%2520city%2520skyline%2520with%2520illuminated%2520buildings%2520and%2520streets%252C%2520perfect%2520for%2520night%2520running%2520event%252C%2520city%2520lights%2520reflecting%2520on%2520water%252C%2520dramatic%2520urban%2520landscape%2520at%2520night%252C%2520professional%2520cityscape%2520photography&width=400&height=200&seq=26&orientation=landscape",
            },
            ].map((race, index) => (
            <div
                key={index}
                className="border rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer"
            >
                <div className="h-40 overflow-hidden">
                <Image
                    src={race.image}
                    alt={race.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover object-top"
                />
                </div>
                <div className="p-4">
                <h3 className="font-medium">{race.name}</h3>
                <p className="text-sm text-gray-500">
                    {race.distance} • {race.date}
                </p>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                    <FaMapMarkerAlt className="fas fa-map-marker-alt mr-1"/>
                    <span>{race.location}</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                    <span className="font-semibold">
                    {race.price}
                    </span>
                    <Button
                    size="sm"
                    className="!rounded-button whitespace-nowrap dark:text-gray-50"
                    >
                    View Details
                    </Button>
                </div>
                </div>
            </div>
            ))}
        </div>
        <div className="mt-4 text-center">
            <Button
            variant="outline"
            className="!rounded-button whitespace-nowrap"
            >
            Browse All Races
            </Button>
        </div>
        </CardContent>
    </Card>
)
}

export default CardRecommendedRaces
