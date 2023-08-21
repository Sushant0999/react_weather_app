import { Box, Container, Grid } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

export default function Card1(props) {
    return (
        <div>
            <Container>
                <Grid container xs={12} alignItems="center">
                    <Grid xs={6}>
                        <Box><h1>{props.maxTemp}° max</h1></Box>
                        <Box><h4>{props.minTemp}° min</h4></Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box><h1>{props.windSpeed} m/s</h1></Box>
                        <Box><h5>Winds</h5></Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

Card1.prototype = {
    windSpeed: PropTypes.number,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number
};


Card1.defaultProps = {
    windSpeed: 0,
    maxTemp: 100,
    minTemp: 0,
};