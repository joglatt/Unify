import axios from "axios";
import React, { Component } from "react";
// import { Container } from "./Grid";
import api from "../api/api";
import Input from "../components/Form/Input";
import FormBtn from "../components/Form/FormBtn";
import DeleteBtn from "../components/DeleteBtn";
import '../styles/profile.css';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import BuildIcon from '@material-ui/icons/Build';
import SaveIcon from '@material-ui/icons/Save';
import PersonIcon from '@material-ui/icons/Person';
import Grid from '@material-ui/core/Grid';

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
    api.deleteUser(this.state.userInfo._id,)
      .then(res => this.loadUser())
      .catch(err => console.log(err));
      window.location.reload();
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
      <Grid className='profGrid'>
         <Avatar> <h2>Hi </h2></Avatar> 
         <div className='lineTest'></div>
         <Typography><h1> {this.state.userInfo.username} ! <PersonIcon/></h1> </Typography>  
         <hr/>
        <Typography><h2>Your preferred frontend technology:</h2> 
        <h2 className='dbInfo'>{this.state.userInfo.frontEnd}</h2></Typography>
        <Typography><h2>Your preferred backend technology:</h2> 
        <h2 className='dbInfo'>{this.state.userInfo.backEnd}</h2></Typography>
        <Typography><h2>Your email address:</h2> 
        <h2 className='dbInfo'> {this.state.userInfo.email}</h2></Typography>
        <hr/><br/>
        <button onClick={() => this.handleUpdate(true)}>Make an update<BuildIcon/></button><br/><br/>
        <DeleteBtn onClick={() => this.deleteUser(this.state._id)} />
      </Grid>
    );

  getUpdateform = () =>
    this.state.loggedIn && (
      <Grid className='profGrid'>
        <Typography><h1>Hey {this.state.userInfo.username}, update your profile!</h1></Typography>
        <hr/>
        <form>
          <Typography><h2>Your username:</h2></Typography>
          <Input
            value={this.state.userInfo.username}
            onChange={this.handleInputChange}
            name="username"
            placeholder="Username (required)"
          />
          <br/>
          <Typography><h2>Your preferred frontend technology:</h2></Typography>
          <Input
            value={this.state.userInfo.frontEnd}
            onChange={this.handleInputChange}
            name="frontEnd"
            placeholder="frontEnd (required)"
          />
          <br />
          <Typography><h2>Your preferred backend technology:</h2></Typography>
          <Input
            value={this.state.userInfo.backEnd}
            onChange={this.handleInputChange}
            name="backEnd"
            placeholder="backEnd (required)"
          />
          <br />
          <Typography><h2>Your email address:</h2></Typography>
          <Input
            value={this.state.userInfo.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="email (required)"
          />
          <br /><br />
          <FormBtn
            disabled={!this.state.username}
            onClick={this.handleFormSubmit}
          >
            Keep these changes! <SaveIcon/>
          </FormBtn>
          
        </form>
      </Grid>
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
