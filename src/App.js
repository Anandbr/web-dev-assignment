import './vendors/bootstrap/bootstrap.min.css'
import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
// import Build from "./components/a6/Build/Build";
import Build from "./components/a6/Build/Build"
import Practice from "./components/a6/Practice/Practice";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreComponent from "./components/a6/Build/ExploreScreen/ExploreComponent";

// import HelloWorld from "./components/a6/HelloWorld";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Link to="/a6/twitter/home">Assignment6 - Twitter Home</Link>
          <Link to="/a6/twitter/explore">Assignment6 - Twitter Explore        </Link>
          <Link to="/a6/practice">Assignment6 - Practice</Link>
          <Routes>
          <Route path="/a6/twitter/home" element = {<HomeScreen/>}>
          </Route>
          <Route path="/a6/twitter/explore" element = {<Build/>}>
          </Route>
          <Route path="/a6/practice" element = {<Practice/>}>
          </Route>

      </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
