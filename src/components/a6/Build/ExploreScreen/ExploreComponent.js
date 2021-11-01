import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList"
// import PostSummaryList from "./PostSummaryList/PostSummaryList.js"

const ExploreComponent = () => {
    return(
        <>
        <div className="row">
            <div className="col-10" >
                <i className = "fa fa-search fa-lg mt-2 pt-1 ms-2 ps-1" style={{"position": "absolute"}}></i>
                <div className="search"><input className="formControl" placeholder="Search Twitter"/></div>
            </div>
            <div className="col-2">
                <i className="fas fa-cog fa-2x"></i>
            </div>
        </div>
        <ul className="nav mt-2 mb-2">
            <li className="nav-item">
                <a className="nav-link active" href="for-you.html">For You</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="trending.html">Trending</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="news.html">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="sports.html">Sports</a>
            </li>
            <li className="d-none d-md-block nav-item">
                <a className="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
           <ul className = "list-group">
                <li className="list-group-item" >

                        <img src='/Starship1.png' style ={{"position": "relative", "max-width": "100%", "height": "auto"}}/>
                        <div className = "wd-bottom-left1">
                            <p >SpaceX's Starship</p>
                        </div>

                </li>
            </ul>

            <PostSummaryList/>

        </>
    );
}
export default ExploreComponent;