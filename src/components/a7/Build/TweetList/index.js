import React from "react";
// import tweets from "./tweets.json";
import {useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
const selectAllTweets = (state) => state.tweetsA7

const TweetList = () => {
    const tweets = useSelector(selectAllTweets)
    return(
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )
            }
        </ul>
    )
};
export default TweetList;


