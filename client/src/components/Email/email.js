import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import api from "../../api/api";

class ContactButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            replyTo: props.replyTo,
            to: props.to,
            subject: "You've received a new message from Unify",
            message: ""

        };
    };

    //Handles the open and closing of the modal "Contact" button.
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    //Handles Input change.
    handleChange = (event) => {
        this.setState({
                message: event.target.value
        });

        console.log(this.state.message);
    };

    //This submits the passed in requirements for the email.
    handleSubmit = () => {
        let messageContents = {
            replyTo: this.state.replyTo,
            to: this.state.to,
            subject: this.state.subject,
            message: this.state.message
        };
        console.log("About to email -> ", messageContents);
    //HandleSubmit sets up an ajax call to the API function for emailing.
        api.emailPeople(messageContents);
        this.handleClose();
        console.log(messageContents);
    };




    render() {

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Contact</Button>
                {/*<a onClick={this.handleClickOpen}>Here Is A Link</a>*/}
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