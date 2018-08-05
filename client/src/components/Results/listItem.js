import React from "react";
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import ContactButton from "../Email/email";

// import Button from "../Button/Button";



class ListItem extends React.Component {
    render () {
        const {data} = this.props;
        console.log(data)
        return (
            <li>
                <div>
                        <Typography><h2>Name: {data.username}</h2></Typography>
                        <Typography><h3>Email: {data.email}</h3></Typography>
                        <Typography><h3>Frontend: {data.frontEnd}</h3></Typography>
                        <Typography><h3>Backend: {data.backEnd}</h3></Typography>
                        <Typography><h3>Location: {data.location}</h3></Typography>
                        <ContactButton data = { data } />

                </div>
            </li>
        )
    }
}




ListItem.props = {
    children: PropTypes.node
}

export default ListItem;