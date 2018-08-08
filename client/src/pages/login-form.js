import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "../styles/login.css";
import FingerprintIcon from '@material-ui/icons/Fingerprint';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/user/profile'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Grid className='logGrid'>
                    <Typography> <h1>Login <FingerprintIcon/></h1> </Typography>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <Typography> <h2><label className="form-label" htmlFor="username">Username</label></h2></Typography>
                        </div>
                        <input className="form-input"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <br /> <br/>
                        <div className="form-group">
                            <Typography><h2><label className="form-label" htmlFor="password">Password: </label></h2></Typography>
                            <input className="form-input"
                                placeholder="Password"
                                type="password"
                                name="password"
                                id='loginPass'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <br />
                        <div className="form-group ">
                            <button
                                onClick={this.handleSubmit}
                                type="submit">ENTER OUR CHAMBERS</button>
                        </div>
                    </form>
                </Grid>
            )
        }
    }
}

export default LoginForm
