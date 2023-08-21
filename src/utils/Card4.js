import { Container } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

export default function Card4(props) {
    return (
        <div>
            <Container sx={{ padding: "10px 0 10px 0", justifyContent: 'flex-start', textAlign: 'start' }}>
                <div>
                    <h4>{props.cityName}</h4>
                    {/* <h4>Oklahoma City</h4> */}
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa asperiores recusandae sapiente optio qui ducimus ipsum repellat ad? Ducimus explicabo itaque repudiandae, incidunt necessitatibus sequi. Dolor, aspernatur. Enim, doloribus porro.</p>
            </Container>
        </div>
    )
}

Card4.propTypes = {
    cityName: PropTypes.string
};

Card4.defaultProps = {
    cityName: 'null'
};
