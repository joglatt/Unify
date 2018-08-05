import React from "react";
// import "./ResultsBox.css";
import List from "./list";


class ResultsBox extends React.Component {
    render() {
        const {results, replyTo} = this.props;
        console.log(replyTo);

        return (
            <div>
                <List results={results} replyTo={replyTo}/>
            </div>
        );

    }
}


export default ResultsBox;