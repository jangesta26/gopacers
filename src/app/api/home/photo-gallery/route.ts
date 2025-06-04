import { PhotoGalleryProps } from '@/types/photo-gallery';
import { NextResponse } from 'next/server';

export async function GET() {
  const galleryImages:PhotoGalleryProps[] = [
    {
      id: 1,
      url: "https://readdy.ai/api/search-image?query=Marathon%20finish%20line%20with%20runners%20celebrating%20victory%2C%20arms%20raised%20in%20triumph%2C%20professional%20sports%20photography%2C%20emotional%20moment%2C%20crowd%20cheering%2C%20summer%20race%20event%2C%20vibrant%20atmosphere%2C%20finish%20line%20banner%20visible&width=600&height=400&seq=7&orientation=landscape",
      category: "Marathon",
      title: "Victory Moment",
    },
    {
      id: 2,
      url: "https://readdy.ai/api/search-image?query=Trail%20runners%20crossing%20mountain%20stream%2C%20splashing%20through%20water%2C%20professional%20sports%20photography%2C%20determination%20on%20faces%2C%20summer%20forest%20setting%2C%20action%20shot%20with%20water%20droplets%2C%20dramatic%20lighting&width=400&height=600&seq=8&orientation=portrait",
      category: "Trail",
      title: "Stream Crossing",
    },
    {
      id: 3,
      url: "https://readdy.ai/api/search-image?query=Group%20of%20runners%20at%20starting%20line%2C%20anticipation%20and%20focus%2C%20professional%20sports%20photography%2C%20race%20bibs%20visible%2C%20summer%20morning%20atmosphere%2C%20diverse%20athletes%2C%20starting%20arch%20in%20background&width=600&height=400&seq=9&orientation=landscape",
      category: "5K",
      title: "Race Start",
    },
    {
      id: 4,
      url: "https://readdy.ai/api/search-image?query=Aerial%20view%20of%20marathon%20route%20through%20city%20streets%20with%20thousands%20of%20runners%2C%20professional%20sports%20photography%2C%20summer%20urban%20landscape%2C%20colorful%20crowd%20of%20athletes%2C%20iconic%20city%20landmarks%20visible&width=600&height=400&seq=10&orientation=landscape",
      category: "Marathon",
      title: "City Marathon",
    },
    {
      id: 5,
      url: "https://readdy.ai/api/search-image?query=Ultra%20runner%20silhouette%20against%20sunset%20on%20mountain%20ridge%2C%20professional%20sports%20photography%2C%20dramatic%20sky%20with%20orange%20and%20purple%20hues%2C%20lone%20athlete%2C%20summer%20evening%20atmosphere%2C%20epic%20landscape&width=400&height=600&seq=11&orientation=portrait",
      category: "Ultra",
      title: "Sunset Ultra",
    },
    {
      id: 6,
      url: "https://readdy.ai/api/search-image?query=Runners%20receiving%20medals%20at%20finish%20line%2C%20emotional%20moment%2C%20professional%20sports%20photography%2C%20volunteers%20placing%20medals%2C%20summer%20race%20event%2C%20exhausted%20but%20happy%20expressions%2C%20achievement%20celebration&width=600&height=400&seq=12&orientation=landscape",
      category: "Half Marathon",
      title: "Medal Ceremony",
    },
    {
      id: 7,
      url: "https://readdy.ai/api/search-image?query=Close-up%20of%20determined%20runner%20face%20with%20sweat%2C%20professional%20sports%20photography%2C%20intense%20focus%20expression%2C%20summer%20race%20event%2C%20dramatic%20lighting%2C%20emotional%20sports%20moment&width=400&height=600&seq=13&orientation=portrait",
      category: "10K",
      title: "Determination",
    },
    {
      id: 8,
      url: "https://readdy.ai/api/search-image?query=Runners%20at%20hydration%20station%20grabbing%20water%20cups%2C%20professional%20sports%20photography%2C%20volunteers%20handing%20out%20drinks%2C%20summer%20race%20event%2C%20action%20shot%20with%20splashing%20water%2C%20mid-race%20moment&width=600&height=400&seq=14&orientation=landscape",
      category: "Marathon",
      title: "Hydration Station",
    },
    {
      id: 9,
      url: "https://readdy.ai/api/search-image?query=Trail%20runners%20traversing%20alpine%20mountain%20paths%20with%20spectacular%20valley%20views%2C%20professional%20sports%20photography%2C%20athletes%20in%20technical%20gear%2C%20dramatic%20mountain%20backdrop%2C%20summer%20wildflowers%2C%20clear%20blue%20sky%2C%20morning%20light&width=600&height=400&seq=3&orientation=landscape",
      category: "Ultra Trail Dasal",
      title: "Mountain Challenge",
    },
  ];
  return NextResponse.json(galleryImages);
}