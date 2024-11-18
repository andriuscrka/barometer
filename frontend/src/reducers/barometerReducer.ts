import { STATIONS } from '../utils/constants';
import { IBarometer } from '../components/barometer.d';

interface Action {
    type: 'ADD_ITEM' | 'REMOVE_ITEM';
    item?: IBarometer;
}

export const initialState = [...STATIONS];
    
export const handleSwitchChange = (station: typeof STATIONS[0], isActive: boolean, dispatch) => {
    if (isActive) {
        dispatch({ type: 'ADD_ITEM', item: station });
    } else {
        dispatch({ type: 'REMOVE_ITEM', item: station });
    }
};

export const barometerReducer = (state: IBarometer[], action: Action): IBarometer[] => {
    switch (action.type) {
    case 'ADD_ITEM':
        return action.item ? [...state, action.item].sort((a, b) => a.cityName.localeCompare(b.cityName)) : state;
    case 'REMOVE_ITEM':
        return action.item ? state.filter((station) => station !== action.item) : state;
    default:
        return state;
    }
};