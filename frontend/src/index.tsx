import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './index.css';
import { App } from './App';

import { RealTimeProvider } from './contexts/RealTimeContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <RealTimeProvider >
            <App />
        </RealTimeProvider>
    </StrictMode>
);
