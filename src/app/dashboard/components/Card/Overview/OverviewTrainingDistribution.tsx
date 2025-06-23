import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PaceDistributionChart from '../../Chart/PaceDistributionChart';

const OverviewTrainingDistribution = () => {
  return (
    <Card className='dark:bg-slate-950'>
        <CardHeader>
            <CardTitle>Training Distribution</CardTitle>
        </CardHeader>
        <CardContent>
            <PaceDistributionChart />
        </CardContent>
    </Card>
  )
}

export default OverviewTrainingDistribution
