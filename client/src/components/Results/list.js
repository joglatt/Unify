import React from "react";
import PropTypes from "prop-types";
import ListItem from "./listItem.js";

class List extends React.Component {
    render () {
        const { results } = this.props
        return (
            <div>
                <ul>
                    {results.map(result =>
                        <ListItem  key={result.id} data={result}/>
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