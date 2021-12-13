/*
import React from "react";
import PostSummaryItem from "./PostItem";
import post from "./post1.json";

const HomeIndex = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item">
                    {
                        post.map(post1 => {
                            return (
                                <PostSummaryItem post1={post1}/>
                            )
                        })
                    }
                </li>      
            </ul>
    );
}
export default HomeIndex;*/
import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList/index";
import WhatsHappening from "../WhatsHappening";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-6"
                 style={{"position": "relative"}}>
                <WhatsHappening/>
                <TweetList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title="What's happening"/>
            </div>
        </div>
    )
}

export default HomeScreen;
