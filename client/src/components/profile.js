import axios from "axios";
import React, { Component } from "react";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };
  }
  componentDidMount() {
    axios.get("/user/profile").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  
  }
  render() {
    return ( 
      this.state.loggedIn && <div>Profile</div>  
    );
  }
}

export default Profile;
