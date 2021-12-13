import './vendors/bootstrap/bootstrap.min.css'
import './App.css';
import HelloWorld from "./components/a6/HelloWorld";
// import Build from "./components/a6/Build/Build";
// import Build from "./components/a7/Build/HomeScreen/HomeScreen";
// import Build from "./components/a7/Build/HomeScreen/HomeScreen"
import Build from "./components/a7/Build/HomeScreen/HomeScreen"
// import Build from "./components/a7/Build/Build"
import Practice from "./components/a6/Practice/Practice";
// import Practice from "./components/a6/Practice/Practice";
import Index from "./components/a7/Practice/index"
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import Home from "./components/a8/Build/HomeScreen/HomeScreen"
import Home9 from "./components/a9/Build/HomeScreen/HomeScreen"
import  ExploreComponent  from "./components/a7/Build/Build";
import Exp from "./components/a8/Build/Build"
import Exp9 from "./components/a9/Build/Build"
import Explore from "./components/a6/Build/Build";
import ProfileScreen from "./components/a7/Build/ProfileScreen/ProfileScreen";
import Profile from "./components/a8/Build/ProfileScreen/ProfileScreen"
import Profile9 from "./components/a9/Build/ProfileScreen/ProfileScreen"
import EditProfile from "./components/a7/Build/EditProfile/EditProfile";
import Edit from "./components/a8/Build/EditProfile/EditProfile"
import Edit9 from "./components/a9/Build/EditProfile/EditProfile"
import Prac from "./components/a8/Practice/index"
import Pract from "./components/a9/Practice/index"
import who from "../src/reducers/who"
import tweets from "./reducers/tweets";
import tweetsA7 from "./reducers/tweetsA7";
import profile from "./reducers/profile"
// import profileA8 from "./reducers/profileA8";
import profileA9 from "./reducers/ProfileA9";
import tweetsA9 from "./reducers/tweetsA9";
import whoA9 from "./reducers/whoA9";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({tweets: tweets, tweetsA7, who, profile, profileA9, tweetsA9, whoA9})
const store = createStore(reducer);

// import A6 from "./components/a6/index";

// import HelloWorld from "./components/a6/HelloWorld";

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="container">
          <Link to="/a6/practice">Assignment6 - Index</Link>
          <Link to="/a6/twitter/home">Assignment6 - Twitter Home</Link>
          <Link to="/a6/twitter/explore">Assignment6 - Twitter Explore</Link>
      </div>
          <div className="container">
          <Link to="/a7/practice">Assignment7 - Index</Link>
          {/*<Link to="/a6">Assignment6</Link>*/}
          <Link to="/a7/twitter/home">Assignment7 - Twitter Home</Link>
          <Link to="/a7/twitter/explore">Assignment7 - Twitter Explore        </Link>
          {/*/!*<Link to="/a7/practice">Assignment6 - Index</Link>*!/*/}
          </div>
          <div className="container">
              <Link to="/a8/practice">Assignment8 - Index</Link>
              <Link to="/a8/twitter/home">Assignment8 - Twitter Home</Link>
              <Link to="/a8/twitter/explore">Assignment8 - Twitter Explore        </Link>
          </div>
          <div className="container">
              <Link to="/a9/practice">Assignment9 - Index</Link>
              <Link to="/a9/twitter/home">Assignment9 - Twitter Home</Link>
              <Link to="/a9/twitter/explore">Assignment9 - Twitter Explore        </Link>
              <Routes>

          <Route path="/a6/twitter/home" element = {<HomeScreen/>}>
          </Route>
          <Route path="/a6/twitter/explore" element = {<Explore/>}>
          </Route>
          <Route path="/a6/practice" element = {<Practice/>}>
          </Route>
              <Route path="/a7/practice" element = {<Index/>}>
              </Route>
          <Route path="/a7/twitter/home" element = {<Build/>}>
          </Route>
          <Route path="/a7/twitter/explore" element = {<ExploreComponent/>}>
          </Route>
              <Route path="/a7/twitter/profile" element = {<ProfileScreen/>}>
              </Route>
                  <Route path="/a7/twitter/profile/editProfile" element = {<EditProfile/>}>
                  </Route>
                  <Route path="/a8/practice" element = {<Prac/>}>
                  </Route>
                  <Route path="/a8/twitter/home" element = {<Home/>}>
                  </Route>
                  <Route path="/a8/twitter/explore" element = {<Exp/>}>
                  </Route>
                  <Route path="/a8/twitter/profile" element = {<Profile/>}>
                  </Route>
                  <Route path="/a8/twitter/profile/editProfile" element = {<Edit/>}>
                  </Route>



                  <Route path="/a9/practice" element = {<Pract/>}>
                  </Route>
                  <Route path="/a9/twitter/home" element = {<Home9/>}>
                  </Route>
                  <Route path="/a9/twitter/explore" element = {<Exp9/>}>
                  </Route>
                  <Route path="/a9/twitter/profile" element = {<Profile9/>}>
                  </Route>
                  <Route path="/a9/twitter/profile/editProfile" element = {<Edit9/>}>
                  </Route>
          {/*<Route path="/a7/practice" element = {<Index/>}>*/}
          {/*</Route>*/}
          </Routes>

          </div>


      </BrowserRouter>
      </Provider>
  );
}

export default App;
