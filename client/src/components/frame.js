import React, { Component } from "react";
import '../styles/frame.css';

const imageStyle = {
  width: 275,
  height: 275,
  padding: 10,
  border: "5px solid black"
};
class Frame extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='profImage'>
        <img
          style={imageStyle}
          src={data.image}
          alt={data.username}
          id={data._id}
        />
      </div>
    );
  }
}

export default Frame;
