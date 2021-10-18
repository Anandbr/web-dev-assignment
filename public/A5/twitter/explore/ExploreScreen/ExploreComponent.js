import PostSummaryList from "./PostSummaryList/PostSummaryList.js"

const ExploreComponent = () => {
    return(`<div class="row">
                <div class="col-10" >
                    <i class = "fa fa-search fa-lg mt-2 pt-1 ms-2 ps-1" style="position: absolute"></i>
                    <div class="search"><input class="form-control" placeholder="Search Twitter"/></div>
                </div>
                <div class="col-2">
                    <i class="fas fa-cog fa-2x"></i>
                </div>
            </div>
            <ul class="nav mt-2 mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="d-none d-md-block nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

<!--            <div class="imageText">-->
<!--            <img src="../../Starship.png" style = "position: relative"/>-->
<!--            <div class = "bottom-left">SpaceX's Starship</div>-->
<!--           </div>-->
           <ul class = "list-group">
                        <li class="list-group-item" >
                        <div>
                            <img src="../../Starship.png" style = "position: relative"/>
                            <div class = "wd-bottom-left1">
                                <p >SpaceX's Starship</p>
                            </div>
                            </div>
                        </li>
                       </ul> 

${PostSummaryList()}
    `);
}
export default ExploreComponent;