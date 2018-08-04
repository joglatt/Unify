import React, { Component } from "react";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./home.css";
import DoneIcon from "@material-ui/icons/Done";
import MyMapComponent from "./map.js";
import api from "../api/api";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            markers: []
        };
    }
    loadResults = () => {
        api
            .getAllUsers()
            .then(res => {
                let result = [];
                res.data.forEach(user => {
                    let newMarker = {
                        long: user.longitude,
                        lat: user.latitude
                    };
                    result.push(newMarker);
                });
                console.log(result);
                this.setState({ markers: result });
                console.log(res.data);
            })

            .catch(err => console.log(err));
    };



    componentDidMount() {
        this.loadResults();
    }
    render() {
        return (
            <Grid className="homeGrid">
                <Typography>
                    <h1>WFelcome to Unify.</h1>
                    <h2>
                        Where coders connect <DoneIcon />
                    </h2>
                </Typography>
                <hr />
                <br />
                <MyMapComponent markers={this.state.markers} isMarkerShown />
            </Grid>
        );
    }
}

export default Home;