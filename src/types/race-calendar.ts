export type UpcomingRaceCalendarItem = {
      id: number,
      name: string,
      date: string,
      time: string,
      location: string,
      distances: RaceDistance[],
      image: string
      participants: number,
      deadline: string,
      priceRange: string,
};

export type RaceDistance =
  | "5K"
  | "10K"
  | "15K"
  | "25K"
  | "30K"
  | "Half Marathon"
  | "Full Marathon"
  | "50K"
  | "100K"
  | "100 Miles";