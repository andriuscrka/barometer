import 'jest';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';

import { SERVER_API_URL } from '../../src/utils/constants';
import Barometer from '../../src/components/Barometer';
import { RealTimeProvider } from '../../src/contexts/RealTimeContext';

jest.mock('axios');

const ContextProviders: React.FC<IRealTimeContext> = ({ children }) => {
    return (
        <RealTimeProvider>
            {children}
        </RealTimeProvider>
    );
};

describe('Barometer component', () => {
    it('renders without crashing', () => {
        const { getByRole } = render(
            <ContextProviders>
                <Barometer cityName='' stationCode=''/>
            </ContextProviders>
        );
        expect(getByRole('barometerBody')).toBeInTheDocument();
    });

    it('calls fetch on render', async () => {
        render(
            <ContextProviders>
                <Barometer cityName='' stationCode=''/>
            </ContextProviders>
        );

        await waitFor(() => {
            // React Strict mode seems to render twice
            expect(axios.get).toHaveBeenCalledTimes(2);
            expect(axios.get).toHaveBeenCalledWith(`${SERVER_API_URL}/stations/`, undefined);
        });
    });

    it('displays loading indicator while fetching data', async () => {
        (axios.get as jest.Mock).mockReturnValueOnce(new Promise(() => {}));
    
        const { getByRole } = render(
            <ContextProviders>
                <Barometer cityName='' stationCode=''/>
            </ContextProviders>
        );
    
        expect(getByRole('loading-indicator')).toBeInTheDocument();
    });
});