import { useState, useEffect } from 'react';

export function getText(value) {
    console.log("this ", value)
    return value;
}

function useWeatherData() {

    const [weather, setWeather] = useState(null);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    async function fetchData() {
        let inputValue = getText();
        console.log("this is getText", inputValue);
        if (inputValue === null) {
            inputValue = 'patna';
        }
        else {
            inputValue = 'moscow';
        }
        console.log(inputValue);
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
