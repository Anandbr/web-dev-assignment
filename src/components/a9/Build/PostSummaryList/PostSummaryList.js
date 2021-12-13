import PostSummaryItem from "./PostSummaryItem.js";
import React from "react";
import Posts from "./Posts.json"


const PostSummaryList = () => {
    return(
        <>
            <ul className="list-group">
            {
        Posts.map(Posts => {
            return(<PostSummaryItem Posts = {Posts}/>);
        })
    }
            </ul>
        </>
    );
}
export default PostSummaryList;