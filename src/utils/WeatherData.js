import { useState, useEffect } from 'react';

function useWeatherData(inputValue) {

    const [weather, setWeather] = useState(null);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    async function fetchData() {
        console.log("value ", inputValue);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&cnt=16&appid=5ebeb95832d3c8470601e4f254cd547a&units=metric`);
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
