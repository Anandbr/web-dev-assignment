import React from "react";

const PostSummaryItem = (
    {
    Posts = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../images/react-blue.png"
    }
}) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className = "col-7 col-md-9 col-lg-10">
                        <div>
                            {Posts.topic}
                        </div>
                        <div className = "wd-bold">
                            {Posts.userName}
                            <span className="fa-stack">
                                        <i className="fas fa-certificate fa-stack-2x"></i>
                                        <i className="fas fa-check fa-stack-1x"></i>
                                     </span>
                            <span className = "wd-normal">&middot; {Posts.time}</span>
                        </div>
                        <div className = "wd-bold">
                           {Posts.title}
                        </div>
                        <div>
                            <p className="fg-color-darkgray">{Posts.tweets}</p>
                        </div>
                    </div>
                    <div className = "col-5 col-md-3 col-lg-2">
                        <img src={Posts.image} style ={{"borderRadius": "10px", "max-width": "100%", "height": "auto"}}/>
                     </div>
                </div>
            </li>
        </>
);
}
export default PostSummaryItem;