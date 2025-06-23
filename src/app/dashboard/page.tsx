'use client';
import React from 'react';
import DashboardDefaultLayout from './components/DashboardLayout/DashboardDefaultLayout';
import { ThemeProvider } from '@/context/ThemeProvider';
import CardProfileInfo from './components/Card/CardProfileInfo';
import CardWeeklyTrainingSummary from './components/Card/CardWeeklyTrainingSummary';

const DashboardPage = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <DashboardDefaultLayout>
        <div className="container mx-auto px-4 py-8">
          {/* Responsive Flex Container */}
          <div className="w-full flex flex-col lg:flex-row gap-6">
              <CardProfileInfo 
                fullName="Alex Johnson"
                email="alexjohnson@support.com"
                kilometer="10 Finisher"
                race="3 Races"
                imgUrl="https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520athletic%2520male%2520runner%2520in%2520his%252030s%252C%2520natural%2520lighting%252C%2520neutral%2520background%252C%2520confident%2520smile%252C%2520casual%2520athletic%2520wear%252C%2520summer%2520outdoor%2520setting&width=200&height=200&seq=24&orientation=squarish"
              />
              <CardWeeklyTrainingSummary />
          </div>
        </div>
      </DashboardDefaultLayout>
    </ThemeProvider>
  );
};

export default DashboardPage;
