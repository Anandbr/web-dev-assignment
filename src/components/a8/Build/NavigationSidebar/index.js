import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active='explore'
    }

) => {
    return (
        <>
            <div className="list-group">
                <Link to="/a8/"
               className="list-group-item" href="#">
                   <div className="row">
                       <div className="col-2">
                           <i className="fab fa-twitter"></i>
                       </div>
                   </div>
                </Link>
                <Link to="/a8/twitter/home"
               className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="/public/a5/build/HomeScreen/explore.html">
                   <div className="row">
                       <div className="col-2">
                           <i className="fas fa-home me-2"></i>
                       </div>
                       <div className="col-10">
                           <span className="d-none d-xl-block">Home</span>
                       </div>
                   </div>
            </Link>
                <Link to="/a8/twitter/explore"
               className={`list-group-item ${active === 'explore' ? 'active' : ''}`} href="/public/a5/build/explorescreen/explore.html">
                   <div className="row">
                       <div className="col-2">
                           <i className="fas fa-hashtag me-2"></i>
                       </div>
                       <div className="col-10">
                           <span className="d-none d-xl-block">Explore</span>
                       </div>
                   </div>

            </Link>
               <a className="list-group-item" href="notifications.html">
                   <div className="row">
                       <div className="col-2">
                           <i className="fas fa-bell me-2"></i>
                       </div>
                       <div className="col-10">
                           <span className="d-none d-xl-block ">Notifications</span>
                       </div>
                   </div>
               </a>
               <a className="list-group-item" href="messages.html">
                   <div className="row">
                       <div className="col-2">
                           <i className="fas fa-envelope me-2"></i>
                       </div>
                       <div className="col-10">
                           <span className="d-none d-xl-block">Messages</span>
                       </div>
                   </div>
               </a>
               <a className="list-group-item " href="bookmarks.html">
                   <div className="row">
                       <div className="col-2">
                           <i className="fas fa-bookmark me-2"></i>
                       </div>
                       <div className="col-10">
                           <span className="d-none d-xl-block ">Bookmarks</span>
                       </div>
                   </div>
               </a>
               <a className="list-group-item " href="lists.html">
                   <div className="row">
                       <div className="col-2">
                           <i className="fas fa-list me-2"></i>
                       </div>
                       <div className="col-10">
                           <span className="d-none d-xl-block ">Lists</span>
                       </div>
                   </div>
               </a>
                <Link to="/a7/twitter/profile"
                      className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="profile.html">
                   <div className="row">
                       <div className="col-2">
                           <i className="fas fa-user-circle me-2"></i>
                       </div>
                       <div className="col-10">
                           <span className="d-none d-xl-block ">Profile</span>
                       </div>
                   </div>
                </Link>
               <a className="list-group-item " href="more.html">
                   <div className="row">
                       <div className="col-2">
                           <i className= "fas fa-ellipsis-h me-2"></i>
                       </div>
                       <div className="col-10">
                           <span className="d-none d-xl-block">More</span>
                       </div>
                   </div>
               </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
         
    );
}

/*const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return(
<>

</>
    );


}*/
export default NavigationSidebar;
