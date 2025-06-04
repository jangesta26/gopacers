'use client'
import React, { useEffect, useState } from 'react'
import HeroSection from '@/components/Section/Home/Hero'
import RaceCalendarSection from '@/components/Section/Home/RaceCalendar'
import { fetchCommunityStatsItem, fetchPhotoGalleryItem, fetchTestimonialsItem, fetchUpcomingRaceCalendarItem } from '@/lib/api'
import { UpcomingRaceCalendarItem } from '@/types/race-calendar'
import FeaturedEventSection from '@/components/Section/Home/FeaturedEvents'
import PhotoGallerySection from '@/components/Section/Home/PhotoGallery'
import { PhotoGalleryProps } from '@/types/photo-gallery'
import CommunitySection from '@/components/Section/Home/Community'
import { TestimonialsItemProps } from '@/types/testimonials'
import { CommunityStatsItemProps } from '@/types/community-statistics'
import { FaFacebook, FaInstagram, FaStrava, FaTwitter } from 'react-icons/fa'
import SocialMediaIntegration from '@/components/Section/Home/Community/SocialMediaIntegration'
import RecentResult from '@/components/Section/Home/Community/RecentResult'
import CommunityStats from '@/components/Section/Home/Community/CommunityStats'
import Testimonials from '@/components/Section/Home/Community/Testimonials'



const HomePage = () => {

  const [upcomingRacesData, setUpcomingRacesData] = useState<UpcomingRaceCalendarItem[]>([]);
  const [photoGalleryData, setPhotoGalleryData] = useState<PhotoGalleryProps[]>([]);
  const [testimonialsData, setTestimonialsData] = useState<TestimonialsItemProps[]>([]);
  const [communityStatsData, setCommunityStatsData] = useState<CommunityStatsItemProps | null>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
      const loadSlides = async () => {
      try {
          const upcomingRaceData = await fetchUpcomingRaceCalendarItem();
          const galleryImagesData = await fetchPhotoGalleryItem();
          const testimonials = await fetchTestimonialsItem();
          const communityStats = await fetchCommunityStatsItem();
          setUpcomingRacesData(upcomingRaceData);
          setPhotoGalleryData(galleryImagesData);
          setTestimonialsData(testimonials);
          setCommunityStatsData(communityStats)
      } catch (err) {
          console.error('Failed to fetch hero slides', err);
          setError('Failed to load slides');
      } finally {
          setIsLoading(false);
      }
      };

    loadSlides();
  }, []);

  if (isLoading) {
  return <div className="h-[600px] flex items-center justify-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="h-[600px] flex items-center justify-center text-red-600">{error}</div>;
  }


  return (
    <>
      <HeroSection 
        title = "SANTE BARLEY TRILOGY RUN ASIA 2025"
        calendarDate="November 9, 2025"
        location="Pasay City, Metro Manila"
        description="Join thousands of runners for the most anticipated marathon of the finals. Beautiful routes, amazing atmosphere, and unforgettable experience."
        imgUrl="https://res.cloudinary.com/duwr4xret/image/upload/v1749050035/1747656050377IMG_7023_b0k5uq.avif"
      />

      <RaceCalendarSection
      title='Race Calendar'
      description='Find your next challenge from hundreds of upcoming events'
      upcomingRaces={upcomingRacesData}
      />

      <FeaturedEventSection 
      title='Featured Events'
      description='Highlighted races you don&apos;t want to miss'
      upcomingRaces={upcomingRacesData}
      />

      <PhotoGallerySection 
      title='Photo Gallery'
      description='Capturing the spirit and energy of our running events'
      galleryImages={photoGalleryData}
      />

      <CommunitySection>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Community
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
            Connect with fellow runners and share your experiences
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testimonials */}
            <Testimonials 
            title='Runner Testimonials'
            description='Hear what our community has to say'
            testimonials={testimonialsData}
            />

            {/* Community Stats & Recent Results */}
            <div>
              {/* Community Stats */}
              <CommunityStats
              title='Community Statistics'
              description='Our growing runner community'
              totalRunners='Total Runners'
              activeCommunities="Active Communities"
              upComingEvents='Upcoming Events' 
              communityStats={communityStatsData}
              />
              {/*Recent Results */}
              <RecentResult 
              title='Recent Results'
              description='Latest race finishes'
              />
            </div>
        </div>

        {/* Social Media Integration */}
        <SocialMediaIntegration 
          title="Join Our Social Community"
          description="Follow us on social media to stay updated with the latest events, training tips, and connect with fellow runners."
          buttonItem={[
            {
              id:1,
              name:"Facebook",
              icon: <FaFacebook className='text-blue-600'/>
            },
            {
              id:2,
              name:"Instagram",
              icon: <FaInstagram className='text-pink-600'/>
            },
            {
              id:3,
              name:"Twitter",
              icon: <FaTwitter className='text-blue-400'/>
            },
            {
              id:4,
              name:"Strava",
              icon: <FaStrava className='text-orange-600'/>
            },
          ]}   
        />
      </CommunitySection>
    </>
  )
}

export default HomePage
