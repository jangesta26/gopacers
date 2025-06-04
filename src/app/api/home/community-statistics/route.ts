import { CommunityStatsItemProps } from '@/types/community-statistics';
import { NextResponse } from 'next/server';

export async function GET() {
   const communityStats:CommunityStatsItemProps = 
    {
    totalRunners: 125750,
    upcomingEvents: 328,
    activeCommunities: 47,
    }
  return NextResponse.json(communityStats);     
}