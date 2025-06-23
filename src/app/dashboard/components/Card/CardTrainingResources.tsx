import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { FaVideo, FaHeartbeat  } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { BiDumbbell } from "react-icons/bi";

const CardTrainingResources = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
            <CardTitle>Training Resources</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
            <div className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors cursor-pointer">
                <div className="bg-purple-100 p-2 rounded-lg mr-3">
                <FaVideo className="fas fa-video text-purple-600"/>
                </div>
                <div>
                <h4 className="font-medium">10K Race Strategy</h4>
                <p className="text-sm text-gray-600">
                    Learn how to pace yourself for your best 10K
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    12 min video
                </p>
                </div>
            </div>
            <div className="flex items-start p-3 rounded-lg hover:bg-gray-50dark:hover:bg-slate-900 transition-colors cursor-pointer">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <IoDocumentText className="fas fa-file-alt text-blue-600"/>
                </div>
                <div>
                <h4 className="font-medium">
                    Pre-Race Nutrition Guide
                </h4>
                <p className="text-sm text-gray-600">
                    What to eat before your race day
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    5 min read
                </p>
                </div>
            </div>
            <div className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors cursor-pointer">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                <BiDumbbell className="fas fa-dumbbell text-green-600"/>
                </div>
                <div>
                <h4 className="font-medium">
                    Strength Training for Runners
                </h4>
                <p className="text-sm text-gray-600">
                    Essential exercises to improve your running
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    20 min workout
                </p>
                </div>
            </div>
            <div className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors cursor-pointer">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                <FaHeartbeat className="fas fa-heartbeat text-red-600"/>
                </div>
                <div>
                <h4 className="font-medium">Recovery Techniques</h4>
                <p className="text-sm text-gray-600">
                    Optimize your recovery between workouts
                </p>
                <p className="text-xs text-gray-500 mt-1">
                    8 min read
                </p>
                </div>
            </div>
            </div>
            <div className="mt-4 text-center">
            <Button
                variant="outline"
                className="!rounded-button whitespace-nowrap"
            >
                Browse All Resources
            </Button>
            </div>
        </CardContent>
    </Card>
  )
}

export default CardTrainingResources
