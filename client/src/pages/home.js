import React, { Component } from "react";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../styles/home.css";
import DoneIcon from "@material-ui/icons/Done";
import MyMapComponent from "../components/map.js";
import api from "../api/api";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            username: user.username,
            frontEnd: user.frontEnd,
            backEnd: user.backEnd,
            long: user.longitude,
            lat: user.latitude
          };
          result.push(newMarker);
        });
        // console.log(result);
        this.setState({ markers: result });
        // console.log(res.data);
      })

      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadResults();
  }
  render() {
    return (

      <Grid className="homeGrid">
        <Typography variant='display1' align='center' gutterBottom>Welcome to Unify. Where coders connect.</Typography>
          <Typography variant='body2' align='center' gutterBottom Wrap>
              {`
          Unify is the place where you can find coders to collaborate on whatever projects you are working on. Every "Unifyer" is
          registered with their preferred front and back end technologies as well as their location to make searching a breeze. Join up and
          start collaborating now!
        `}
          </Typography>
          <Typography variant='display1' align='center' gutterBottom>Here are all our active coders all over the country!</Typography>

        <hr />
        <br />
        <MyMapComponent markers={this.state.markers}  />
      </Grid>


    );
  }
}

export default Home;
