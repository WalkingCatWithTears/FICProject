import React from "react";
import ReactDOM from "react-dom";
// import NameOfTheService from "./NameOfTheService.jsx";
import RatingsAndViews from "./Ratings & Reviews/RatingsAndViews.js";

const App = () => {
    return (
        <>
        <RatingsAndViews />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("name-of-the-service"));
