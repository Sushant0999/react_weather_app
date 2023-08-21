import { Button, Container, Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import React, { useState } from 'react';
import { getText } from './WeatherData'


export default function SearchBar() {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch1 = () => {
        console.log('Input value from handleSearch :', inputValue);
        getText(inputValue);
        return inputValue;
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
                    <Grid item xs={{ padding: '0' }}>
                        <Button onClick={handleSearch1}>{<SearchIcon style={{ color: 'white' }} />}</Button>
                    </Grid>
                </Grid>
                <div style={{ height: '40px' }}></div>
            </Container>
        </div>
    );
}

