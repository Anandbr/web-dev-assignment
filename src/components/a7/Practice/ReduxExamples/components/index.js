import React from "react";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import {Provider} from "react-redux";
import hello from "../reducers/hello";
import Todos from "./Todos"
import todos from "../reducers/todos";
import {createStore, combineReducers} from "redux";
const reducers = combineReducers({hello, todos})
const store = createStore(reducers);
const ReduxExamples = () => {
    return(
        <Provider store={store}>
        <div>
            <h2>Redux Examples</h2>
            <Todos/>
            <HelloReduxExampleComponent/>
        </div>
        </Provider>
    );
};
export default ReduxExamples;
