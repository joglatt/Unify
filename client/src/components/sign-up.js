import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { DropDown } from "./Form";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      frontEnd: "",
      backEnd: "",
      city: "",
      usState: "AL",
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
        city: this.state.city,
        usState: this.state.usState
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            //redirect to login page
            redirectTo: "/user/login"
          });
          console.log(this.state.redirectTo);
          alert("successful signup");
        }
      })
      .catch(error => {
        alert("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="SignupForm">
          <Typography>
            <h4>Sign up</h4>
          </Typography>
          <form>
            <div>
              <div>
                <Typography>
                  <label htmlFor="username">Username</label>
                </Typography>
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
            <br />
            <div className="form-group">
              <div>
                <Typography>
                  <label htmlFor="password">Password: </label>
                </Typography>
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
              <br />
              <div>
                <Typography>
                  <label htmlFor="Email">Email Address: </label>
                </Typography>
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
              <br />
              <div>
                <Typography>
                  <label htmlFor="Frontend">Front End Technology: </label>
                </Typography>
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
              <br />
              <div>
                <Typography>
                  <label htmlFor="Backend">Back End Technology: </label>
                </Typography>
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
              <br />
              <div>
                <Typography>
                  <label htmlFor="City">City: </label>
                </Typography>
              </div>
              <div>
                <input
                  placeholder="City"
                  type="city"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              <div>
                <Typography>
                  <label htmlFor="State">State: </label>
                </Typography>
              </div>
              <div>
                <DropDown
                  type="usState"
                  name="usState"
                  value={this.state.usState}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <div />
              <br />
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Signup;
