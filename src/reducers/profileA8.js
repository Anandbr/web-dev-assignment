//
// const profileA8 = (state = [], action) => {
//     switch (action.type){
//         case 'set-profile' :
//             console.log("set" +action.profile.userName)
//             return (action.profile);
//         case 'fetch-user-profile':
//             return (state);
//             // eslint-disable-next-line no-unreachable
//             break;
//         case 'save':
//
//             return (state);
//             // eslint-disable-next-line no-unreachable
//             break;
//         case 'update-profile':
//             const prof = {"firstName": action.profile.firstName,
//                 "lastName": action.profile.lastName,
//                 "userName": action.profile.userName,
//                 "handle": action.profile.handle,
//                 "profilePicture": action.profile.profilePicture,
//                 "bannerPicture": action.profile.bannerPicture,
//                 "bio": action.profile.bio,
//                 "website": action.profile.website,
//                 "location": action.profile.location,
//                 "dateOfBirth": action.profile.dateOfBirth,
//                 "dateJoined": action.profile.dateJoined,
//                 "followingCount": action.profile.followingCount,
//                 "followersCount": action.profile.followersCount
//             }
//             console.log("ProfileA8" + action.profile.userName + state.userName + prof)
//             state.firstName = prof.firstName;
//             state.lastName = prof.lastName;
//             state.userName = prof.userName;
//             state.handle = prof.handle;
//             state.profilePicture = prof.profilePicture;
//             state.bannerPicture = prof.bannerPicture;
//             state.bio = prof.bio;
//             state.website = prof.website;
//             state.location = prof.location;
//             state.dateOfBirth = prof.dateOfBirth;
//             state.dateJoined = prof.dateJoined;
//             state.followingCount = prof.followingCount;
//             state.followersCount  = prof.followersCount;
//             return (state);
//             // eslint-disable-next-line no-unreachable
//
//         default:
//             return (state);
//     }
// };
// export default profileA8;