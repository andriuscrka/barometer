interface SunRiseSetTime {
  month: string;
  sunrise: string;
  sunset: string;
}

interface ZoneSunTimes {
  zone: string;
  range: [number, number];
  times: SunRiseSetTime[];
}