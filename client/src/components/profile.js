import axios from "axios";
import React, { Component } from "react";
import { Container } from "./Grid";
import api from "../api/api";
import Input from "./Form/Input";
import FormBtn from "./Form/FormBtn";
import DeleteBtn from "./DeleteBtn";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      userInfo: {},
      isUpdate: false
    };
  }

  deleteUser = id => {
    api.deleteUser(id)
      .then(res => this.loadUser())
      .catch(err => console.log(err));
  };

  handleUpdate(isUpdate) {
    this.setState({ isUpdate: isUpdate });
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    const updatedUser = { ...this.state.userInfo };
    updatedUser[name] = value;

    this.setState({
      userInfo: updatedUser
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    api
      .patchUser(this.state.userInfo._id, this.state.userInfo)
      .then(res => this.setState({ isUpdate: false }))
      .catch(err => console.log(err));
  };

  loadUser = id => {
    api
      .getUser(id)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios.get("/user/profile").then(response => {
      console.log("full response: " + response);
      console.log("Get user response: ");
      console.log(response.data);
      console.log("this is the username: " + response.data.user.username);
      console.log("this is the frontend info: " + response.data.user.frontEnd);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.loadUser(response.data.user._id);
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userInfo: response.data
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

  getReadOnly = () =>
    this.state.loggedIn && (
      <Container>
        <h1> Hello {this.state.userInfo.username}!</h1>
        <h2>{this.state.userInfo.frontEnd}</h2>
        <h2>{this.state.userInfo.backEnd}</h2>
        <h2>{this.state.userInfo.email}</h2>
        <button onClick={() => this.handleUpdate(true)}>Update</button>
      </Container>
    );

  getUpdateform = () =>
    this.state.loggedIn && (
      <Container>
        <form>
          <Input
            value={this.state.userInfo.username}
            onChange={this.handleInputChange}
            name="username"
            placeholder="Username (required)"
          />
          <Input
            value={this.state.userInfo.backEnd}
            onChange={this.handleInputChange}
            name="backEnd"
            placeholder="backEnd (required)"
          />
          <Input
            value={this.state.userInfo.frontEnd}
            onChange={this.handleInputChange}
            name="frontEnd"
            placeholder="frontEnd (required)"
          />
          <Input
            value={this.state.userInfo.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="email (required)"
          />
          <FormBtn
            disabled={!this.state.username}
            onClick={this.handleFormSubmit}
          >
            Update Your Profile!
          </FormBtn>
          
          <DeleteBtn onClick={() => this.deleteUser(this.state._id)} />
        </form>
      </Container>
    );

  render() {
    // return (
    //   this.state.loggedIn && (
    //     <Container>
    //       <div>Profile</div>
    //       <h1> Hello {username}!</h1>
    //       <h2>
    //         How does it feel to work with {frontEnd} , your favorite front end
    //         tech?
    //       </h2>
    //     </Container>
    //   )
    // );

    if (this.state.isUpdate) return this.getUpdateform();
    else return this.getReadOnly();
  }
}

export default Profile;
