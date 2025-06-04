import { TestimonialsItemProps } from '@/types/testimonials';
import { NextResponse } from 'next/server';

export async function GET() {
  const testimonials:TestimonialsItemProps[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20athletic%20female%20runner%20in%20her%2030s%2C%20natural%20lighting%2C%20neutral%20background%2C%20confident%20smile%2C%20casual%20athletic%20wear%2C%20summer%20outdoor%20setting&width=100&height=100&seq=15&orientation=squarish",
      text: "The race calendar feature helped me plan my entire season. I&quot;ve discovered events I never knew existed and met amazing people along the way!",
      race: "Summer Marathon 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20athletic%20male%20runner%20in%20his%2040s%2C%20natural%20lighting%2C%20neutral%20background%2C%20friendly%20expression%2C%20casual%20athletic%20wear%2C%20summer%20outdoor%20setting&width=100&height=100&seq=16&orientation=squarish",
      text: "As someone who travels for races, this platform has been invaluable. The detailed event information and community insights help me prepare perfectly for each race.",
      race: "Coastal Trail Run 2024",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar:
        "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20athletic%20female%20runner%20in%20her%2020s%2C%20natural%20lighting%2C%20neutral%20background%2C%20bright%20smile%2C%20casual%20athletic%20wear%2C%20summer%20outdoor%20setting&width=100&height=100&seq=17&orientation=squarish",
      text: "I love how easy it is to find races that match my preferences. The filtering options save me so much time, and the race reviews from other runners are spot on!",
      race: "City Night Run 2024",
    },
  ];
  return NextResponse.json(testimonials);   
}