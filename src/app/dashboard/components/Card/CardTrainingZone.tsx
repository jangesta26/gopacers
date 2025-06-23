import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const CardTrainingZone = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
            <CardTitle>Training Zones</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                    Zone 1 (Recovery)
                </span>
                <span className="text-sm font-medium">
                    128-139 bpm
                </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                <div
                    className="h-2 bg-green-400 rounded-full"
                    style={{ width: "100%" }}
                ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                6:00-6:30 /km
                </p>
            </div>
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                    Zone 2 (Easy)
                </span>
                <span className="text-sm font-medium">
                    140-151 bpm
                </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                <div
                    className="h-2 bg-blue-400 rounded-full"
                    style={{ width: "100%" }}
                ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                5:30-6:00 /km
                </p>
            </div>
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                    Zone 3 (Moderate)
                </span>
                <span className="text-sm font-medium">
                    152-163 bpm
                </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                <div
                    className="h-2 bg-yellow-400 rounded-full"
                    style={{ width: "100%" }}
                ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                5:00-5:30 /km
                </p>
            </div>
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                    Zone 4 (Threshold)
                </span>
                <span className="text-sm font-medium">
                    164-175 bpm
                </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                <div
                    className="h-2 bg-orange-400 rounded-full"
                    style={{ width: "100%" }}
                ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                4:30-5:00 /km
                </p>
            </div>
            <div>
                <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">
                    Zone 5 (Maximum)
                </span>
                <span className="text-sm font-medium">
                    176-187 bpm
                </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                <div
                    className="h-2 bg-red-400 rounded-full"
                    style={{ width: "100%" }}
                ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                4:00-4:30 /km
                </p>
            </div>
            </div>
        </CardContent>
    </Card>
  )
}

export default CardTrainingZone
