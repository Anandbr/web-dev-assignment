import React, {useEffect, useState} from "react";
// import tweets from "./tweets.json";
import {useDispatch ,useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import twitterServiceA9 from "../../../../services/twitterServiceA9";
import {fetchAllTweets} from "../../../../services/twitterServiceA9";
import tweetsA9 from "../../../../reducers/tweetsA9";
import service from "../../Practice/movies/service";
import {deleteTweet, likeTweet, postNewTweet} from "../../../../services/twitterService";

// const selectAllTweets = (state) => state.tweets.tweetsA9
// console.log(fetchAllTweets());/

const TweetList = () => {

    const [tweets, setTweets] = useState([]);
    useEffect(() =>
        twitterServiceA9.fetchAllTweets()
            .then(tweets => setTweets(tweets)));
    // console.log(tweets);
    const deleteTweet = (tweet) =>
        twitterServiceA9.deleteTweet(tweet._id)
            .then(() => setTweets(
                tweets.filter(t => t !== tweet)));
    
    const likeTweet = (event) =>
        setTweets({...tweets, title: event.target.value});


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


