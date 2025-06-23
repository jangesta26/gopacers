import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FaCheck, FaPlay  } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";

const CardTrainingPlan = () => {
const trainingPlan = [
    { day: "Monday", workout: "Rest Day", status: "completed" },
    {
    day: "Tuesday",
    workout: "6km Easy Run + Strength",
    status: "completed",
    },
    { day: "Wednesday", workout: "8km Tempo Run", status: "completed" },
    { day: "Thursday", workout: "5km Recovery Run", status: "completed" },
    { day: "Friday", workout: "Cross Training", status: "completed" },
    { day: "Saturday", workout: "12km Long Run", status: "completed" },
    { day: "Sunday", workout: "15km Long Run", status: "completed" },
    { day: "Monday (Today)", workout: "Rest Day", status: "current" },
    {
    day: "Tuesday",
    workout: "7km Easy Run + Strength",
    status: "upcoming",
    },
    { day: "Wednesday", workout: "5x800m Intervals", status: "upcoming" },
    { day: "Thursday", workout: "5km Recovery Run", status: "upcoming" },
    { day: "Friday", workout: "Cross Training", status: "upcoming" },
    { day: "Saturday", workout: "16km Long Run", status: "upcoming" },
];
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <div className="flex justify-between items-center">
            <div>
            <CardTitle>10K Training Plan</CardTitle>
            <CardDescription>Week 7 of 10</CardDescription>
            </div>
            <Badge className="bg-blue-600 dark:text-gray-50">70% Complete</Badge>
        </div>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
            {trainingPlan.map((day, index) => (
            <div
                key={index}
                className={`flex items-center p-3 rounded-lg ${
                day.status === "current"
                    ? "bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700"
                    : "hover:bg-gray-50 dark:hover:bg-slate-800"
                }`}
            >
                <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    day.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : day.status === "current"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-400"
                }`}
                >
                {day.status === "completed" ? (
                    <FaCheck className="fas fa-check"/>
                ) : day.status === "current" ? (
                    <FaPlay className="fas fa-play"/>
                ) : (
                    <GoClockFill className="fas fa-clock"/>
                )}
                </div>
                <div className="flex-1">
                <div className="flex-wrap md:flex items-center md:justify-between">
                    <div className='flex flex-col'>
                        <h4
                        className={`font-medium ${day.status === "current" ? "text-blue-700 dark:text-gray-50" : ""}`}
                        >
                        {day.day}
                        </h4>
                        <p className="text-sm text-gray-600">
                        {day.workout}
                        </p>
                    </div>
                    {day.status !== "completed" && (
                        <Button
                            variant={
                            day.status === "current" ? "default" : "outline"
                            }
                            size="sm"
                            className="!rounded-button whitespace-nowrap dark:text-gray-50"
                            disabled={day.status === "upcoming"}
                        >
                            {day.status === "current"
                            ? "Start Workout"
                            : "View Details"}
                        </Button>
                        )}
                    {day.status === "completed" && (
                    <span className=" text-green-600 text-sm">
                        <div className='flex items-center gap-0.5'>
                            <FaCircleCheck className="fas fa-check-circle mr-1"/>{" "}
                            Completed
                        </div>
                    </span>
                    )}
                </div>
                </div>
            </div>
            ))}
        </div>
        </CardContent>
    </Card>
  )
}

export default CardTrainingPlan
