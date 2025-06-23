import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { FaFlagCheckered, FaRunning, FaCalendarCheck, FaSun,FaMedal, FaMountain, FaTrophy   } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

const YourAchievements = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <CardTitle>Your Achievements</CardTitle>
        <CardDescription>
            Milestones and badges you&apos;ve earned
        </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
            {
                name: "First 5K",
                icon: "flag",
                color: "bg-blue-100 text-blue-600",
                date: "April 12, 2025",
                unlocked: true,
            },
            {
                name: "First 10K",
                icon: "running",
                color: "bg-green-100 text-green-600",
                date: "January 25, 2025",
                unlocked: true,
            },
            {
                name: "Consistent Runner",
                icon: "calendar",
                color: "bg-purple-100 text-purple-600",
                date: "May 15, 2025",
                unlocked: true,
            },
            {
                name: "Early Bird",
                icon: "sun",
                color: "bg-yellow-100 text-yellow-600",
                date: "February 10, 2025",
                unlocked: true,
            },
            {
                name: "Half Marathon",
                icon: "medal",
                color: "bg-gray-100 text-gray-400",
                date: "Not yet achieved",
                unlocked: false,
            },
            {
                name: "Speed Demon",
                icon: "bolt",
                color: "bg-gray-100 text-gray-400",
                date: "Not yet achieved",
                unlocked: false,
            },
            {
                name: "Trail Explorer",
                icon: "mountain",
                color: "bg-gray-100 text-gray-400",
                date: "Not yet achieved",
                unlocked: false,
            },
            {
                name: "Marathon Finisher",
                icon: "trophy",
                color: "bg-gray-100 text-gray-400",
                date: "Not yet achieved",
                unlocked: false,
            },
            ].map((achievement, index) => (
            <div
                key={index}
                className={`border rounded-lg p-4 text-center ${achievement.unlocked ? "" : "opacity-50"}`}
            >
                <div
                className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                {achievement.icon == 'flag' && <FaFlagCheckered className='text-2xl'/>}
                {achievement.icon == 'running' && <FaRunning className='text-2xl'/>}
                {achievement.icon == 'calendar' && <FaCalendarCheck className='text-2xl'/>}
                {achievement.icon == 'sun' && <FaSun className='text-2xl'/>}
                {achievement.icon == 'medal' && <FaMedal className='text-2xl'/>}
                {achievement.icon == 'bolt' && <FaBolt className='text-2xl'/>}
                {achievement.icon == 'mountain' && <FaMountain className='text-2xl'/>}
                {achievement.icon == 'trophy' && <FaTrophy className='text-2xl'/>}
                </div>
                <h4 className="font-medium">{achievement.name}</h4>
                <p className="text-xs text-gray-500 mt-1">
                {achievement.date}
                </p>
            </div>
            ))}
        </div>
        </CardContent>
    </Card>
  )
}

export default YourAchievements
