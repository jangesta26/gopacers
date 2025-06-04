import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'


const RecentResult = ({
    title,
    description
}:{
    title:string
    description:string
}) => {
  return (
    <Card>
        <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
        <ScrollArea className="h-[300px]">
            <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
                <div
                key={i}
                className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700 pb-3"
                >
                <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3">
                    <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                        {String.fromCharCode(65 + i)}
                    </AvatarFallback>
                    </Avatar>
                    <div>
                    <p className="font-medium">Runner {i + 1}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        {
                        [
                            "Marathon",
                            "Half Marathon",
                            "10K",
                            "5K",
                            "Ultra",
                        ][i]
                        }{" "}
                        •{" "}
                        {
                        [
                            "New York",
                            "California",
                            "Colorado",
                            "Chicago",
                            "Nevada",
                        ][i]
                        }
                    </p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="font-bold">{`${Math.floor(Math.random() * 4) + 1}:${Math.floor(
                    Math.random() * 60,
                    )
                    .toString()
                    .padStart(2, "0")}:${Math.floor(
                    Math.random() * 60,
                    )
                    .toString()
                    .padStart(2, "0")}`}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                    {`${Math.floor(Math.random() * 100) + 1}${["st", "nd", "rd", "th"][Math.min(3, Math.floor(Math.random() * 4))]} place`}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </ScrollArea>
        </CardContent>
        <CardFooter>
        <Button
            variant="outline"
            className="w-full !rounded-button whitespace-nowrap"
        >
            View All Results
        </Button>
        </CardFooter>
    </Card>
  )
}

export default RecentResult
