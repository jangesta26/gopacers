
import { TestimonialsItemProps } from '@/types/testimonials';
import { NextResponse } from 'next/server';

export async function GET() {
  
  const testimonials:TestimonialsItemProps[] = [
    {
      id: 1,
      name:"Maria Johnson",
      avatar: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520athletic%2520female%2520runner%2520in%2520her%252030s%252C%2520natural%2520lighting%252C%2520neutral%2520background%252C%2520confident%2520smile%252C%2520casual%2520athletic%2520wear%252C%2520summer%2520outdoor%2520setting&width=100&height=100&seq=22&orientation=squarish",
      race:"2024 Half Marathon Finisher",
      text: "The Summer Marathon was incredibly well-organized. The route was beautiful, and the support from volunteers and spectators was amazing. Can't wait to participate again next year!",
    },
    {
      id: 2,
      name:"David Thompson",
      avatar: "https://readdy.ai/api/search-image?query=Professional%2520headshot%2520of%2520athletic%2520male%2520runner%2520in%2520his%252040s%252C%2520natural%2520lighting%252C%2520neutral%2520background%252C%2520friendly%2520expression%252C%2520casual%2520athletic%2520wear%252C%2520summer%2520outdoor%2520setting&width=100&height=100&seq=23&orientation=squarish",
      race:"2024 10K Finisher",
      text: "As a first-time participant, I was nervous, but the event was so welcoming. The course through Central Park was challenging yet enjoyable. The medal is now proudly displayed in my home!",
    },
  ]

    return NextResponse.json(testimonials);
}