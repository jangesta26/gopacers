import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaMapMarkerAlt, FaMedal } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";

const CardPastRaces = () => {
const pastRaces = [
{
id: 1,
name: "Spring City Run 2025",
date: "April 12, 2025",
location: "Downtown, Boston",
distance: "5K",
result: "22:15",
placement: "45th/230",
},
{
id: 2,
name: "Winter Wonderland Race",
date: "January 25, 2025",
location: "Central Park, New York",
distance: "10K",
result: "48:30",
placement: "78th/412",
},
{
id: 3,
name: "New Year Resolution Run",
date: "January 1, 2025",
location: "Prospect Park, Brooklyn",
distance: "5K",
result: "23:05",
placement: "52nd/185",
},
];
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <CardTitle>Past Races</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
            {pastRaces.map((race) => (
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
                    <p className="font-bold text-lg">{race.result}</p>
                    <p className="text-sm text-gray-500">
                    Placement: {race.placement}
                    </p>
                </div>
                </div>
                <div className="mt-4 flex gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="!rounded-button whitespace-nowrap"
                >
                    <FaMedal className="fas fa-medal mr-1"/> Certificate
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="!rounded-button whitespace-nowrap"
                >
                    <FaCamera className="fas fa-camera mr-1"/> Photos
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="!rounded-button whitespace-nowrap"
                >
                    <FaChartLine className="fas fa-chart-line mr-1"/> Results
                </Button>
                </div>
            </div>
            ))}
        </div>
        </CardContent>
    </Card>
  )
}

export default CardPastRaces
