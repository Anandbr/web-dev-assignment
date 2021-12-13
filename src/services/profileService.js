

const PROFILE_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                    type: 'fetch-user-profile',
                    profile
                }
            )
        );

export const updatCurrentProfile = (dispatch, profile) =>
    fetch(PROFILE_API, {
        method: 'PUT',
        body:  JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(profile => {
            console.log("check" + profile);
            dispatch({
                type: 'update-profile',
                profile
            })

        });

