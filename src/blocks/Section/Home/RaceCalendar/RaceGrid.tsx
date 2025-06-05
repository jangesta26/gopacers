
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { UpcomingRaceCalendarItem } from '@/types/race-calendar'
import { FaBookmark } from "react-icons/fa";
import { FaChevronCircleDown, FaCalendarDay } from "react-icons/fa";

const RaceGrid = ({
    upcomingRacesData
}:{
    upcomingRacesData:UpcomingRaceCalendarItem[]
}) => {

  return (
    <div className="lg:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingRacesData.map((race) => (
            <Card
                key={race.id}
                className="overflow-hidden hover:shadow-lg transition-shadow h-full pt-0"
            >
                <div className="relative h-48 overflow-hidden">
                <Image
                    src={race.image}
                    alt={race.name}
                    className="w-full h-full object-cover object-top transition-transform hover:scale-105"
                    width={400}
                    height={400}
                />
                <div className="absolute top-3 right-3">
                    <Badge className="dark:text-white">
                    {race.distances[0]}
                    {race.distances.length > 1 && "+"}
                    </Badge>
                </div>
                </div>

                <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                    <CardTitle className="text-lg">
                        {race.name}
                    </CardTitle>
                    <CardDescription className="text-gray-500 dark:text-gray-400">
                        {race.location}
                    </CardDescription>
                    </div>
                    <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-blue-600 !rounded-button whitespace-nowrap"
                    >
                    <FaBookmark />
                    </Button>
                </div>
                </CardHeader>

                <CardContent className="pb-2">
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3 gap-2.5">
                    <FaCalendarDay className='text-blue-500 dark:text-blue-400'/>
                    {race.date} • {race.time}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                    {race.distances.map((distance) => (
                    <span
                        key={distance}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs"
                    >
                        {distance}
                    </span>
                    ))}
                </div>
                </CardContent>

                <CardFooter className="pt-0">
                <Button className="w-full whitespace-nowrap dark:text-white">
                    Register Now
                </Button>
                </CardFooter>
            </Card>
            ))}
        </div>
        <div className="mt-8 text-center">
            <Button
            variant="outline"
            className="!rounded-button whitespace-nowrap"
            >
            Load More Events
                <FaChevronCircleDown />
            </Button>
        </div>
    </div>
  )
}

export default RaceGrid
