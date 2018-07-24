import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .get("/user/logout")
      .then(response => {
        debugger;
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
          window.location=response.data.location
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <header className="navbar App-header" id="nav-container">
          <div className="col-4">
            {loggedIn ? (
              <section className="navbar-section">
                <Link
                  to="#"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">logout</span>
                </Link>
              </section>
            ) : (
              <section className="navbar-section">
                <Link to="/user" className="btn btn-link text-secondary">
                  <span className="text-secondary">home</span>
                </Link>
                <Link to="/user/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">login</span>
                </Link>
                <Link to="/user/signup" className="btn btn-link">
                  <span className="text-secondary">sign up</span>
                </Link>
              </section>
            )}
          </div>
          <div className="col-4 col-mr-auto">
            <div id="top-filler" />
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
