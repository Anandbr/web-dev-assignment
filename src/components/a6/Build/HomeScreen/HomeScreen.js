import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import PostList from "./PostList";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

const Build = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <PostList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList/>
                </div>
            </div>
        </>
    )
}
;
export default Build;