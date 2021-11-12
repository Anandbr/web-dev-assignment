import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
/*import Practice from "./Practice";*/
import Build from "./Build/Build";
import HelloWorld from "./HelloWorld";
import Practice from "./Practice/Practice";
import ExploreComponent from "./Build/ExploreScreen/ExploreComponent";
import HomeScreen from "./Build/HomeScreen/HomeScreen";

const A6 = () => {
    return(
        <BrowserRouter>
            <div className="container">
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/build" exact={true}>
                    <Build/>
                </Route>
                <Route path="/a6/practice" exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a6/twitter/explore" component={ExploreComponent}/>
                <Route path="/a6/twitter/home" component={HomeScreen}/>
            </div>
        </BrowserRouter>
    )
}

export default A6;