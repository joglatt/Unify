import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from "../../api/api";
import PropTypes from "prop-types";

class ContactButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            messageContents: {
                replyTo: props.email,
                to: props.to,
                subject: "You've received a new message from Unify",
                message: null
            }
        };
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange(event) {
        this.setState({
            messageContents: {
                message: event.target.value
            }
        })
    }


    //This is not complete, you need to:
    // 0. Write a function to handle changes to the "text" field, this function should store the value of the input in the state
    // 1. Puemailll the email address of the person to whom your sending the email
    // 2. pull the email address of the person from whom the email is coming from
    // 3. Explicitly pull the message from the same place you stored the "Text" field in the state
    // 4. Put all of the above into an object using the keys to, replyTo, text
    handleSubmit = (event) => {
        api.emailPeople(this.state.messageContents)
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>Contact</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Connect</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To reach this Unify Coder please fill out this message form. They will get it right
                            into their inbox!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="message"
                            label="message"
                            type="string"
                            fullWidth
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Send
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ContactButton;