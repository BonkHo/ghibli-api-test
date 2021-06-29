import React, { Component } from "react";
import Api from "./api.js";

let request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

class Card extends Component {
    render() {
        return (
            <div className="card">
                <Api />
            </div>
        );
    }
}

export default Card;
