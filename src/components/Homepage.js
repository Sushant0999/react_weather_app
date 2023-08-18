import { Box, Button, Container, Grid } from '@mui/material'

import React from 'react'
import SearchBar from '../utils/SearchBar'
import Card1 from '../utils/Card1'
import Card4 from '../utils/Card4'
import Card3 from '../utils/Card3'
// import Img from "../images/grey-cloud.jpg"
import Logo from '../utils/Logo'


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
        // padding : '5px',

        /*the alpha value controls the transparency*/
        // background: 'rgba(255, 255, 255, 0.3)',


        /*Adding the shadow*/
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)',

        /* Adding our borders*/
        borderRadius: '30px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        zIndex: '4',
        // backgroundImage: `url(${Img})`, simply import image and use Image name
        backgroundImage: `url(https://source.unsplash.com/random/1920x1080/?clouds)`,

        backgroundPosition: 'center',
        backgroundRepeat: 'no - repeat',
        backgroundSize: 'cover'
    }
}


function dateTime() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    console.log(dateTime);
    return dateTime;
}


export default function Homepage() {
    return (
        <div style={styles.container}>
            <Grid container xs={12}>
                <Grid sx={{ border: "0.1px solid white", borderRadius: "30px", backdropFilter: 'blur(5px)' }} xs={4}>
                    <Box >
                        <SearchBar />
                    </Box>
                    <Box>
                        <Card1 />
                    </Box>
                    <Box>
                        <Card3 />
                    </Box>
                    <Box>
                        <Card4 />
                    </Box>
                </Grid>
                <Grid xs={8} sx={{ backdropFilter: 'blur(1px)', justifyContent: 'space-evenly' }}>
                    <Container>
                        <Grid xs={12}>
                            <Logo />
                            <Container sx={{ justifyContent: 'flex-start', textAlign: 'start' }}>
                                <p>Weather Forcast</p>
                            </Container>
                            <Container>
                                <Box fontSize={50} sx={{ textAlign: 'start' }}>
                                    Strom<br />with heavy rain
                                </Box>
                            </Container>
                            <Container sx={{ justifyContent: 'flex-start', textAlign: 'start' }}>
                                <p>{dateTime()}</p>
                            </Container>
                        </Grid>
                        <Container sx={{ justifyContent: 'flex-start', textAlign: 'start' }}>
                            Feels like 22°C. Scattered clouds. Moderate breeze
                        </Container>
                        <Box height={'20px'}></Box>
                        <Grid textAlign={'start'} justifyContent={'start'} spacing={2}>
                            <Container sx={{ display: 'flex', flexDirection: 'row', padding: '0' }}>
                                <Box fontSize={45}>10*</Box>
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
                                    padding: '10px 20px',
                                }}
                            >
                                See Details
                            </Button>
                        </Container>
                    </Container>
                </Grid>
            </Grid>
        </div >
    )
}
