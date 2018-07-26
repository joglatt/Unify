import axios from "axios";
import React, { Component } from "react";
import { Container } from "./Grid";
import api from "../api/api";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      userInfo: {}
    };
  }

  // loadUser = userId => {
  //   console.log('hitting this line');
  //   api
  //     .getUser(userId)
  //     .then(res => this.setState({ userInfo: res.data }))
  //     .catch(err => console.log(err));
  // };

  componentDidMount() {
    // axios.get("/user/profile").then(this.loadUser(response.data.user._id));

    axios.get("/user/profile").then(response => {
      console.log("full response: " + response);
      console.log("Get user response: ");
      console.log(response.data);
      console.log("this is the username: " + response.data.user.username);
      console.log("this is the frontend info: " + response.data.user.frontEnd);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userInfo: response.data
        });
      } else {
        // this.loadUser(response.data.user._id)
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }
  render() {
    console.log("this.state.userInfo")
    console.log(this.state.userInfo)
    return (
      this.state.loggedIn && (
        <Container>
          <div>Profile</div>
          <h1> Hello !</h1>
        </Container>
      )
    );
  }
}

export default Profile;
