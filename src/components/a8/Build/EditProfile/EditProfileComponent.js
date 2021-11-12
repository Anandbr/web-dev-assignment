import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {updatCurrentProfile, getCurrentProfile} from "../../../../services/profileService";

const profileDetail = (state) => state.profile;

const EditProfileComponent = () => {
    let navigate = useNavigate();
    const profile = useSelector(profileDetail)[0];
    // let[newInput,setProfileData] = useState({});
    const dispatch = useDispatch();

    // const [firstName, setFirstName] = useState(profile["firstName"]);
    // const [lastName, setLastName] = useState(profile["lastName"]);
    const [userName, setUserName] = useState(profile["userName"]);
    const [bio, setBio] = useState(profile["bio"]);
    const [location, setLocation] = useState(profile["location"]);
    const [website, setWebsite] = useState(profile["website"]);
    const [birthDate, setBirthdate] = useState(profile["dateOfBirth"]);

    // const saveProfile = () => {
    //     dispatch({type: 'save-profile', profile})
    //     updateCurrentProfile(dispatch, profile);
    // }

    const saveChanges = () => {
        // profile["firstName"] = firstName;
        // profile["lastName"] = lastName;
        profile["bio"] = bio;
        profile["location"] = location;
        profile["website"] = website;
        profile["dateOfBirth"] = birthDate;
        profile["userName"] = userName;
        dispatch({type: 'save', profile});
        console.log(profile);
        updatCurrentProfile(dispatch, profile).then(r => {
            console.log("profile", profile);
        });
        navigate("/a8/twitter/profile")
    }
    return(

        <div className="row">
            <div className="col-md-12 col-12">
                <div className="row">
                    <div className="col-2">

                        <Link to = "/a8/twitter/profile"><i className="fas fa-times"></i></Link>
                    </div>
                    <div className="col-4">
                        <h6>{profile.userName}</h6>
                        <span className="text-secondary">5196 Tweets</span>
                    </div>
                    <div className="col-6 float-right">
                        <Link to="/a8/twitter/profile">
                            <a className="btn border btn-block rounded-pill" onClick={saveChanges}>Save</a>
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
                                />
                            </li>
                            <br/>
                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Bio</label>
                                <br/>
                                <textarea className="border-0 text-white mt-2" type="text" placeholder="Bio" name="bio" defaultValue={profile.bio}
                                          onChange={e => setBio(e.target.value)}
                                />
                            </li>
                            <br/>

                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Location</label>
                                <br/>
                                <input className="border-0 text-white mt-2" type="text" placeholder="location" name="location" defaultValue={profile.location}
                                       onChange={(e) => setLocation(e.target.value)}
                                />
                            </li>
                            <br/>

                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Website</label>
                                <br/>
                                <input className="border-0 text-white mt-2" type="text" placeholder="location" name="location" defaultValue={profile.website}
                                       onChange={(e) => setWebsite(e.target.value)}
                                />
                            </li>
                            <br/>
                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">BirthDate</label>
                                <br/> <input className="border-0 text-white mt-2" type="text" placeholder="date of Birth" name="dob" defaultValue={profile.dateOfBirth}
                                             onChange={e => setBirthdate(e.target.value)}
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