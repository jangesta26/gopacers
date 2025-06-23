import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FaRunning, FaMapMarkerAlt } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";
import { FaDownload } from "react-icons/fa6";

const CardUpcomingRaces = () => {
const upcomingRaces = [
{
id: 1,
name: "Summer Marathon 2025",
date: "June 15, 2025",
location: "Central Park, New York",
distance: "10K",
status: "Registered",
daysLeft: 13,
},
{
id: 2,
name: "Autumn Trail Run",
date: "September 20, 2025",
location: "Bear Mountain, NY",
distance: "Half Marathon",
status: "Interested",
daysLeft: 110,
},
];
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <CardTitle>Upcoming Races</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
            {upcomingRaces.map((race) => (
            <div
                key={race.id}
                className="border rounded-lg p-4 hover:border-blue-300 transition-colors cursor-pointer"
            >
                <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-medium text-lg">
                    {race.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                    {race.distance} • {race.date}
                    </p>
                    <div className="flex items-center mt-1 text-sm text-gray-600">
                    <FaMapMarkerAlt className="fas fa-map-marker-alt mr-1"/>
                    <span>{race.location}</span>
                    </div>
                </div>
                <div className="text-right">
                    <Badge
                    className={
                        race.status === "Registered"
                        ? "bg-green-600 dark:text-gray-50"
                        : "bg-amber-500 dark:text-gray-50"
                    }
                    >
                    {race.status}
                    </Badge>
                    <p className="text-sm mt-2 font-medium">
                    {race.daysLeft} days left
                    </p>
                </div>
                </div>
                <div className="mt-4 flex gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="!rounded-button whitespace-nowrap"
                >
                    <RiInformation2Fill className="fas fa-info-circle mr-1"/>{" "}
                    Details
                </Button>
                {race.status === "Registered" ? (
                    <Button
                    variant="outline"
                    size="sm"
                    className="!rounded-button whitespace-nowrap"
                    >
                    <FaDownload className="fas fa-download mr-1"/> Race
                    Packet
                    </Button>
                ) : (
                    <Button
                    size="sm"
                    className="!rounded-button whitespace-nowrap dark:text-gray-50"
                    >
                    <FaRunning className="fas fa-running mr-1"/> Register
                    Now
                    </Button>
                )}
                </div>
            </div>
            ))}
        </div>
        </CardContent>
    </Card>
  )
}

export default CardUpcomingRaces
