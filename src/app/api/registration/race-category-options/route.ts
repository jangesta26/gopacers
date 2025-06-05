  
import { RaceCategoryOptionsProps } from '@/types/race-category-options';
import { NextResponse } from 'next/server';

export async function GET() {
  
  const raceCategoryOptions:RaceCategoryOptionsProps[] = [
    {
      id: "5K",
      name: "5K",
      price: 45,
      description: "Perfect for beginners and casual runners",
      startTime: "5:00 AM",
    },
    {
      id: "10K",
      name: "10K",
      price: 65,
      description: "A balanced challenge for intermediate runners",
      startTime: "4:30 AM",
    },
    {
      id: "Half Marathon",
      name: "Half Marathon",
      price: 85,
      description: "Test your endurance on this scenic route",
      startTime: "3:30 AM",
    },
    {
      id: "Full Marathon",
      name: "Full Marathon",
      price: 120,
      description: "The ultimate challenge for dedicated runners",
      startTime: "3:00 AM",
    },
  ]
    return NextResponse.json(raceCategoryOptions);
}