import './vendors/bootstrap/bootstrap.min.css'
import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
// import Build from "./components/a6/Build/Build";
import Build from "./components/a6/Build/Build"
import Practice from "./components/a6/Practice/Practice";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreComponent from "./components/a6/Build/ExploreScreen/ExploreComponent";

// import HelloWorld from "./components/a6/HelloWorld";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
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
