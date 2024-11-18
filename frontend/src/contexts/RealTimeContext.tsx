import { createContext, useContext, useState, useEffect } from 'react';

const MS = 1000;
const MINUTEINMS = 60000;

const RealTimeContext = createContext<RealTimeContextType | undefined>(undefined);

export const RealTimeProvider: React.FC<IRealTimeContext> = ({children}) => {
    const [currentTime, setCurrentTime] = useState(null);

    const updateCurrentTime = (): void => {
        setCurrentTime(new Date().toLocaleTimeString('lt-LT', { hour: '2-digit', minute: '2-digit' }));
    };

    useEffect(() => {
        const currentSeconds = new Date().getSeconds();
        const timeUntilNextMinute = MINUTEINMS - currentSeconds * MS;

        updateCurrentTime();

        if (timeUntilNextMinute) {
            const timeoutId = setTimeout(() => {
                updateCurrentTime();
                const intervalId = setInterval(() => {
                    updateCurrentTime();
                }, MINUTEINMS);
                return () => clearInterval(intervalId);
            }, timeUntilNextMinute);

            return () => clearTimeout(timeoutId);
        }
    }, []);

    return (
        <RealTimeContext.Provider value={{ currentTime }}>
            {children}
        </RealTimeContext.Provider>
    );
};

export const useRealTimeContext = () => {
    const context = useContext(RealTimeContext);
    if (context === undefined) {
        throw new Error('useRealTimeContext must be used within a RealTimeProvider');
    }
    return context;
};