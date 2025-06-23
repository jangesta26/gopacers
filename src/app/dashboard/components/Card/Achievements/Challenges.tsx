import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FaPlus, FaUsers } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";

const Challenges = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
        <CardTitle>Challenges</CardTitle>
        <CardDescription>
            Join challenges to earn more achievements
        </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
            {[
            {
                name: "Summer Distance Challenge",
                description: "Run 100km in June 2025",
                progress: 45.8,
                goal: 100,
                unit: "km",
                daysLeft: 13,
                participants: 1245,
            },
            {
                name: "Consistency Challenge",
                description:
                "Run at least 3 times per week for 4 weeks",
                progress: 2,
                goal: 4,
                unit: "weeks",
                daysLeft: 16,
                participants: 876,
            },
            {
                name: "Early Bird Challenge",
                description: "Complete 10 runs before 7:00 AM",
                progress: 6,
                goal: 10,
                unit: "runs",
                daysLeft: 20,
                participants: 543,
            },
            ].map((challenge, index) => (
            <div
                key={index}
                className="border rounded-lg p-4 hover:border-blue-300 transition-colors"
            >
                <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-medium text-lg">
                    {challenge.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                    {challenge.description}
                    </p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                    <FaUsers className="fas fa-users mr-1"/>
                    <span>
                        {challenge.participants} participants
                    </span>
                    <span className="mx-2">•</span>
                    <GoClockFill className="fas fa-clock mr-1"/>
                    <span>{challenge.daysLeft} days left</span>
                    </div>
                </div>
                <Badge className="bg-blue-600 dark:text-gray-50">Active</Badge>
                </div>
                <div className="mt-4">
                <div className="flex justify-between mb-1 text-sm">
                    <span>Progress</span>
                    <span>
                    {challenge.progress} / {challenge.goal}{" "}
                    {challenge.unit}
                    </span>
                </div>
                <Progress
                    value={
                    (challenge.progress / challenge.goal) * 100
                    }
                    className="h-2"
                />
                </div>
            </div>
            ))}
        </div>
        <div className="mt-6 text-center">
            <Button className="!rounded-button whitespace-nowrap dark:text-gray-50">
            <FaPlus className="fas fa-plus mr-1"/> Join New Challenge
            </Button>
        </div>
        </CardContent>
    </Card>
  )
}

export default Challenges
