import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CommunityStatsItemProps } from '@/types/community-statistics'
import { PiUsersThreeFill } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";


const CommunityStats = ({
    title,
    description,
    totalRunners,
    upComingEvents,
    activeCommunities,
    communityStats
}:{
    title:string
    description:string
    totalRunners:string
    upComingEvents:string
    activeCommunities:string
    communityStats:CommunityStatsItemProps | null | undefined
}) => {

    if (!communityStats) return null;

  return (
    <Card className="mb-8">
        <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
            {description}
        </CardDescription>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mr-4">
                <PiUsersThreeFill className='text-blue-600 dark:text-blue-400 text-2xl'/>
            </div>
            <div>
                <p className="text-2xl font-bold">
                {communityStats.totalRunners.toLocaleString()}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                {totalRunners}
                </p>
            </div>
            </div>

            <div className="flex items-center">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full mr-4">
                <FaCalendarCheck className='text-green-600 dark:text-green-400 text-2xl'/>
            </div>
            <div>
                <p className="text-2xl font-bold">
                {communityStats.upcomingEvents}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                {upComingEvents}
                </p>
            </div>
            </div>

            <div className="flex items-center">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mr-4">
                <IoLocationSharp className='text-purple-600 dark:text-purple-400 text-2xl'/>
            </div>
            <div>
                <p className="text-2xl font-bold">
                {communityStats.activeCommunities}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                 {activeCommunities}
                </p>
            </div>
            </div>
        </div>
        </CardContent>
    </Card>
  )
}

export default CommunityStats
