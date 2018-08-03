import React from "react";
// import "./ResultsBox.css";
import List from "./list";


class ResultsBox extends React.Component {
    render() {
        const {results} = this.props
        console.log(results)

        return (
            <div>
                <List results={results}/>
            </div>
        );

    }
}


export default ResultsBox;