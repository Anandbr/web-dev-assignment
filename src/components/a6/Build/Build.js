import React from "react";
import NavigationSidebar from "./NavigationSidebar/NavigationSidebar";

import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import {Link} from "react-router-dom";
import PostSummaryList from "./PostSummaryList/PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";

const Build = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <ExploreComponent/>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
)
};

export default Build;
