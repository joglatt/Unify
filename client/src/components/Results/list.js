import React from "react";
import PropTypes from "prop-types";
import ListItem from "./listItem.js";
import Typography from '@material-ui/core/Typography';

class List extends React.Component {
    render () {
        const { results, replyTo } = this.props;
        return (
            <div>
                <Typography><h2>Your search results!</h2></Typography>
                <ul>
                    {results.map(result =>
                        <ListItem  key={result.id} data={result} replyTo={replyTo} />
                    )}
                </ul>
            </div>
        )
    }
}

// List.props = {
//     children: PropTypes.node
// }

export default List;