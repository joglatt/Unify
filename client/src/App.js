import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "./pages/sign-up";
import LoginForm from "./pages/login-form";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Profile from "./pages/profile";
import AllUsers from "./components/allusers";
import Search from "./pages/searchform.js"
import ContactButton from "./components/Email/email";
// import { ResultsBox, List, ListItem} from "./components/Results";


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
          exact
          path="/user/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route exact path="/user/signup" render={() => <Signup />} />

        <Route exact path="/user/profile" render={() => <Profile />} />

        <Route exact path="/allusers" render={() => <AllUsers />} />

        <Route exact path="/user/search" render={() => <Search/>} />

        <Route exact path="/contact" render={() => <ContactButton/>} />

      </div>
    );
  }
}

export default App;
