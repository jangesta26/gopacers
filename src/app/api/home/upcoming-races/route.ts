import { UpcomingRaceCalendarItem } from '@/types/race-calendar';
import { NextResponse } from 'next/server';

  export async function GET() {
  const upcomingRaces:UpcomingRaceCalendarItem[] = [
    {
      id: 1,
      name: "Summer Marathon 2025",
      date: "June 15, 2025",
      time: "7:00 AM",
      location: "Central Park, New York",
      distances: ["5K", "10K", "Half Marathon", "Full Marathon"],
      image:
        "https://readdy.ai/api/search-image?query=Professional%20marathon%20runners%20racing%20through%20a%20scenic%20urban%20park%20with%20crowds%20cheering%2C%20early%20morning%20golden%20sunlight%2C%20high-quality%20sports%20photography%2C%20dynamic%20action%20shot%2C%20vibrant%20atmosphere%2C%20summer%20season&width=600&height=400&seq=1&orientation=landscape",
      participants: 2500,
      deadline: "June 10, 2025",
      priceRange: "$45-$120",
    },
    {
      id: 2,
      name: "Coastal Trail Run",
      date: "June 28, 2025",
      time: "6:30 AM",
      location: "Pacific Coast Highway, California",
      distances: ["10K", "Half Marathon", "30K"],
      image:
        "https://readdy.ai/api/search-image?query=Trail%20runners%20on%20a%20scenic%20coastal%20path%20with%20ocean%20views%2C%20morning%20mist%2C%20professional%20sports%20photography%2C%20athletes%20in%20colorful%20running%20gear%2C%20dramatic%20cliffs%20and%20shoreline%2C%20summer%20season%2C%20natural%20lighting&width=600&height=400&seq=2&orientation=landscape",
      participants: 1200,
      deadline: "June 20, 2025",
      priceRange: "$50-$95",
    },
    {
      id: 3,
      name: "Mountain Challenge",
      date: "July 5, 2025",
      time: "8:00 AM",
      location: "Rocky Mountains, Colorado",
      distances: ["15K", "25K", "50K"],
      image:
        "https://readdy.ai/api/search-image?query=Trail%20runners%20traversing%20alpine%20mountain%20paths%20with%20spectacular%20valley%20views%2C%20professional%20sports%20photography%2C%20athletes%20in%20technical%20gear%2C%20dramatic%20mountain%20backdrop%2C%20summer%20wildflowers%2C%20clear%20blue%20sky%2C%20morning%20light&width=600&height=400&seq=3&orientation=landscape",
      participants: 800,
      deadline: "June 25, 2025",
      priceRange: "$65-$150",
    },
    {
      id: 4,
      name: "City Night Run",
      date: "July 12, 2025",
      time: "8:00 PM",
      location: "Downtown Chicago",
      distances: ["5K", "10K"],
      image:
        "https://readdy.ai/api/search-image?query=Night%20runners%20with%20headlamps%20and%20reflective%20gear%20racing%20through%20illuminated%20city%20streets%2C%20professional%20sports%20photography%2C%20urban%20landscape%20with%20skyscrapers%20lit%20up%2C%20summer%20evening%20atmosphere%2C%20dynamic%20action%20shot%20with%20motion%20blur&width=600&height=400&seq=4&orientation=landscape",
      participants: 3000,
      deadline: "July 5, 2025",
      priceRange: "$40-$75",
    },
    {
      id: 5,
      name: "Desert Ultra",
      date: "July 20, 2025",
      time: "5:00 AM",
      location: "Mojave Desert, Nevada",
      distances: ["50K", "100K", "100 Miles"],
      image:
        "https://readdy.ai/api/search-image?query=Ultra%20marathon%20runners%20crossing%20vast%20desert%20landscape%20at%20sunrise%2C%20professional%20sports%20photography%2C%20athletes%20with%20hydration%20packs%2C%20dramatic%20red%20rock%20formations%2C%20summer%20heat%20haze%2C%20golden%20morning%20light%2C%20endurance%20event&width=600&height=400&seq=5&orientation=landscape",
      participants: 350,
      deadline: "July 1, 2025",
      priceRange: "$120-$250",
    },
    {
      id: 6,
      name: "Forest Half Marathon",
      date: "August 2, 2025",
      time: "7:30 AM",
      location: "Redwood National Park, California",
      distances: ["10K", "Half Marathon"],
      image:
        "https://readdy.ai/api/search-image?query=Runners%20on%20forest%20trails%20beneath%20towering%20redwood%20trees%2C%20dappled%20sunlight%20filtering%20through%20canopy%2C%20professional%20sports%20photography%2C%20athletes%20in%20colorful%20gear%2C%20summer%20morning%20mist%2C%20lush%20green%20undergrowth%2C%20natural%20setting&width=600&height=400&seq=6&orientation=landscape",
      participants: 1500,
      deadline: "July 25, 2025",
      priceRange: "$55-$95",
    },
  ];

  return NextResponse.json(upcomingRaces);
}