import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { DropDown } from "../components/Form";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../styles/signup.css";
import AccessibilityIcon from "@material-ui/icons/Accessibility";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      frontEnd: "Angular",
      backEnd: "Apache",
      city: "",
      usState: "AL",
      image: "",
      github: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.frontEnd);
    console.log(this.state.backEnd);
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
        usState: this.state.usState,
        image: this.state.image,
        github: this.state.github
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
        <Grid className="signGrid">
          <Typography>
            <h1>
              Set up your profile <AccessibilityIcon />
            </h1>
          </Typography>
          <form>
            <div>
              <Typography>
              <h2><label htmlFor="username">Select A Username</label></h2>
              </Typography>
            </div>
            <div id='box1'>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <br />
            </div>
            <div className="form-group">
              <Typography>
              <h2><label htmlFor="password">Password: </label></h2>
              </Typography>
              <input
                className="form-input"
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <div>
                <Typography>
                <h2><label htmlFor="Email">Email Address: </label></h2>
                </Typography>
              </div>
              <input
                className="form-input"
                placeholder="Email Address"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />

              <br />
              <br />
              <Typography>
              <h2><label htmlFor="github">Github Profile: </label></h2>
              </Typography>
              <input
                className="form-input"
                placeholder="Github Profile"
                type="github"
                name="github"
                value={this.state.github}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <Typography>
              <h2><label htmlFor="image">Image: </label></h2>
              </Typography>
              <input
                className="form-input"
                placeholder="Enter a link to an image for your profile"
                type="image_input"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <div>
                <Typography>
                <h2><label htmlFor="Frontend">Frontend Technology: </label></h2>
                </Typography>
              </div>
              <div>
                <select
                  name="frontEnd"
                  value={this.state.frontEnd}
                  onChange={this.handleChange}
                  className="form-input"
                  id='boxLength'
                >
                  <option value="Angular">Angular</option>
                  <option value="Aurelia">Aurelia</option>
                  <option value="Bootstrap">Bootstrap</option>
                  <option value="CSS">CSS</option>
                  <option value="Dojo">Dojo</option>
                  <option value="Handlebars">Handlebars</option>
                  <option value="Highcharts">Highcharts</option>
                  <option value="HTML">HTML</option>
                  <option value="JQuery">JQuery</option>
                  <option value="Leaflet">Leaflet</option>
                  <option value="React">React</option>
                  <option value="Redux">Redux</option>
                  <option value="Sass">Sass</option>
                  <option value="HTML">HTML</option>
                  <option value="Socket.IO">Socket.IO</option>
                  <option value="Vue">Vue</option>
                  <option value="HTML">HTML</option>
                </select>
              </div>
              <br />
              <div>
                <Typography>
                <h2><label htmlFor="Backend">Backend Technology: </label></h2>
                </Typography>
              </div>
              <div>
                <select
                  name="backEnd"
                  value={this.state.backEnd}
                  onChange={this.handleChange}
                  className="form-input"
                  id='boxLength'
                >
                  <option value="Apache">Apache</option>
                  <option value="Asana">Asana</option>
                  <option value="Docker">Docker</option>
                  <option value="Express">Express</option>
                  <option value="Elastisearch">Elastisearch</option>
                  <option value="Dojo">Dojo</option>
                  <option value="MongoDB">MongoDB</option>
                  <option value="MySQL">MySQL</option>
                  <option value="PostgreSQL">PostgreSQL</option>
                  <option value="PHP">PHP</option>
                  <option value="Python">Python</option>
                  <option value="NGINX">NGINX</option>
                  <option value="Node">Node</option>
                  <option value="SourceTree">SourceTree</option>
                  <option value="Socket.IO">Socket.IO</option>
                  <option value="XAMPP">XAMPP</option>
                </select>
              </div>
              <Typography>
              <h2><label htmlFor="City">City: </label></h2>
              </Typography>
              <input
                className="form-input"
                placeholder="City"
                type="city"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
              <br />
              <Typography>
              <h2><label htmlFor="State">State: </label></h2>
              </Typography>
              <DropDown
                className="form-input"
                type="usState"
                name="usState"
                id='boxLength'
                value={this.state.usState}
                onChange={this.handleChange}
              />
            </div>
            <div />
            <br />
            <button
              className="btn btn-primary col-1 col-mr-auto"
              onClick={this.handleSubmit}
              type="submit"
            >
              JOIN OUR WORLD
            </button>
          </form>
        </Grid>
      );
    }
  }
}

export default Signup;
