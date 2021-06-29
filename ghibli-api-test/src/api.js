import React, { Component } from "react";

class Api extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
        const url = "https://ghibliapi.herokuapp.com/films";
        fetch(url).then((result)) => result.json())
    }
}
export default Api;
