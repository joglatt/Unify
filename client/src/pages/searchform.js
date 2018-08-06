import React, { Component } from "react";
import api from "../api/api";
import ResultsBox from "../components/Results/resultsBox";
import List from "../components/Results/list";
import "../styles/searchform.css";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
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
        location: null
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
            location: apiResult.location,
            email: apiResult.email
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
            <h1>Search For A User</h1>
            <hr />
            <h2>Frontend Tech</h2>
            <label htmlFor="frontEnd" />
            <input
              className="form-input"
              type="text"
              id="frontEnd"
              name="frontEnd"
              placeholder="enter tech"
              value={this.state.frontEnd}
              onChange={this.handleChange}
            />

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
            <h2>Backend Tech</h2>
            <label htmlFor="backEnd" />
            <input
              className="form-input"
              type="text"
              id="backEnd"
              name="backEnd"
              placeholder="enter tech"
              value={this.state.backEnd}
              onChange={this.handleChange}
            />
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

            <h2>Location</h2>
            <label htmlFor="location" />
            <input
              className="form-input"
              type="text"
              id="location"
              name="location"
              placeholder="enter location"
              value={this.state.location}
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
