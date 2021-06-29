import React from "react";
import Card from "./card.js";
import Api from "./api.js";

const Container = () => {
    return (
        <div className="container">
            <Api />
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
