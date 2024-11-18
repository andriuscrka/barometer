import axios from 'axios';

import { getPressureConditionName, getSunRiseSetTime, getDayOrNightNow } from '../utils/helpers';
import { weatherConditionNames, httpStatus } from '../utils/keymaps';
import { METEO_API_URL } from '../utils/constants';

const MINUTEINMS = 60000;

const getTimeUntilRefresh = (): number => {
    const currentMinutes = new Date().getMinutes();
    const nextHalfHour = currentMinutes < 30 ? 30 : 90;
    const minutesUntilNextHalfHour = nextHalfHour - currentMinutes;
    return minutesUntilNextHalfHour * MINUTEINMS;
}

export const getStationObservations = async (req, res) => {
    const { stationCode } = req.params;
    
    try {
        const response = await axios.get(`${METEO_API_URL}/${stationCode}/observations/latest`)

        if (!response.data) {
            return res.status(httpStatus.NOT_FOUND).json({ error: 'Station not found' });
        }

        const data = response.data;
        const { station, observations } = data;

        if (!observations || !station) {
            return res.status(httpStatus.NOT_FOUND).json({ error: 'No observations found' });
        }

        const latestObservation = observations.slice(-1)[0];
        const secondLatestObservation = observations.slice(-2)[0];

        const isPressureRising = latestObservation.seaLevelPressure > secondLatestObservation.seaLevelPressure;

        const pressureCondition =  getPressureConditionName(latestObservation.seaLevelPressure)
        const weatherConditionName = weatherConditionNames[latestObservation.conditionCode];

        const timeUntilRefresh = getTimeUntilRefresh();

        const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
        const {sunrise, sunset} = getSunRiseSetTime(currentMonth, +station.coordinates.latitude);

        const timeOfDay = getDayOrNightNow(sunrise, sunset) 

        const formattedResponse: FormattedResponse = {
            station,
            pressure: latestObservation.seaLevelPressure,
            isPressureRising,
            pressureCondition,
            weatherCondition: latestObservation.conditionCode,
            weatherConditionName,
            airTemperature: latestObservation.airTemperature,
            relativeHumidity: latestObservation.relativeHumidity,
            timeOfDay,
            timeUntilRefresh
        }

        return res.status(httpStatus.OK).json(formattedResponse);

    } catch (error) {
        console.error('Error fetching station observations:', error);
        if (error.response) {
            return res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            return res.status(httpStatus.SERVICE_UNAVAILABLE).json({ error: 'No response from the weather service' });
        } else {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'An unexpected error occurred' });
        }
    }
}