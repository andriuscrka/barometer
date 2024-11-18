import { WiCloud, WiCloudy, WiDayCloudy, WiDayRain, WiDaySunny, WiFog, WiHail, WiLightning, WiNightCloudy, WiNightRain, WiRain, WiShowers, WiSleet, WiSnow, WiStars, WiStrongWind } from 'react-icons/wi';
import { IconType } from 'react-icons';
import { reduceArrayToObject } from './helpers';

export const dayIconMappings: [string[], IconType][] = [
    [['clear'], WiDaySunny],
    [['partly-cloudy', 'cloudy-with-sunny-intervals'], WiDayCloudy],
    [['variable-cloudiness'], WiCloudy],
    [['cloudy'], WiCloud],
    [['light-rain-at-times'], WiDayRain],
    [['rain-showers', 'light-rain'], WiShowers],
    [['rain-at-times', 'rain', 'heavy-rain'], WiRain],
    [['thunder', 'isolated-thunderstorms', 'thunderstorms'], WiLightning],
    [['sleet-showers', 'sleet-at-times', 'light-sleet', 'sleet'], WiSleet],
    [['hail'], WiHail],
    [['snow-showers', 'light-snow-at-times', 'snow-at-times', 'light-snow', 'snow', 'heavy-snow'], WiSnow],
    [['fog'], WiFog],
    [['strong-wind'], WiStrongWind],
    [['night-clear'], WiStars],
    [['night-cloudy'], WiNightCloudy],
    [['night-rain'], WiNightRain],
];

export const nightIconMappings: [string[], IconType][] = [
    [['clear'], WiStars],
    [['partly-cloudy', 'cloudy-with-sunny-intervals'], WiNightCloudy],
    [['variable-cloudiness'], WiCloudy],
    [['cloudy'], WiCloud],
    [['light-rain-at-times'], WiNightRain],
    [['rain-showers', 'light-rain'], WiShowers],
    [['rain-at-times', 'rain', 'heavy-rain'], WiRain],
    [['thunder', 'isolated-thunderstorms', 'thunderstorms'], WiLightning],
    [['sleet-showers', 'sleet-at-times', 'light-sleet', 'sleet'], WiSleet],
    [['hail'], WiHail],
    [['snow-showers', 'light-snow-at-times', 'snow-at-times', 'light-snow', 'snow', 'heavy-snow'], WiSnow],
    [['fog'], WiFog],
    [['strong-wind'], WiStrongWind],
    [['night-clear'], WiStars],
    [['night-cloudy'], WiNightCloudy],
    [['night-rain'], WiNightRain],
];

export const dayWeatherIcons: WeatherIcons = reduceArrayToObject(dayIconMappings);

export const nightWeatherIcons: WeatherIcons = reduceArrayToObject(nightIconMappings); 