import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TrainingChart from '../../Chart/TrainingChart';

const OverviewWeeklyTrainingSummary = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <CardTitle>Weekly Training Summary</CardTitle>
        <CardDescription>May 27 - June 2, 2025</CardDescription>
        </CardHeader>
        <CardContent>
        <TrainingChart />
        <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">Total Distance</p>
            <p className="text-2xl font-bold text-blue-700">
                45.8 km
            </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">Avg. Pace</p>
            <p className="text-2xl font-bold text-green-700">
                5:35 /km
            </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-600">Active Days</p>
            <p className="text-2xl font-bold text-purple-700">
                5 days
            </p>
            </div>
        </div>
        </CardContent>
    </Card>
  )
}

export default OverviewWeeklyTrainingSummary
