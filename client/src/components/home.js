import React, { Component } from 'react';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './home.css'
import People from '@material-ui/icons/People';

class Home extends Component {
    render() {
        return (
            <Grid className='homeGrid'> 
                <Typography>
                    <h1>Welcome to Unify!</h1>
                    <h2>Where coders connect <People/></h2>
                </Typography>
            </Grid>
        );
    }
}

export default Home;