import React, { Component } from "react";
import PropTypes from 'prop-types';
import { DialogTitle,withMobileDialog,DialogContent,DialogContentText, Toolbar, Typography, Button, Dialog, DialogActions, }from '@material-ui/core/';
import './searchform.css' 
import { Link } from "react-router-dom";

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
          frontEnd: "",
          frontEndScore: "",
          backEnd: "",
          backEndScore: "",
          location: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        console.log("Search Submitted")
        event.preventDefault();
      }
    
      render () {
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
                <label>
                <h4>Front End Skill Level:</h4>
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">Beginner</option>
                    <option value="2">Novice</option>
                    <option value="3">Intermediate</option>
                    <option value="4">Advanced</option>
                    <option value="5">Expert</option>
                    </select>
                 </label>
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
                    placeholder="Backend Tech"
                    value={this.state.backEnd}
                    onChange={this.handleChange}
                />
                </div>
                <label>
                <h4>Back End Skill Level:</h4>
                    <select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">Beginner</option>
                    <option value="2">Novice</option>
                    <option value="3">Intermediate</option>
                    <option value="4">Advanced</option>
                    <option value="5">Expert</option>
                    </select>
                 </label>
                 <div>
                 <button
                    className="btn btn-primary col-1 col-mr-auto"
                    
                    onClick={this.handleSubmit}
                    type="submit"
                    >
                    Search
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;