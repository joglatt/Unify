import React from "react";
import PropTypes from "prop-types";
// import Button from "../Button/Button";

class ListItem extends React.Component {
    render () {
        const {data} = this.props
        return (
            <li>
                <div>
                    <div>

                        <h3>{data.username}</h3>
                        <div>{data.email}</div>
                        <p>{data.frontEnd}</p>
                        <p>{data.backEnd}</p>
                        <p>{data.location}</p>
                        {/*{handleSaveArticle && <Button text="Save" handleButton={handleSaveArticle}/>}*/}
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