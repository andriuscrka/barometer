import { useReducer } from 'react';

import CenterLayout from './layouts/CenterLayout';
import Barometer from './components/Barometer';
import Switch from './components/common/Switch';
import { STATIONS } from './utils/constants';
import { barometerReducer, initialState } from './reducers/barometerReducer';
import { handleSwitchChange } from './reducers/barometerReducer';

import styles from './App.module.css';

export const App = () => {
    const [activeStations, dispatch] = useReducer(barometerReducer, initialState);

    return (
        <div className={styles.container}>
            <CenterLayout>
                <div className={styles['switch-container']}>
                    {STATIONS.map((station, index) => (
                        <span key={index} style={{display: 'flex', alignItems: 'center', flexDirection: 'column', margin: 10}}>
                            <p>{station.cityName}</p>
                            <Switch onChange={(isActive) => handleSwitchChange(station, isActive, dispatch)}/>
                        </span>
                    ))}
                </div>
                <div className={styles.barometers}>
                    {activeStations.map((item) => (
                        <Barometer key={item.stationCode} cityName={item.cityName} stationCode={item.stationCode} />
                    ))}
                    {activeStations.length === 0 && 
                    <div className={styles.placeholder}>No station selected!</div>}
                </div>
            </CenterLayout>
        </div>
    );
};