import React from "react";
import Card from "./card.js";

const Container = () => {
    return (
        <div className="container">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

// class Container extends Component {
//     function createContainer() {
//         return (
//             <div className="container">
//                 <Card />
//             </div>
//         );
//     }
// }

export default Container;
