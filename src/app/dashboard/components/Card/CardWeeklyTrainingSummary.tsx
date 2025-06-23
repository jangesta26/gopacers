import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CardUpcomingRaces from './CardUpcomingRaces';
import CardPastRaces from './CardPastRaces';
import CardRecommendedRaces from './CardRecommendedRaces';
import CardTrainingPlan from './CardTrainingPlan';
import CardTrainingZone from './CardTrainingZone';
import CardTrainingResources from './CardTrainingResources';
import OverviewUpComingRace from './Overview/OverviewUpComingRace';
import OverviewWeeklyTrainingSummary from './Overview/OverviewWeeklyTrainingSummary';
import OverviewTrainingDistribution from './Overview/OverviewTrainingDistribution';
import OverviewRecentActivities from './Overview/OverviewRecentActivities';
import YourAchievements from './Achievements/YourAchievements';
import MedalsAndCertificates from './Achievements/MedalsAndCertificates';
import Challenges from './Achievements/Challenges';

const CardWeeklyTrainingSummary = () => {
  return (
    <div className="w-full mb-12">
        <Tabs defaultValue="overview" className="w-full ">
            <TabsList className="grid w-full grid-cols-4 dark:bg-slate-950">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="races">Races</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value="overview" className="space-y-6">
            <OverviewWeeklyTrainingSummary />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OverviewUpComingRace />
                <OverviewTrainingDistribution />
            </div>
            <OverviewRecentActivities />
            </TabsContent>

            {/* Races */}
            <TabsContent value="races" className="space-y-6">
            <CardUpcomingRaces />
            <CardPastRaces />
            <CardRecommendedRaces />
            </TabsContent>

            {/* Training */}
            <TabsContent value="training" className="space-y-6">
             <CardTrainingPlan />           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CardTrainingZone />
                <CardTrainingResources />
            </div>
            </TabsContent>

            {/* Achievements */}
            <TabsContent value="achievements" className="space-y-6">
                <YourAchievements />
                <MedalsAndCertificates />
                <Challenges />
            </TabsContent>
        </Tabs>
    </div>
  )
}

export default CardWeeklyTrainingSummary
