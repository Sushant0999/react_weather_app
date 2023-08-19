import { Container } from '@mui/material'
import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

export default function Card3(humidity) {
    console.log(humidity)
    return (
        <div>
            <Container sx={{ padding: "20px 0 20px 0" }}>
                <ReactSpeedometer height={200} value={humidity} maxValue={100} />
                <h3>Humidity</h3>
            </Container>
        </div>
    )
}
