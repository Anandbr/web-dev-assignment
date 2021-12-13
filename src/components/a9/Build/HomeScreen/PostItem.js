import React from "react";


const PostItem = (
    {
        posts = {
            "userName": "Elon Musk","avatarIcon1": "../explore/ExploreScreen/Index/musk.jpg", "handle1": "@elonmusk", "time": "23h", "textBfrCaption": "Amazing show about", "caption": "@Inspiration4x", "textAftrCaption": " mission!",
            "image": "../explore/ExploreScreen/Index/inspiration4.jpg", "header": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "description": "From training to launch to landing, this all-access docuseries rides along with Inspiration4 crew on the first all-civilian orbital space ...",
            "tag": " netflix.com", "comments": "4.2K", "retweet": "3.5K", "likes": "37.5K"
        }
    }) => {
    return(
        <>
        <li className="list-group-item ">

                    <div className="row">
                        <div className = "col-2">
                            <img src={posts.avatarIcon1} style={{"borderRadius": "50%", "width": "60px", "height": "60px"}}/>
                        </div>
                        <div className = "col-9">
                            {posts.userName}
                            <span className="fa-stack">
                                <i className="fas fa-certificate fa-stack-2x"/>
                                <i className="fas fa-check fa-stack-1x fa-inverse"/>
                            </span>
                            <span>
                                 {posts.handle1} &middot; {posts.time}
                            </span>
                            <div>
                            {posts.textBfrCaption} <a href= "#">{posts.caption}</a>{posts.textAftrCaption}
                            </div>    
                        </div>
                        <div className="col-1">
                            <i className="fas fa-ellipsis-h"/>
                        </div>
                    </div>
                    <ul className="list-group" style={{"borderRadius": "40px"}}>
                    <li className="list-group-item" >
                    <div className = "row">
                        <img src={posts.image} style={{"borderRadius": "40px"}}/>
                    </div>
                    </li>
                    <li className="list-group-item">
                    <div className = "row">
                        <div>
                        {posts.header}
                        </div>
                        <div>
                            {posts.description}
                        </div>
                        <div>
                            {posts.tag}
                        </div>
                    </div>
                    </li>
                   </ul>
                    <div className="row">
                        <div className = "col">
                            <a href = "#" className="hyperlink-no-border">
                             <i className="far fa-comment"></i> <span className="count-color">{posts.comments}</span>
                            </a>
                        </div>
                        <div className="col">
                            <a href = "#" className="hyperlink-no-border">
                             <i className="fas fa-retweet"></i> <span className="count-color">{posts.retweet}</span>
                            </a>
                        </div>
                        <div className = "col">
                            <a href = "#" className="hyperlink-no-border">
                             <i className="fas fa-heart"></i>  <span className="count-color">{posts.likes}</span>
                            </a>
                        </div>
                        <div className="col">
                            <a href = "#" className="hyperlink-no-border">
                             <i className="fas fa-share"></i>
                            </a>
                        </div>
                    </div>
                </li>
               </>
                )
}
export default PostItem;