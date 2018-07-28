import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Profile from "./components/profile";
import AllUsers from "./components/allusers";
import SearchBar from "./components/searchform.js"


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user").then(response => {
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
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* Routes to different components */}
        <Route exact path="/" component={Home} />
        <Route exact path="/user/home" component={Home} />
        <Route
          exact path="/user/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
          <Route exact path="/user/signup" render={() => <Signup />} />

          <Route exact path="/user/profile" render={() => <Profile />} />

          <Route exact path="/allusers" render={() => <AllUsers/> } />

          <Route exact path="/usersearch" render={() => <SearchBar/> } />
      </div>
    );
  }
}

export default App;
