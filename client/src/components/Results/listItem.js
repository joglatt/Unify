import React from "react";
import PropTypes from "prop-types";
// import Button from "../Button/Button";

class ListItem extends React.Component {
    render () {
        const {data} = this.props
        console.log(data)
        return (
            <li>
                <div>
                    <div>

                        <h3>Name: {data.username}</h3>
                        <div>Email: {data.email}</div>
                        <p>Frontend: {data.frontEnd}</p>
                        <p>Backend: {data.backEnd}</p>
                        <p>Location: {data.location}</p>
                        <button>Contact</button>

                    </div>
                </div>
            </li>
        )
    }
}




ListItem.props = {
    children: PropTypes.node
}

export default ListItem;