'use client'
import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { format } from "date-fns";
import { Input } from '@/components/ui/input'
import { FaCalendarAlt } from 'react-icons/fa'

const locationItem = [
    {
        name: 'Davao',
        value: 'davao'
    },
    {
        name: 'Cebu',
        value: 'cebu'
    },
    {
        name: 'Manila',
        value: 'manila'
    },
    {
        name: 'Cagayan De Oro',
        value: 'cagayan-de-oro'
    },
    {
        name: 'Baguio',
        value: 'baguio'
    },
    {
        name: 'Siargao',
        value: 'siargao'
    },
]

const FilterSidebar = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="lg:w-1/4">
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Filters</h3>
            <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 dark:text-blue-400 !rounded-button whitespace-nowrap"
            >
                Reset All
            </Button>
            </div>

            <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="distance">
                <AccordionTrigger>Distance</AccordionTrigger>
                <AccordionContent>
                <div className="space-y-2">
                    {[
                    "5K",
                    "10K",
                    "Half Marathon",
                    "Marathon",
                    "Ultra",
                    ].map((distance) => (
                    <div key={distance} className="flex items-center">
                        <Input
                        type="checkbox"
                        id={`distance-${distance}`}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                        htmlFor={`distance-${distance}`}
                        className="text-sm text-gray-700 dark:text-gray-300"
                        >
                        {distance}
                        </label>
                    </div>
                    ))}
                </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="location">
                <AccordionTrigger>Location</AccordionTrigger>
                <AccordionContent>
                <Select>
                    <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                        {locationItem.map((item, index)=>
                        <SelectItem key={index} value={item.value}>{item.name}</SelectItem>
                        )}
                    </SelectContent>
                </Select>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="date">
                <AccordionTrigger>Date Range</AccordionTrigger>
                <AccordionContent>
                <div className="space-y-4">
                    <div>
                    <label className="text-sm text-gray-700 dark:text-gray-300 block mb-1">
                        Start Date
                    </label>
                    <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal !rounded-button whitespace-nowrap"
                        >
                            <FaCalendarAlt />
                            {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                    </div>

                    <div>
                    <label className="text-sm text-gray-700 dark:text-gray-300 block mb-1">
                        End Date
                    </label>
                    <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal !rounded-button whitespace-nowrap"
                        >
                            <FaCalendarAlt />
                            {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                    </div>
                </div>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="type">
                <AccordionTrigger>Race Type</AccordionTrigger>
                <AccordionContent>
                <div className="space-y-2">
                    {[
                    "Road",
                    "Trail",
                    "Track",
                    "Obstacle",
                    "Virtual",
                    ].map((type) => (
                    <div key={type} className="flex items-center">
                        <Input
                        type="checkbox"
                        id={`type-${type}`}
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label
                        htmlFor={`type-${type}`}
                        className="text-sm text-gray-700 dark:text-gray-300"
                        >
                        {type}
                        </label>
                    </div>
                    ))}
                </div>
                </AccordionContent>
            </AccordionItem>
            </Accordion>

            <Button className="w-full mt-6 whitespace-nowrap dark:text-white">
            Apply Filters
            </Button>
        </div>
    </div>
  )
}

export default FilterSidebar
