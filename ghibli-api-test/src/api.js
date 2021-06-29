import React, { Component } from "react";

class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        const url = "https://ghibliapi.herokuapp.com/films";
        fetch(url)
            .then((result) => result.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
    }

    render() {
        let { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <React.Fragment>
                    {items.map((item) => (
                        <div className="card">
                            <h1 key={item.id}>{item.title}</h1>
                            <p key={item.id}>{item.description}</p>
                        </div>
                    ))}
                </React.Fragment>
            );
        }
    }
}

export default Api;
