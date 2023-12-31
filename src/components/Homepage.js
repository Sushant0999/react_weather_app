import { Box, Button, Container, Grid } from '@mui/material'
import SearchBar from '../utils/SearchBar'
import Card1 from '../utils/Card1'
import Card4 from '../utils/Card4'
import Card3 from '../utils/Card3'
import Logo from '../utils/Logo'
import light_rain from "../images/rain.gif"
import clear_sky from '../images/clear_sky.jpg'
import broken_clouds from '../images/broken_clouds.jpg'
import overcast_clouds from '../images/overcast_clouds.jpg'
import thunderstorm from '../images/thunderstorm.jpg'
import ErrorPage from './ErrorPage'
import { useState } from 'react'


export default function Homepage() {
    const [weather, setWeather] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = (inputValue, weather, errorMessage) => {
        console.log('Input value in ParentComponent:', inputValue);
        console.log('Weather data:', weather);
        console.log('Error message:', errorMessage);
        setWeather(weather);
        setErrorMessage(errorMessage);
    };

    async function fetchData(cityName) {
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

    console.log();

    let cityName;
    let humidity;
    let windSpeed;
    let windMain;
    let description;
    let weatherTime;
    let feelsLike;
    let currTemp;
    let maxTemp;
    let minTemp;

    if (weather === '') {
        fetchData('rome');
    } else {
        cityName = weather !== null ? weather.city?.name : 'rome';
        humidity = weather !== null ? (weather.list[0]?.main?.humidity ?? 60) : 60;
        windSpeed = weather !== null ? (weather.list[0]?.wind?.speed ?? 19) : 19;
        windMain = weather !== null ? (weather.list[0]?.weather[0]?.main ?? 'hh') : 'hh';
        description = weather !== null ? (weather.list[0]?.weather[0]?.description ?? 'gg') : 'gg';
        weatherTime = weather !== null ? weather.list[0]?.dt_txt : '20';
        feelsLike = weather !== null ? (weather.list[0]?.main?.feels_like ?? 10) : 10;
        currTemp = weather !== null ? (weather.list[0]?.main?.temp ?? 10) : 10;
        maxTemp = weather !== null ? (weather.list[0]?.main?.temp_max ?? 10) : 10;
        minTemp = weather !== null ? (weather.list[0]?.main?.temp_min ?? 10) : 10;
    }


    let Img = '';
    let value = description;

    switch (value) {
        case "overcast clouds":
            Img = `${overcast_clouds}`
            break;
        case "broken clouds":
            Img = `${broken_clouds}`
            break;
        case "clear sky":
            Img = `${clear_sky}`
            break;
        case "light rain":
            Img = `${light_rain}`
            break;
        case "thunderstrom":
            Img = `${thunderstorm}`
            break;
        default:
            Img = `${light_rain}`
            break;
    }

    const styles = {
        container: {
            display: 'flex',
            position: 'relative',
            color: "white",
            /* Setting the size of the upper layer to 80% of the screen size*/

            alignItems: 'center',
            justifyContent: 'space-between',
            //top right bottom left
            margin: '30px 50px 10px 50px',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)',

            /* Adding our borders*/
            borderRadius: '15px',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
            zIndex: '4',
            // backgroundImage: `url(${Img})`, simply import image and use Image name
            // backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?clouds)`,
            backgroundImage: `url(${Img})`,
            // backgroundImage: 'url("../images/rain.gif")',

            backgroundPosition: 'center',
            backgroundRepeat: 'no - repeat',
            backgroundSize: 'cover'
        }
    }

    return (
        <div>
            {(() => {
                if (weather !== null) {
                    return (
                        <div style={styles.container}>
                            <Grid container item xs={12}>
                                <Grid item xs={4} sx={{ border: "0.1px solid white", borderRadius: "15px", backdropFilter: 'blur(5px)' }}>
                                    <Box >
                                        <SearchBar onSearch={handleSearch} useWeatherData={setWeather} errorMessage={setErrorMessage} />
                                    </Box>
                                    <Box>
                                        <Card1 windSpeed={windSpeed} maxTemp={maxTemp} minTemp={minTemp} />
                                    </Box>
                                    <Box>
                                        <Card3 humidity={humidity} />
                                    </Box>
                                    <Box>
                                        <Card4 cityName={cityName} />
                                    </Box>
                                </Grid>
                                <Grid item xs={8} sx={{ backdropFilter: 'blur(1px)', justifyContent: 'space-evenly', backdropFilter: 'blur(1.9px)' }}>
                                    <Container>
                                        <Grid>
                                            <Logo />
                                            <Container sx={{ justifyContent: 'flex-start', textAlign: 'start', paddingTop: '10px', paddingBottom: '20px' }}>
                                                <p>Weather Forcast</p>
                                            </Container>
                                            <Container sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                                <Box fontSize={50} sx={{ textAlign: 'start' }}>
                                                    {windMain},<br />{description}
                                                </Box>
                                            </Container>
                                            <Container sx={{ justifyContent: 'flex-start', textAlign: 'start' }}>
                                                <p>{weatherTime}</p>
                                            </Container>
                                        </Grid>
                                        <Container sx={{ justifyContent: 'flex-start', textAlign: 'start', paddingTop: '10px', paddingBottom: '10px' }}>
                                            Feels like {feelsLike}°C. {description}
                                        </Container>
                                        <Box height={'20px'}></Box>
                                        <Grid container textAlign={'start'} justifyContent={'start'} spacing={2}>
                                            <Container sx={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
                                                <Box fontSize={45}>{currTemp}°C</Box>
                                                <Box width={'20px'}></Box>
                                                <Box paddingTop={'3px'}>A 50 percent chance of rain means there is a 50 percent chance for any one spot in the forecast area to get wet during the forecast period.</Box>
                                            </Container>
                                        </Grid>
                                        <Container sx={{ display: 'flex', justifyContent: 'start' }}>
                                            <Button
                                                sx={{
                                                    color: 'white',
                                                    backgroundColor: 'grey',
                                                    borderRadius: '20px',
                                                    margin: '10px',
                                                    textAlign: 'start',
                                                    // padding: '10px 20px',
                                                }}
                                            >
                                                See Details
                                            </Button>
                                        </Container>
                                        <Container>
                                            {<div style={{ display: 'flex' }}>
                                                {weather.list?.slice(0, 10).map((data, index) => (
                                                    //style={{ border: "1px red solid" }}
                                                    <div key={index} >
                                                        <p>high {data.main.temp_max}°C</p>
                                                        <p>low {data.main.temp_min}°C</p>
                                                        {/* <p>Wind Speed: {data.wind.speed} m/s</p> */}
                                                        <p>humidity {data.main.humidity}%</p>
                                                        {/* <hr /> */}
                                                    </div>
                                                ))}
                                            </div>}
                                        </Container>
                                    </Container>
                                </Grid>
                            </Grid>

                        </div>
                    );
                }
                // else if (weather === null) {
                //     return (
                //         <div>
                //             <h1>{console.log('true is ')}</h1>
                //         </div>
                //     );
                // }
                else {
                    return (
                        <div>
                            {/* <h1>Loading</h1>
                    <h2>{errorMessage}</h2> */}
                            {errorMessage == null ? <h1>Loading</h1> : <ErrorPage errorMessage={errorMessage} />}
                        </div>
                    );
                }
            })()}
        </div>
    );

}