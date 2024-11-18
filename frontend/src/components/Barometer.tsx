import styles from './css/Barometer.module.css';

import { useEffect, useState } from 'react';
import { FaCircleExclamation, FaArrowRotateRight } from 'react-icons/fa6';
import { WiCelsius, WiHumidity } from 'react-icons/wi';

import Loader from './common/Loader';
import { useApi } from '../hooks/useApi';
import { useRealTimeContext } from '../contexts/RealTimeContext';
import { dayWeatherIcons, nightWeatherIcons } from '../utils/keymaps';
import { SERVER_API_URL }from '../utils/constants';

import { IconType } from 'react-icons';
import { IBarometer, FetchResult } from './barometer.d';

const HOURINMS = 3600000;

const defaultFetchResult: FetchResult = {
    station: undefined,
    timeUntilRefresh: 0,
    pressure: 0,
    isPressureRising: false,
    pressureCondition: '',
    weatherCondition: '',
    weatherConditionName: '',
    airTemperature: 0,
    relativeHumidity: 0,
    timeOfDay: undefined,
};

const Barometer: React.FC<IBarometer> = ({cityName, stationCode}) => {
    const [isRetrying, setIsRetrying] = useState<boolean>(false);
    const {currentTime} = useRealTimeContext();
    const {data, isLoading, error, fetch} = useApi<FetchResult>(`${SERVER_API_URL}/stations/${stationCode}`);

    const {
        station,
        timeUntilRefresh,
        pressure,
        isPressureRising,
        pressureCondition,
        weatherCondition,
        weatherConditionName,
        airTemperature,
        relativeHumidity,
        timeOfDay
    } = data || defaultFetchResult;
    
    const getWeatherIcon = (timeOfDay: string): IconType  => {
        if (timeOfDay === 'Night') {
            return nightWeatherIcons[weatherCondition] || FaCircleExclamation;
        }
        return dayWeatherIcons[weatherCondition] || FaCircleExclamation;
    };

    const WeatherIcon = getWeatherIcon(timeOfDay);
    
    const handleRetry = (): void => {
        setIsRetrying(true);
        fetch();
        
        setTimeout(() => {
            setIsRetrying(false);
        }, 1000);
    };
    
    useEffect(() => {
        fetch();
        if (timeUntilRefresh) {
            const timeoutId = setTimeout(() => {
                fetch();
                const intervalId = setInterval(() => {
                    fetch();
                }, HOURINMS);
                return () => clearInterval(intervalId);
            }, timeUntilRefresh);
            
            return () => clearTimeout(timeoutId);
        }
    }, [fetch, timeUntilRefresh]);

    return (
        <div className={styles.wrapper} role='barometerBody'>
            {(isLoading || isRetrying) && (
                <div className={styles.center} role="status" aria-live='polite'>
                    <Loader role='loading-indicator' />
                </div>
            )}
            {error && !isLoading && !isRetrying && (
                <div className={styles.center} role='alert'>
                    <FaCircleExclamation className={styles['error-icon']} aria-hidden='true'/>
                    <p className={styles['error-text']}>Couldn&apos;t get readings</p>
                    <button 
                        onClick={handleRetry} 
                        aria-label='Retry loading data'
                    >
                        <FaArrowRotateRight
                            className={styles['reload-icon']}
                            aria-hidden='true'
                        />
                    </button>
                </div>
            )}
            {data && !isLoading && !isRetrying && !error && (
                <>
                    <div>
                        <p className={styles.city}>{cityName}, {currentTime}</p>
                        <p className={styles.station}>{station.name} | {station.coordinates.latitude}, {station.coordinates.longitude}</p>
                        <div className={styles.weather}>
                            <div className='row'>
                                <span style={{marginRight: 2}}> {weatherConditionName}</span>
                                <WeatherIcon/>
                            </div>
                            <div className='row'>
                                <span style={{marginLeft: 8}}>{airTemperature}</span>
                                <WiCelsius className={styles.icon} style={{fontSize: 30, marginInline: -7}} aria-label='celcius degrees' /> 
                            </div>
                            <div className='row'>
                                <span>{relativeHumidity}</span>
                                <WiHumidity className={styles.icon} aria-label='percent relative humidity' />
                            </div>
                        </div>
                    </div>
                    <p className={styles.pressure}>{pressure} mBar</p>
                    <div>
                        <p className={styles.condition} aria-label='pressure condition'>{pressureCondition}</p>
                        <p className={styles['pressure-change']}>{isPressureRising ? 'Pressure is rising' : 'Pressure is falling'}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Barometer;