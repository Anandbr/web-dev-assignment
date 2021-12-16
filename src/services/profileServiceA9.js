

const URL = 'http://localhost:4000/api/profile';

export const getCurrentProfile = () =>
    fetch(URL)
        .then(response => response.json())


// export const updatCurrentProfile = (profile) =>
//     fetch(URL, {
//         method: 'PUT',
//         body:  JSON.stringify(profile),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//         .then(response => response.json())

export default {
    getCurrentProfile, //updatCurrentProfile
};

