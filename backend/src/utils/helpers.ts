import { sunTimesByZone } from './keymaps';

export const getPressureConditionName = (pressure: number):string => {
    switch (true) {
        case (pressure < 965):
            return 'Stormy';
        case (pressure < 982):
            return 'Rain';
        case (pressure < 1015):
            return 'Change';
        case (pressure < 1032):
            return 'Fair';
        default:
            return 'Very Dry';
        }
    };

export const getSunRiseSetTime = (month: string, latitude: number):SunRiseSetTime => {
    const zone = sunTimesByZone.find(zone => latitude > zone.range[0] && latitude <= zone.range[1]);

    if (!zone) return null;

    return zone.times.find(sunTime => sunTime.month === month) || null;
};

export const getDayOrNightNow = (riseTime: string, setTime: string):string => {
    const getCurrentTimeString = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    const currentTime = getCurrentTimeString();

    if (!riseTime || !setTime || riseTime === 'Polar Day') {
        return 'Day';
    } else if (riseTime === 'Polar Night') {
        return 'Night';
    }

    return (currentTime >= riseTime && currentTime < setTime) ? 'Day' : 'Night';
}