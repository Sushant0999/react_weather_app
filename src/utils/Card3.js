import { Container } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';
import ReactSpeedometer from 'react-d3-speedometer'

export default function Card3(props) {

    return (
        <div>
            <Container sx={{ padding: "20px 0 20px 0" }}>
                <ReactSpeedometer height={200} value={props.humidity} maxValue={100} />
                <h3>Humidity</h3>
            </Container>
        </div>
    )
}

Card3.prototype = {
    humidity: PropTypes.number
};

Card3.defaultProps = {
    humidity : 0
};
