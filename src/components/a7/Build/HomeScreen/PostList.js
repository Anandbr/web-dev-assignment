import React from "react";
import PostItem from "./PostItem.js";
import Posts from "./Posts.json";


const PostList = () => {
    return(
        <>
            <ul className="list-group">
            {
        Posts.map(Posts => {
            return(<PostItem posts = {Posts}/>);
        })
    }
            </ul>
        </>
    );
}
export default PostList;