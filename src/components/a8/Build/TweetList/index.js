import React, {useEffect} from "react";
// import tweets from "./tweets.json";
import {useDispatch ,useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/twitterService";

const selectAllTweets = (state) => state.tweets

const TweetList = () => {
    const tweets = useSelector(selectAllTweets)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("tweet component loaded");
        fetch('http://localhost:4000/api/tweets')
            .then((response) => {
                return response.json()
            })
            .then((tweets) => {
                console.log(tweets);

                dispatch({
                    type: 'set-tweet',
                    tweets
                });

            })
    }, []);

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


