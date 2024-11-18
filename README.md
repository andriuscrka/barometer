# React Barometer

## Project Overview

This is a web application that monitors and displays real-time atmospheric pressure and weather conditions from [a public API](https://api.meteo.lt/). It provides users with up-to-date information on humidity, temperature, and other key meteorological data.

## Features

- **Real-Time Data**: Fetches and displays the latest weather data from selected stations.
- **Multiple Stations**: Users can select between multiple stations to monitor.
- **Dynamic Icons**: Displays appropriate weather icons based on current conditions.

## Notes

### API

- Please note, that API limits request amount to 180 requests per minute and no more than 20 000 requests per day. **Otherwise your IP address can be banned with no warning!** For up to date information, check [this website](https://api.meteo.lt/).


## Installation

### Frontend

1. Navigate to the frontend directory:
    ```cd frontend```

2. Install yarn packages:
    ```yarn```

### Backend 

1. Navigate to the backend directory:
    ``` cd backend```

2. Install yarn packages:
    ```yarn```

## Usage

### Frontend

- Starting developement environment:
    ```yarn start```

- Starting production environment:
    ```yarn start:prod```

- Building a production bundle: 
    ```yarn build```

### Backend

- Starting the server:
    ```yarn server```

## License

Distributed under the MIT License.