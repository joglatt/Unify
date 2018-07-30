import React from "react";
import PropTypes from 'prop-types';
import "./DeleteBtn.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class DeleteBtn extends React.Component {
  
  render () {
    return (
    <button className='dltBtn' onClick={this.props.onClick}>
       <span>Delete your profile! <DeleteForeverIcon/></span>
      </button>
    );
  }
}

DeleteBtn.props = {
  onClick: PropTypes.func,
}

export default DeleteBtn;
