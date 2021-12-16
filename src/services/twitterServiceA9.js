const URL = 'http://localhost:4000/api/tweets';

export const fetchAllTweets = () =>
    fetch(URL)
        .then(response => response.json());

export const postNewTweet = (newTweet) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());


export const deleteTweet = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

export const likeTweet = (tweet) =>{
    console.log("twee1" +tweet)

    fetch(`${URL}/${tweet._id}`, {
        method: 'PUT',
        body: JSON.stringify(tweet)
    }).then(response => response.json())};

export default {
    fetchAllTweets, postNewTweet, deleteTweet, likeTweet
};



