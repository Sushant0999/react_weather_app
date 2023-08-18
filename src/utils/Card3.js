import { Container } from '@mui/material'
import React from 'react'
import ReactSpeedometer from 'react-d3-speedometer'

export default function Card3() {
    return (
        <div>
            <Container sx={{ padding: "20px 0 20px 0" }}>
                <ReactSpeedometer height={160} value={200} />
            </Container>
        </div>
    )
}
