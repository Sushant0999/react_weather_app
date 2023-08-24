import { Button, Container, Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import React, { useState, useEffect } from 'react';


export function useWeatherData(inputValue) {
    const [weather, setWeather] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        async function fetchData() {
            let cityName = 'rome';
            console.log("inputValue in fect ", inputValue);
            cityName = inputValue === undefined ? 'rome' : inputValue;
            console.log("cityName : ", cityName);
            try {
                const apiUrl = cityName === undefined ?
                    `https://api.openweathermap.org/data/2.5/forecast?q=rome&cnt=10&appid=5ebeb95832d3c8470601e4f254cd547a&units=metric` :
                    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=10&appid=5ebeb95832d3c8470601e4f254cd547a&units=metric`;
                const response = await fetch(apiUrl);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error('Error fetching weather data');
                }
                setWeather(data);
                setErrorMessage(null);
            } catch (error) {
                setWeather(null);
                setErrorMessage(error.message);
            }
        }

        fetchData();
    }, [inputValue]);

    return { weather, errorMessage };
}



export default function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState();

    const { weather, errorMessage } = useWeatherData(inputValue);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch1 = () => {
        onSearch(inputValue, weather, errorMessage);
    };


    return (
        <div>
            <Container>
                <div style={{ height: '50px' }}></div>
                <Grid container justifyContent={'space-evenly'}>
                    <Grid item>
                        <DeviceThermostatIcon style={{ color: 'white' }} />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                            FormHelperTextProps={{ style: { color: 'white' } }}
                            id="standard-basic"
                            variant="standard"
                            placeholder="City, Country"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={0}>
                        <Button onClick={handleSearch1}><SearchIcon style={{ color: 'white' }} /></Button>
                    </Grid>

                </Grid>
                <div style={{ height: '40px' }}></div>
            </Container>
        </div>
    );
}
