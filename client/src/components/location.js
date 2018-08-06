import React, { Component } from "react";
import api from "../api/api";
import axios from "axios";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loggedIn: false,
      username: null,
      userInfo: {}
    };
  }
  loadUser = id => {
    api
      .getUser(id)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err));
  };
  loadResults = () => {
    api
      .getAllUsers()
      .then(res => {
        this.setState({ users: res.data });
        console.log(res.data);
      })

      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    axios.get("/user/location").then(response => {
      console.log(response.data);
      if (response.data.user) {
        this.loadUser(response.data.user._id);
        this.loadResults();
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
  };

  render() {
    // console.log("users");
    // console.log(this.state.users);
    console.log(this.state.userInfo);
    return (
      <div>
        {this.state.users.map(user => <pre>{JSON.stringify(user)}</pre>)};
      </div>
    );
  }
}

export default Location;
