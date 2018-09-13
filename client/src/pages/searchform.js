import React, { Component } from "react";
import api from "../api/api";
import ResultsBox from "../components/Results/resultsBox";
import List from "../components/Results/list";
import "../styles/searchform.css";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import "typeface-roboto";

class Search extends Component {
  //VERY IMPORTANT, Sets State
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
      loggedIn: false,
      username: null,
      userInfo: {
        email: null
      },
      search: {
        frontEnd: null,
        // frontEndScore: "",
        backEnd: null,
        // backEndScore: "",
        city: null
      },
      searchResults: []
    };
  }

  getLoggedInUser() {
    axios.get("/user/search").then(response => {
      // console.log("full response: " + response);
      // // console.log("Get user response: ");
      // console.log(response.data);
      // console.log("this is the username: " + response.data.user.username);
      // console.log("this is the frontend info: " + response.data.user.frontEnd);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        api.getUser(response.data.user._id).then(response => {
            console.log(response.data)
          this.setState({
            loggedIn: true,
            userInfo: response.data
          });
        });
      } else {
        this.setState({
          redirectTo: "/user/home"
        });
        return {
          loggedIn: false,
          username: null
        };
      }
    });
  }

  componentDidMount() {
    this.getLoggedInUser();
  }

  //IMPORTANT FOR CHANGES IN FORM INPUTS
  handleChange = event => {
    this.setState({
      search: {
        [event.target.name]: event.target.value
      }
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    api
      .search(this.state.search)
      .then(res => {
        console.log(res.data);

        let apiResults = res.data;
        let results = apiResults.map(apiResult => {
          return {
            //THESE ARE THE KEYS OF THE ARRAYS
            id: apiResult._id,
            username: apiResult.username,
            frontEnd: apiResult.frontEnd,
            backEnd: apiResult.backEnd,
            city: apiResult.city,
            email: apiResult.email,
            github:apiResult.github,
            image:apiResult.image,
            usState:apiResult.usState
          };
        });

        this.setState({ searchResults: results });
        console.log(this.state.searchResults);
      })
      .catch(err => console.log(err));
    event.preventDefault();
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Grid className="searchGrid">
          <div>
            <Typography><h1>Search For A User</h1></Typography>
            <hr />
            <Typography><h2>Frontend Tech</h2></Typography>
              <div>
                  <select
                      name="frontEnd"
                      value={this.state.frontEnd}
                      onChange={this.handleChange}
                      className="form-input"
                  >
                      <option value=''></option>
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

            {/*<label>*/}
            {/*<h4>Front End Skill Level:</h4>*/}
            {/*<select value={this.state.value} onChange={this.handleChange}>*/}
            {/*<option value="1">Beginner</option>*/}
            {/*<option value="2">Novice</option>*/}
            {/*<option value="3">Intermediate</option>*/}
            {/*<option value="4">Advanced</option>*/}
            {/*<option value="5">Expert</option>*/}
            {/*</select>*/}
            {/*</label>*/}
            <Typography><h2>Backend Tech</h2></Typography>
              <div>
                  <select
                      name="backEnd"
                      value={this.state.backEnd}
                      onChange={this.handleChange}
                      className="form-input"
                  >
                      <option value=''></option>
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
            {/*<label>*/}
            {/*<h4>Back End Skill Level:</h4>*/}
            {/*<select value={this.state.value} onChange={this.handleChange}>*/}
            {/*<option value="1">Beginner</option>*/}
            {/*<option value="2">Novice</option>*/}
            {/*<option value="3">Intermediate</option>*/}
            {/*<option value="4">Advanced</option>*/}
            {/*<option value="5">Expert</option>*/}
            {/*</select>*/}
            {/*</label>*/}

            <Typography><h2>City</h2></Typography>
            <label htmlFor="city" />
            <input
              className="form-input"
              type="text"
              id="city"
              name="city"
              placeholder="enter city"
              value={this.state.city}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button onClick={this.handleSubmit} type="submit">
              Search <SearchIcon />
            </button>
            <br />
            <br />
            <hr />
            {/*<div>*/}
            {/*{*/}
            {/*this.state.users.map((user) =>*/}
            {/*<pre>{JSON.stringify(user)}</pre>*/}
            {/*)*/}
            {/*};*/}
            {/*</div>*/}

            <ResultsBox
              username={this.state.userInfo.username}
              results={this.state.searchResults}
              replyTo={this.state.userInfo.email}
            >
              <List />
            </ResultsBox>
          </div>
        </Grid>
      );
    } else {
      return <div> Please log in </div>;
    }
  }
}
export default Search;
