import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ContactButton from "../Email/email";
import './listItem.css';

// import Button from "../Button/Button";

class ListItem extends React.Component {
  render() {
    const { data, replyTo } = this.props;
    console.log(data, replyTo);
    return (
      <li>
        <div>
          <Typography>
            <img src={data.image} alt="profile" />
          </Typography>
          <Typography>
            <h2>Name: {data.username}</h2>
          </Typography>
          <Typography>
            <h3>Email: {data.email}</h3>
          </Typography>
          <Typography>
            <h3>Frontend: {data.frontEnd}</h3>
          </Typography>
          <Typography>
            <h3>Backend: {data.backEnd}</h3>
          </Typography>
          <Typography>
            <h3>
              Location: {data.city},{data.usState}
            </h3>
          </Typography>
          <Typography>
            <div>
              Github Profile:<a href={data.github}>{data.github}</a>
            </div>
          </Typography>
          <ContactButton data={data} replyTo={replyTo} to={data.email} />
        </div>
      </li>
    );
  }
}

export default ListItem;
