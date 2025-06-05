import { AddOnsProps } from "@/types/add-ons";
import { CommunityStatsItemProps } from "@/types/community-statistics";
import { PhotoGalleryProps } from "@/types/photo-gallery";
import { UpcomingRaceCalendarItem } from "@/types/race-calendar";
import { RaceCategoryOptionsProps } from "@/types/race-category-options";
import { TestimonialsItemProps } from "@/types/testimonials";



async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  return res.json();
}


export const fetchUpcomingRaceCalendarItem = () => fetchData<UpcomingRaceCalendarItem[]>('/api/home/upcoming-races');
export const fetchPhotoGalleryItem = () => fetchData<PhotoGalleryProps[]>('/api/home/photo-gallery');
export const fetchTestimonialsItem = () => fetchData<TestimonialsItemProps[]>('/api/home/testimonials');
export const fetchCommunityStatsItem = () => fetchData<CommunityStatsItemProps>('/api/home/community-statistics');
export const fetchRaceCategoryOptionsItem = () => fetchData<RaceCategoryOptionsProps[]>('/api/registration/race-category-options');
export const fetchAddOnsItem = () => fetchData<AddOnsProps[]>('/api/registration/add-ons');
export const fetchRegistrationTestimonialsItem = () => fetchData<TestimonialsItemProps[]>('/api/registration/testimonials');