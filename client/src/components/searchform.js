import React, {Component} from "react";
import api from "../api/api";
import ResultsBox from "./Results/resultsBox";
import List from "./Results/list";




class SearchBar extends Component {
    //VERY IMPORTANT
    constructor() {
        super();
        this.state = {
            frontEnd: null,
            // frontEndScore: "",
            backEnd: null,
            // backEndScore: "",
            location: null,
            //THIS IS THE ARRAY OF THE SEARCH RESULTS
            searchResults: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    //IMPORTANT FOR CHANGES IN FORM INPUTS
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleSubmit(event) {
        api.search(this.state)
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
                            backEnd:apiResugitlt.backEnd,
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

            <div>
                <h3>Search For A User</h3>
                <div>
                    <h4>Front End Tech</h4>
                    <label htmlFor="frontEnd"></label>
                </div>
                <div>
                    <input
                        className="form-input"
                        type="text"
                        id="frontEnd"
                        name="frontEnd"
                        placeholder=""
                        value={this.state.frontEnd}
                        onChange={this.handleChange}
                    />

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
                <div>
                    <h4>Back End Tech</h4>
                    <label htmlFor="backEnd"></label>
                </div>
                <div>
                    <input
                        className="form-input"
                        type="text"
                        id="backEnd"
                        name="backEnd"
                        placeholder=""
                        value={this.state.backEnd}
                        onChange={this.handleChange}
                    />

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
                <div>
                    <h4>Location</h4>
                    <label htmlFor="location"></label>
                </div>
                <div>
                    <input
                        className="form-input"
                        type="text"
                        id="location"
                        name="location"
                        placeholder=""
                        value={this.state.location}
                        onChange={this.handleChange}
                    />

                </div>
                <div>
                    <button
                        className="btn btn-primary col-1 col-mr-auto"
                        onClick={this.handleSubmit}
                        type="submit"
                    >
                        Search
                    </button>
                </div>


                {/*<div>*/}
                    {/*{*/}
                        {/*this.state.users.map((user) =>*/}
                            {/*<pre>{JSON.stringify(user)}</pre>*/}
                        {/*)*/}
                    {/*};*/}
                {/*</div>*/}




                <ResultsBox results = {this.state.searchResults}>
                    <List/>
                    <h1>Hello Results</h1>
                </ResultsBox>





            </div>
        );
    }
}

export default SearchBar;