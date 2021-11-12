import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
// import PostList from "./PostList";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import TweetList from "../TweetList/index";
import WhatsHappening from "../WhatsHappening";
import ProfileComponent from "./ProfileComponent";
import "./profile.css";

const Build = () => {
        return(
            <>
                <div className="row mt-2">
                    <div className="col-2 col-lg-1 col-xl-2">
                        <NavigationSidebar active="profile"/>
                    </div>
                    <div className="col-10 col-lg-7 col-xl-6"
                         style={{"position": "relative"}}>
                        <ProfileComponent/>
                    </div>
                    <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                        <PostSummaryList title="What's happening"/>
                    </div>
                </div>
            </>
        )
    }
;
export default Build;