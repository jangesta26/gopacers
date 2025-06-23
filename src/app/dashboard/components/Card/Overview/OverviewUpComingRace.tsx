import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCalendarDay, FaMapMarkerAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
const OverviewUpComingRace = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
            <CardTitle>Upcoming Race</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-5 text-white">
            <div className="flex justify-between items-start">
                <div>
                <h3 className="text-xl font-bold mb-1">
                    Summer Marathon 2025
                </h3>
                <p className="text-sm opacity-90">10K Race</p>
                </div>
                <Badge className="bg-white text-blue-700">
                13 days left
                </Badge>
            </div>
            <div className="mt-4 space-y-2">
                <div className="flex items-center">
                <FaCalendarDay className="fas fa-calendar-day w-5"/>
                <span className="ml-2">June 15, 2025</span>
                </div>
                <div className="flex items-center">
                <FaMapMarkerAlt className="fas fa-map-marker-alt w-5"/>
                <span className="ml-2">Central Park, New York</span>
                </div>
                <div className="flex items-center">
                <GoClockFill className="fas fa-clock w-5"/>
                <span className="ml-2">Start Time: 8:00 AM</span>
                </div>
            </div>
            <div className="mt-4">
                <Button
                variant="outline"
                className="bg-white text-blue-700 dark:text-slate-50 hover:bg-blue-50 w-full !rounded-button whitespace-nowrap"
                >
                View Race Details
                </Button>
            </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default OverviewUpComingRace
