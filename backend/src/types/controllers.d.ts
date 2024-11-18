interface Station {
    id: string;
    name: string;
    coordinates: {
        latitude: string;
        longitude: string;
    };
}

interface FormattedResponse {
    station: Station;
    pressure: number;
    isPressureRising: boolean;
    pressureCondition: string;
    weatherCondition: string;
    weatherConditionName: string;
    airTemperature: number;
    relativeHumidity: number;
    timeOfDay: string;
    timeUntilRefresh: number;
}