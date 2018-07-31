import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";
import axios from "axios";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    Button: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Navigation extends React.Component {
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

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <AppBar/>
                <Toolbar/>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >

                    <MenuItem onClick={this.handleClose} component={Link} to={"/user/home"}>Home</MenuItem>
                    <MenuItem onClick={this.handleClose} component={Link} to={"/allusers"}>Search</MenuItem>
                    <MenuItem onClick={this.handleClose} component={Link} to={"#"}>Logout</MenuItem>
                    <MenuItem onClick={this.handleClose} component={Link} to={"/user/login"}>Login</MenuItem>
                    <MenuItem onClick={this.handleClose} component={Link} to={"/user/signup"}>Sign Up</MenuItem>
                    <MenuItem onClick={this.handleClose} component={Link} to={"/allusers"}>Search</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
                <Typography variant="title" color="inherit">
                    Unify
                </Typography>
                <Toolbar/>
                <AppBar/>
            </div>

        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
