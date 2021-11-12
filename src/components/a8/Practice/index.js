import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import ConditionalOutput from "./ConditionalOutput";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples/index";

const Index = () => {
    return(
        <>
        <h1>Practice</h1>
            <ReduxExamples/>
            <APIExamples/>
            {/*<TodoList/>*/}
            {/*<ConditionalOutput/>*/}
            {/*<Classes/>*/}
            {/*<Styles/>*/}

        <Link to="/a8/hello">
            Hello
        </Link>
        <Link to="/a8/twitter/home">

            Build
        </Link></>
)
};

export default Index;
