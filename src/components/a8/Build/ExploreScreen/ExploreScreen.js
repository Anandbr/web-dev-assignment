/*import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../explorescreen/ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('explore')}
        </div>
        <div class="col-6">
        ${ExploreComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);*/

import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent";

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-6">
               <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ExploreScreen;
