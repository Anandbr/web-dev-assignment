import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import profileServiceA9 from "../../../../services/profileServiceA9";
import {updatCurrentProfile, getCurrentProfile} from "../../../../services/profileService";
import service from "../../Practice/movies/service";

// const profileDetail = (state) => state.profileA8;

const EditProfileComponent = () => {

    let bioOnChange;
    const[profile, setProfile] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getProfile = () => {
        fetch("http://localhost:4000/api/profile", {
            method: 'GET'
        }).then(res => res.json())
            .then(profile => {
                setProfile(profile);
                dispatch({type: "update-profile", "profile": profile})
            })
            // .catch(e => navigate("/a9/twitter/profile"))
    }

    const setUserName = (value) => {

        profile.userName = value;
    }
    const setBio = (value) => {
        // console.log("bio1" + value)
        bioOnChange = value;
        profile.bio = value;
        console.log(profile)
        console.log(bioOnChange)

        // setProfile({...profile, bio: value})
        // console.log(profile)
        // console.log("bio2" + value)
    }
    const setLocation = (value) => {
        profile.location = value;
    }
    const setDateOfBirth = (value) => {
        profile.dateOfBirth = value;
    }
    const setWebsite = (value) => {
        profile.website = value;
    }


    const updateProfile = () => {
        // console.log("on change bio" +bioOnChange)
        // profile.bio = "fshjudfgvdsufs";
        console.log(JSON.stringify(profile))
        fetch("http://localhost:4000/api/profile", {
            method: 'PUT',
            body: JSON.stringify(profile),
            headers: {
                'content-type': 'application/json'
            }
        }).then();
    };

    // useEffect(profileServiceA9.getCurrentProfile());

   //  const [profile, setProfile] = useState([]);
    useEffect(() =>
        profileServiceA9.getCurrentProfile()
            .then(profile => {
                // console.log(profile[0])
                setProfile(profile[0])
                dispatch({type: "update-profile", "profile": profile})
            }));
   //
   //  // const updateProfile = (profile) =>
   //  //     setProfile(firstName);
   //
   //  let navigate = useNavigate();
   //  // let profile = useSelector(profileDetail)[0];
   //
   //
   //  // const [firstName, setFirstName] = useState(profile["firstName"]);
   //  // const [lastName, setLastName] = useState(profile["lastName"]);
   //  let [userName, setUserName] = useState(profile['userName']);
   //
   //  let [bio, setBio] = useState(profile['bio']);
   // let [location, setLocation] = useState(profile['location']);
   //  let [website, setWebsite] = useState(profile['website']);
   //  let [birthDate, setBirthdate] = useState(profile['dateOfBirth']);
   //  const dispatch = useDispatch();
   //
   //  // const saveProfile = () => {
   //  //     dispatch({type: 'save-profile', profile})
   //  //     updateCurrentProfile(dispatch, profile);
   //  // }
   //
   //  const saveChanges = () => {
   //      // profile["firstName"] = firstName;
   //      // profile["lastName"] = lastName;
   //      profile["_id"] = 1;
   //      profile["bio"] = bio;
   //      profile["location"] = location;
   //      profile["website"] = website;
   //      profile["dateOfBirth"] = birthDate;
   //      profile["userName"] = userName;
   //      dispatch({type: 'update-profile', profile});
   //      console.log("check2" + profile);
   //      profileServiceA9.updatCurrentProfile(profile)
   //          .then(() => setProfile(
   //              profile.map(p => p._id === profile._id ? profile : p)
   //          ));
   //      navigate("/a9/twitter/profile")



    // }
    return(

        <div className="row">
            <div className="col-md-12 col-12">
                <div className="row">
                    <div className="col-2">

                        <Link to = "/a9/twitter/profile"><i className="fas fa-times"></i></Link>
                    </div>
                    <div className="col-4">
                        <h6>{profile.userName}</h6>
                        <span className="text-secondary">5196 Tweets</span>
                    </div>
                    <div className="col-6 float-right">
                        <Link to="/a9/twitter/profile">
                            <a className="btn border btn-block rounded-pill" onClick={updateProfile}>Save</a>
                        </Link>

                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-md-12 col-12 profile-back">
                    <img src={profile.profilePicture} className="rounded-circle"/>
                </div>
                <div className="col-md-12 pt-7">
                    <div className="wd-details-form">
                        <ul className="list-group">
                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Name</label>
                                <br/>
                                <input className="border-0 text-white mt-2" type="text" placeholder="Name" name="userName" defaultValue={profile.userName}
                                       onChange={e => setUserName(e.target.value)}
                                           // setProfile({...profile, userName: e.target.value})}
                                />

                                {JSON.stringify(profile.userName)}

                            </li>
                            <br/>
                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Bio</label>
                                <br/>
                                <textarea className="border-0 text-white mt-2" type="text" placeholder="Bio" name="bio" defaultValue={profile.bio}
                                          onChange={e => setBio(e.target.value)}
                                />
                                {JSON.stringify(profile.bio)}
                            </li>
                            <br/>

                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Location</label>
                                <br/>
                                <input className="border-0 text-white mt-2" type="text" placeholder="location" name="location" defaultValue={profile.location}
                                       onChange={e => setLocation(e.target.value)}
                                />
                            </li>
                            <br/>

                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Website</label>
                                <br/>
                                <input className="border-0 text-white mt-2" type="text" placeholder="location" name="location" defaultValue={profile.website}
                                       onChange={e => setWebsite(e.target.value)}
                                />
                            </li>
                            <br/>
                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">BirthDate</label>
                                <br/> <input className="border-0 text-white mt-2" type="text" placeholder="date of Birth" name="dob" defaultValue={profile.dateOfBirth}
                                             onChange={e => setDateOfBirth(e.target.value)}
                            />

                            </li>
                        </ul>
                    </div>
                </div>

            </div>




        </div>


    );
}

export default EditProfileComponent;