export interface IBarometer{
    cityName: string;
    stationCode: string;
}

export interface Station {
    name: string;
    code: string;
    coordinates: {
        latitude: string;
        longitude: string;
    };
}

export interface FetchResult {
    airTemperature: number;
    isPressureRising: boolean;
    pressure: number;
    pressureCondition: string;
    relativeHumidity: number;
    timeOfDay: 'Day' | 'Night' | undefined;
    timeUntilRefresh: number;
    station: Station | undefined;
    weatherCondition: string;
    weatherConditionName: string;
}