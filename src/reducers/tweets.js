// import tweetsJson from './data/tweets.json';

const tweets = (state = [], action) => {
    switch (action.type) {
        // case 'fetch-all-tweets':
        //     return({
        //         tweets: action.tweets
        //     })
        //     break;

        case 'set-tweet':
            return action.tweets;


        case 'create-tweet':
            const tweet = {
                "_id": (new Date()).getTime(),
                "topic": "Web Development",
                "userName": "jQuery",
                "verified": false,
                "handle": "jQuery",
                "title": "jQuery",
                ...action.tweet,
                "time": "last week",
                "logo-image": "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",
                "avatar-image": "../../../images/jquery.png",
                "tweets": "122K",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                }
            };
            return ([
                    tweet,
                    ...state,
                ]
            );
            // eslint-disable-next-line no-unreachable
            break;

        case 'delete-tweet':
            console.log("tweet", state);
            return state
                .filter(tweet => tweet._id !== action.tweet._id);
            // eslint-disable-next-line no-unreachable
            break;

        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
            // eslint-disable-next-line no-unreachable
            break;

        default:
            return(state);
    }

};


export default tweets;
