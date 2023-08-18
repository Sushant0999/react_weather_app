import { Box, Container, Grid } from '@mui/material'
import React from 'react'

export default function Card1() {
    return (
        <div>
            <Container>
                <Grid container xs={12} alignItems="center">
                    <Grid xs={6}>
                        <Box><h1>20</h1></Box>
                        <Box><h4>10</h4></Box>
                    </Grid>
                    <Grid xs={6}>
                        <Box><h1>20</h1></Box>
                        <Box><h5>Winds</h5></Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
