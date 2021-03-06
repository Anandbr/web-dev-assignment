import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import PostList from "./PostList";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import TweetList from "../TweetList/index";
import WhatsHappening from "../WhatsHappening";

const Build = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <WhatsHappening/>
                    <TweetList/>
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