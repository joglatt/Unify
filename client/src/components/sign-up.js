import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      frontEnd: "",
      backEnd: "",
      location: "",
      confirmPassword: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        frontEnd: this.state.frontEnd,
        backEnd: this.state.backEnd,
        location: this.state.location
      })
      .then(response => {
        console.log(response);
        this.setState({
          //redirect to login page
          redirectTo: "/user/login"
        });
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirectTo: "/user/login"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="SignupForm">
          <h4>Sign up</h4>
          <form>
            <div>
              <div>
                <label htmlFor="username">Username</label>
              </div>
              <div>
                <input
                  className="form-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div>
                <label htmlFor="password">Password: </label>
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Email Address: </label>
              </div>
              <div>
                <input
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Front End Technology: </label>
              </div>
              <div>
                <input
                  placeholder="Front End"
                  type="frontEnd"
                  name="frontEnd"
                  value={this.state.frontEnd}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Back End Technology: </label>
              </div>
              <div>
                <input
                  placeholder="Back End Tech"
                  type="backEnd"
                  name="backEnd"
                  value={this.state.backEnd}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Location: </label>
              </div>
              <div>
                <input
                  placeholder="Location"
                  type="location"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <div />
              <Button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                Sign up
              </Button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Signup;
