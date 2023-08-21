// import { Container, Grid, TextField } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
// import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
// import React from 'react'

// export default function SearchBar() {
//     return (
//         <div>
//             <Container>
//                 <div style={{ height: '50px' }}></div>
//                 <Grid container justifyContent={'space-evenly'}>
//                     <Grid item>
//                         <DeviceThermostatIcon color='white' />
//                     </Grid>
//                     <Grid item>
//                         <TextField sx={{ color: 'white' }} id="standard-basic" variant="standard" FormHelperTextProps={'Hello'} placeholder='City, Country' />
//                     </Grid>
//                     <Grid item>
//                         <SearchIcon color='white' />
//                     </Grid>
//                 </Grid>
//                 <div style={{ height: '40px' }}></div>
//             </Container>
//         </div>
//     )
// }

import { Button, Container, Grid, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import React from 'react';

export default function SearchBar() {
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
                        />
                    </Grid>
                    <Grid item>
                        <Button>{<SearchIcon style={{ color: 'white' }} />}</Button>
                    </Grid>
                </Grid>
                <div style={{ height: '40px' }}></div>
            </Container>
        </div>
    );
}

