"use client"
import * as React from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FaCalendarAlt } from "react-icons/fa"
export function MyDatePicker() {
  const [date, setDate] = React.useState<Date>()
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "bg-white/20 border-white/30 text-white whitespace-nowrap h-12",
            !date && "text-gray-200"
          )}
        >
          {date ? format(date, "MMM dd, yyyy") : <span>Pick a date</span>}
          <FaCalendarAlt className='ml-2'/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}