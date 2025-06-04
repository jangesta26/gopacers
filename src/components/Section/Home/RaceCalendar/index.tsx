'use client'
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FilterSidebar from './FilterSidebar'
import RaceGrid from './RaceGrid'
import { UpcomingRaceCalendarItem } from '@/types/race-calendar'

const RaceCalendarSection = ({
    title,
    description,
    upcomingRaces
}:{
    title:string
    description:string
    upcomingRaces:UpcomingRaceCalendarItem[]
}) => {

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    {description}
                </p>
                </div>

                <div className="mt-4 md:mt-0">
                <Tabs
                    defaultValue="month"
                    className="w-[300px]"
                >
                    <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="month">Month View</TabsTrigger>
                    <TabsTrigger value="week">Week View</TabsTrigger>
                    </TabsList>
                </Tabs>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters Sidebar */}
                <FilterSidebar />
                {/* Race Grid */}
                <RaceGrid 
                upcomingRacesData={upcomingRaces}
                />
            </div>
        </div>
    </section>
  )
}

export default RaceCalendarSection
