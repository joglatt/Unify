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
    axios.get("/profile");
  }
  render() {
    return <div>Profile</div>;
  }
}

export default Profile;
