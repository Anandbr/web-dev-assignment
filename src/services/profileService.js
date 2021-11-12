const TWEET_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(TWEET_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                    type: 'fetch-user-profile',
                    profile
                }
            )
        );

export const updatCurrentProfile = (dispatch, profile) =>
    fetch(`${TWEET_API}`, {
        method: 'PUT'
    })
        .then(response => response.json())
        .then(response =>
            dispatch({
                type: 'update-user-profile',
                profile
            }));