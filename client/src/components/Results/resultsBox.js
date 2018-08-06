import React from "react";
// import "./ResultsBox.css";
import List from "./list";

class ResultsBox extends React.Component {
  render() {
    const { results, replyTo, username } = this.props;
    console.log(username);

    return (
      <div>
        <List username={username} results={results} replyTo={replyTo} />
      </div>
    );
  }
}

export default ResultsBox;
