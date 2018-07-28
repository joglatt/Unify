import React from "react";
import PropTypes from 'prop-types';
// import "./DeleteBtn.css";

class DeleteBtn extends React.Component {
  
  render () {
    return (
    <button onClick={this.props.onClick}>
        Delete your profile!
      </button>
    );
  }
}

DeleteBtn.props = {
  onClick: PropTypes.func
}

export default DeleteBtn;
