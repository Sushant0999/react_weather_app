import { useState, useEffect } from 'react';

function useWeatherData() {
    const [weather, setWeather] = useState(null);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function fetchData() {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?id=1260086&appid=59e30983d7b7f60075b0b823a0b41e1b&units=metric');
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Error fetching weather data');
            }
            setWeather(data);
        } catch (error) {
            setIsError(true);
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (isError) {
        return { weather: null, errorMessage };
    }

    if (!weather) {
        return { weather: null, errorMessage: null };
    }

    return { weather, errorMessage: null };
}

export default useWeatherData;
