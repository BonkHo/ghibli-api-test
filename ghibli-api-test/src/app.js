import React, { Component } from "react";
import Container from "./container.js";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={require("./logo.png")} alt="logo" />
                <Container />
            </React.Fragment>
        );
    }
}

export default App;
