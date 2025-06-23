import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


const CardProfileInfo = ({
fullName,
email,
kilometer,
race,
imgUrl
}:{
fullName:string
email:string
kilometer:string
race:string
imgUrl:string
}) => {
  return (
    <div className="w-full flex flex-col lg:gap-8">
        <Card className="mb-6 dark:bg-slate-950">
            <CardContent className="pt-6">
            <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={imgUrl}/>
                    <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">{fullName}</h2>
                <p className="text-gray-500 mb-2">{email}</p>
                <div className="flex gap-2 mb-4">
                <Badge className="bg-blue-600 dark:text-gray-50">{kilometer}</Badge>
                <Badge className="bg-green-600 dark:text-gray-50">{race}</Badge>
                </div>
                <Button className="w-full !rounded-button whitespace-nowrap dark:text-gray-50">
                Edit Profile
                </Button>
            </div>
            </CardContent>
        </Card>
        <Card className="mb-6 dark:bg-slate-950">
            <CardHeader>
            <CardTitle>Personal Records</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                <div>
                    <p className="font-medium">5K</p>
                    <p className="text-sm ">April 12, 2025</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-lg">22:15</p>
                    <p className="text-sm">4:27/km</p>
                </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                <div>
                    <p className="font-medium">10K</p>
                    <p className="text-sm">January 25, 2025</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-lg">48:30</p>
                    <p className="text-sm">4:51/km</p>
                </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center opacity-50">
                <div>
                    <p className="font-medium">Half Marathon</p>
                    <p className="text-sm text-gray-500">Not yet achieved</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-lg">--:--</p>
                    <p className="text-sm text-gray-500">--:--/km</p>
                </div>
                </div>
                <Separator />
                <div className="flex justify-between items-center opacity-50">
                <div>
                    <p className="font-medium">Marathon</p>
                    <p className="text-sm text-gray-500">Not yet achieved</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-lg">--:--</p>
                    <p className="text-sm text-gray-500">--:--/km</p>
                </div>
                </div>
            </div>
            </CardContent>
        </Card>
        <Card className='dark:bg-slate-950'>
            <CardHeader>
            <CardTitle>Training Stats</CardTitle>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                <div>
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                    Weekly Distance
                    </span>
                    <span className="text-sm font-medium">45.8 km</span>
                </div>
                <Progress value={76} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                    76% of 60km goal
                </p>
                </div>
                <div>
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                    Monthly Distance
                    </span>
                    <span className="text-sm font-medium">182.5 km</span>
                </div>
                <Progress value={91} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">
                    91% of 200km goal
                </p>
                </div>
                <div>
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                    10K Training Plan
                    </span>
                    <span className="text-sm font-medium">Week 7/10</span>
                </div>
                <Progress value={70} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">70% complete</p>
                </div>
            </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default CardProfileInfo
