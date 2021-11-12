import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
        <h1>Hello World!</h1>
        <Link to="/a6/Build">
            Build
        </Link> |
        <Link to="/a6/Index">
            Index
        </Link>
            </>

)
};

export default HelloWorld;
