import React from "react";
import PropTypes from 'prop-types';

class Input extends React.Component {

  render () {

    return (
      <div className="form-group">
        <input className="form-control" {...this.props} />
      </div>
    )
  }
}

Input.props = {
  name: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input