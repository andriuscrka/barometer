export const httpStatus: { [key: string]: number} = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,  
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503
}

export const weatherConditionNames: { [key: string]: string } = {
    "clear": "Clear",
    "partly-cloudy": "Partly cloudy",
    "variable-cloudiness": "Cloudy",
    "cloudy-with-sunny-intervals": "Cloudy with clear intervals",
    "cloudy": "Cloudy",
    "rain-showers": "Rain showers",
    "light-rain-at-times": "Light rain at times",
    "rain-at-times": "Rain at times",
    "light-rain": "Light rain",
    "rain": "Rain",
    "heavy-rain": "Heavy rain",
    "thunder": "Thunder",
    "isolated-thunderstorms": "Isolated thunderstorms",
    "thunderstorms": "Thunderstorms",
    "sleet-showers": "Sleet showers",
    "sleet-at-times": "Sleet at times",
    "light-sleet": "Light sleet",
    "sleet": "Sleet",
    "freezing-rain": "Freezing rain",
    "hail": "Hail",
    "snow-showers": "Snow showers",
    "light-snow-at-times": "Light snow at times",
    "snow-at-times": "Snow at times",
    "light-snow": "Light snow",
    "snow": "Snow",
    "heavy-snow": "Heavy snow",
    "snowstorm": "Snowstorm",
    "fog": "Fog",
    "squall": "Squall",
    "null": null
}

//0° to 10° latitude
export const equatorialZoneSunTimes: SunRiseSetTime[] = [
  { month: "January", sunrise: "06:00", sunset: "18:00" },
  { month: "February", sunrise: "06:00", sunset: "18:00" },
  { month: "March", sunrise: "06:00", sunset: "18:00" },
  { month: "April", sunrise: "06:00", sunset: "18:00" },
  { month: "May", sunrise: "06:00", sunset: "18:00" },
  { month: "June", sunrise: "06:00", sunset: "18:00" },
  { month: "July", sunrise: "06:00", sunset: "18:00" },
  { month: "August", sunrise: "06:00", sunset: "18:00" },
  { month: "September", sunrise: "06:00", sunset: "18:00" },
  { month: "October", sunrise: "06:00", sunset: "18:00" },
  { month: "November", sunrise: "06:00", sunset: "18:00" },
  { month: "December", sunrise: "06:00", sunset: "18:00" }
];

//10° to 30° latitude
export const subtropicalZoneSunTimes: SunRiseSetTime[] = [
  { month: "January", sunrise: "06:45", sunset: "17:30" },
  { month: "February", sunrise: "06:30", sunset: "18:00" },
  { month: "March", sunrise: "06:15", sunset: "18:30" },
  { month: "April", sunrise: "06:00", sunset: "19:00" },
  { month: "May", sunrise: "05:30", sunset: "19:30" },
  { month: "June", sunrise: "05:15", sunset: "20:00" },
  { month: "July", sunrise: "05:15", sunset: "20:00" },
  { month: "August", sunrise: "05:30", sunset: "19:45" },
  { month: "September", sunrise: "05:45", sunset: "19:00" },
  { month: "October", sunrise: "06:15", sunset: "18:15" },
  { month: "November", sunrise: "06:30", sunset: "17:45" },
  { month: "December", sunrise: "06:45", sunset: "17:30" }
];

//30° to 50° latitude
export const midLatitudeZoneSunTimes: SunRiseSetTime[] = [
  { month: "January", sunrise: "07:30", sunset: "17:00" },
  { month: "February", sunrise: "07:00", sunset: "17:45" },
  { month: "March", sunrise: "06:15", sunset: "18:30" },
  { month: "April", sunrise: "06:00", sunset: "19:30" },
  { month: "May", sunrise: "05:30", sunset: "20:15" },
  { month: "June", sunrise: "05:00", sunset: "21:00" },
  { month: "July", sunrise: "05:15", sunset: "21:00" },
  { month: "August", sunrise: "05:45", sunset: "20:15" },
  { month: "September", sunrise: "06:15", sunset: "19:15" },
  { month: "October", sunrise: "06:45", sunset: "18:00" },
  { month: "November", sunrise: "07:15", sunset: "17:00" },
  { month: "December", sunrise: "07:45", sunset: "16:30" }
];

//50° to 66.5° latitude
export const subpolarZoneSunTimes: SunRiseSetTime[] = [
  { month: "January", sunrise: "08:45", sunset: "15:30" },
  { month: "February", sunrise: "08:00", sunset: "16:30" },
  { month: "March", sunrise: "06:45", sunset: "18:00" },
  { month: "April", sunrise: "05:30", sunset: "19:30" },
  { month: "May", sunrise: "04:45", sunset: "21:00" },
  { month: "June", sunrise: "03:45", sunset: "22:00" },
  { month: "July", sunrise: "04:00", sunset: "22:00" },
  { month: "August", sunrise: "05:00", sunset: "21:00" },
  { month: "September", sunrise: "06:15", sunset: "19:30" },
  { month: "October", sunrise: "07:15", sunset: "17:30" },
  { month: "November", sunrise: "08:00", sunset: "16:00" },
  { month: "December", sunrise: "08:45", sunset: "15:15" }
];

//66.5° to 90° latitude
export const polarZoneSunTimes: SunRiseSetTime[] = [
  { month: "January", sunrise: "Polar Night", sunset: "Polar Night" },
  { month: "February", sunrise: "09:00", sunset: "15:00" },
  { month: "March", sunrise: "07:30", sunset: "17:00" },
  { month: "April", sunrise: "05:00", sunset: "19:30" },
  { month: "May", sunrise: "Polar Day", sunset: "Polar Day" },
  { month: "June", sunrise: "Polar Day", sunset: "Polar Day" },
  { month: "July", sunrise: "Polar Day", sunset: "Polar Day" },
  { month: "August", sunrise: "04:00", sunset: "21:00" },
  { month: "September", sunrise: "06:30", sunset: "18:30" },
  { month: "October", sunrise: "08:00", sunset: "16:00" },
  { month: "November", sunrise: "09:30", sunset: "14:30" },
  { month: "December", sunrise: "Polar Night", sunset: "Polar Night" }
];

export const sunTimesByZone: ZoneSunTimes[] = [
    { zone: 'equatorial', range: [0, 10], times: equatorialZoneSunTimes },
    { zone: 'subtropical', range: [10, 30], times: subtropicalZoneSunTimes },
    { zone: 'midLatitude', range: [30, 50], times: midLatitudeZoneSunTimes },
    { zone: 'subpolar', range: [50, 66.5], times: subpolarZoneSunTimes },
    { zone: 'polar', range: [66.5, Infinity], times: polarZoneSunTimes },
];