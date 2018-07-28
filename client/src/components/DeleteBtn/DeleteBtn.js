import React from "react";
import PropTypes from 'prop-types';
import "./DeleteBtn.css";

class DeleteBtn extends React.Component {
  
  render () {
    return (
    <button className='dltBtn' onClick={this.props.onClick}>
       <span>Delete your profile!</span>
      </button>
    );
  }
}

DeleteBtn.props = {
  onClick: PropTypes.func,
}

export default DeleteBtn;
