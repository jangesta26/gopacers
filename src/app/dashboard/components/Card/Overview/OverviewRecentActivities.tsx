import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { FaRunning } from "react-icons/fa";


const OverviewRecentActivities = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
            {[
            {
                type: "Long Run",
                date: "June 2, 2025",
                distance: "15.1 km",
                pace: "5:10 /km",
                duration: "1h 18m",
                elevation: "125m",
            },
            {
                type: "Easy Run",
                date: "May 31, 2025",
                distance: "12.7 km",
                pace: "5:25 /km",
                duration: "1h 09m",
                elevation: "85m",
            },
            {
                type: "Recovery Run",
                date: "May 29, 2025",
                distance: "4.3 km",
                pace: "5:55 /km",
                duration: "0h 25m",
                elevation: "15m",
            },
            ].map((activity, index) => (
            <div
                key={index}
                className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaRunning className="fas fa-running text-blue-600"/>
                </div>
                <div className="flex-1">
                <div className="flex justify-between">
                    <h4 className="font-medium">{activity.type}</h4>
                    <span className="text-sm text-gray-500">
                    {activity.date}
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                    <p className="text-xs text-gray-500">
                        Distance
                    </p>
                    <p className="font-medium">
                        {activity.distance}
                    </p>
                    </div>
                    <div>
                    <p className="text-xs text-gray-500">
                        Avg. Pace
                    </p>
                    <p className="font-medium">{activity.pace}</p>
                    </div>
                    <div>
                    <p className="text-xs text-gray-500">
                        Duration
                    </p>
                    <p className="font-medium">
                        {activity.duration}
                    </p>
                    </div>
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
            View All Activities
            </Button>
        </div>
        </CardContent>
    </Card>
  )
}

export default OverviewRecentActivities
