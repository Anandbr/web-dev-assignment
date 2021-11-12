import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import ConditionalOutput from "./ConditionalOutput";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";

const Index = () => {
    return(
        <>
        <h1>Practice</h1>
            <ReduxExamples/>
            {/*<TodoList/>*/}
            {/*<ConditionalOutput/>*/}
            {/*<Classes/>*/}
            {/*<Styles/>*/}

        <Link to="/a7/hello">
            Hello
        </Link>
        <Link to="/a7/twitter/home">

            Build
        </Link></>
)
};

export default Index;
