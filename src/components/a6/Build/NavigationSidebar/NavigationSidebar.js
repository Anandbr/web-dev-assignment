import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar =  ({
    active
    }) => {
    const isActive = (active, path) =>
        `list-group-item ${active === path ? 'active' : ''}`

    return(
        <>
            <div className="list-group" >
                <Link to= "/a6/" className="list-group-item" href="#"><i className="fab fa-twitter"></i> </Link>
                <Link to= "/a6/twitter/home" className={isActive(active, 'home')} href="/web-dev/public/A5/twitter/HomeScreen/home.html"><i className="fas fa-home me-2"></i><span className="d-none d-xl-inline">Home</span></Link>
                <Link to= "/a6/twitter/explore" className={isActive(active, 'explore')} href="/web-dev/public/A5/twitter/explore/explore.html"><i className="fas fa-hashtag me-2"></i><span className="d-none d-xl-inline">Explore</span></Link>
                <Link to="/a6/twitter/notification" className="list-group-item " href="#"><i className="fas fa-bell me-2"></i><span className="d-none d-xl-inline">Notifications</span></Link>
                <Link to="/a6/twitter/messages" className="list-group-item" href="#"><i className="fas fa-envelope me-2"></i><span className="d-none d-xl-inline">Messages</span></Link>
                <Link to="/a6/twitter/bookmarks" className="list-group-item" href="#"><i className="fas fa-bookmark me-2"></i><span className="d-none d-xl-inline">Bookmarks</span></Link>
                <Link to="/a6/twitter/lists" className="list-group-item" href="#"><i className="fas fa-list me-2"></i><span className="d-none d-xl-inline">Lists</span></Link>
                <Link to="/a6/twitter/profile" className="list-group-item" href="#"><i className="fas fa-user-alt me-2"></i><span className="d-none d-xl-inline">Profile</span></Link>
                <Link to="/a6/twitter/more" className="list-group-item" href="#"><i className="fas fa-ellipsis-h me-2"></i><span className="d-none d-xl-inline">More</span></Link>
            </div>
            <button className="btn btn-primary wd-tweetButton mt-2" style={{"borderRadius" : "20px"}} >Tweet</button>
        </>

    );
}
export default NavigationSidebar;

