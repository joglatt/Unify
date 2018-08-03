import React, { Component } from "react";
import api from "../api/api";
import ResultsBox from "./Results/resultsBox";
import List from "./Results/list";
import './searchform.css'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';



class SearchBar extends Component {
    //VERY IMPORTANT
    constructor() {
        super();
        this.state = {
            search: {
                frontEnd: null,
                // frontEndScore: "",
                backEnd: null,
                // backEndScore: "",
                location: null,
            },
            searchResults: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    //IMPORTANT FOR CHANGES IN FORM INPUTS
    handleChange(event) {
        this.setState({
            search: {
                [event.target.name]: event.target.value
            },
        })
    };

    handleSubmit(event) {
        api.search(this.state.search)
            .then(
                res => {
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
                }
            )
            .catch(err => console.log(err));
        event.preventDefault();

    };


    render() {
        return (

            <Grid className='searchGrid'>
                <div>
                    <Typography><h1>Search For A User</h1>
                    <hr/>
                        <h2>Frontend Tech</h2></Typography>
                    <label htmlFor="frontEnd"></label>
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
                    <Typography>   <h2>Backend Tech</h2></Typography>
                    <label htmlFor="backEnd"></label>
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

                    <Typography> <h2>Location</h2></Typography>
                    <label htmlFor="location"></label>
                        <input
                            className="form-input"
                            type="text"
                            id="location"
                            name="location"
                            placeholder="enter location"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    <br/><br/>
                        <button
                            onClick={this.handleSubmit}
                            type="submit"
                        >
                            Search <SearchIcon/>
                    </button>
                    <br /><br />
                    <hr />
                    {/*<div>*/}
                    {/*{*/}
                    {/*this.state.users.map((user) =>*/}
                    {/*<pre>{JSON.stringify(user)}</pre>*/}
                    {/*)*/}
                    {/*};*/}
                    {/*</div>*/}
                    <ResultsBox results={this.state.searchResults}>
                        <List />
                        <h1>Hello Results</h1>
                    </ResultsBox>
                </div>
            </Grid>
        );
    }
}

export default SearchBar;