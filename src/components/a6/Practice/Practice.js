import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import ConditionalOutput from "./ConditionalOutput";
import {Link} from "react-router-dom";

const Practice = () => {
    return(
        <>
        <h1>Practice</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Classes/>
            <Styles/>
        <Link to="/a6/hello">
            Hello
        </Link>
        <Link to="/a6/build">
            Build
        </Link></>
)
};

export default Practice;
