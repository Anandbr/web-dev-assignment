import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import post from "./post.json";

const PostSummaryList = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item">
                    {
                        post.map(post => {
                            return (
                                <PostSummaryItem post={post}/>
                            )
                        })
                    }
                </li>      
            </ul>
    );
}
export default PostSummaryList;