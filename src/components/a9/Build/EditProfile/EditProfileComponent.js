import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import profileServiceA9 from "../../../../services/profileServiceA9";
import {updatCurrentProfile, getCurrentProfile} from "../../../../services/profileService";
import service from "../../Practice/movies/service";

// const profileDetail = (state) => state.profileA8;

const EditProfileComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let use;





    //change start
    let [user, setUser] = useState({});
    const [localUser, setLocalUser] = useState( {
        "_id" : "",
        "firstName": "",	"lastName": "", "userName": "", "handle": "",
        "profilePicture": "", 	"bannerPicture": "",
        "bio": "",	"website": "",
        "location": "",	"dateOfBirth": "",	"dateJoined": "",
        "followingCount": "",	"followersCount": ""
    });

    const getProfile = () => {
        fetch("http://localhost:4000/api/profile", {
            method: 'GET',
            credentials: 'include'
        }).then(res => res.json())
            .then(user => {
                setUser(user);
                // setLocalUser(user)
                localUser._id = user[0]._id;
                localUser.firstName = user[0].firstName;
                localUser.bannerPicture = user[0].bannerPicture;
                localUser.dateJoined = user[0].dateJoined;
                localUser.followersCount = user[0].followersCount;
                localUser.followingCount = user[0].followingCount;
                localUser.handle = user[0].handle;
                localUser.lastName = user[0].lastName;
                localUser.profilePicture = user[0].profilePicture;
                console.log("user" + user);
                console.log("localUser" + JSON.stringify(localUser));
                dispatch({type: "update-profile", "profile": user})
            })
        .catch(e => navigate("/a9/twitter/profile"))
    }

    const updateProfile = () => {

        // localUser._id = user._id;
        localUser.userName = userName;
        localUser.bio = bio;
        localUser.dateOfBirth = birthDate;
        localUser.location = location;
        localUser.website = website;
        console.log("called" + JSON.stringify(localUser))

        fetch("http://localhost:4000/api/profile", {
            method: 'PUT',
            body: JSON.stringify(localUser),
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        }).then();
    };

    const refreshProfile = () => {
        console.log("refresh" + user[0].userName)
        localUser.userName = user[0].userName;
        localUser.bio = user[0].bio;
        localUser.dateOfBirth = user[0].dateOfBirth;
        localUser.location = user[0].location;
        localUser.website = user[0].website;
        document.getElementById("userNameBox").value = user[0].userName;
        document.getElementById("d1").innerText = user[0].userName;
        document.getElementById("d2").src = user[0].profilePicture;
        document.getElementById("d3").value = user[0].bio;
        document.getElementById("d4").value = user[0].location;
        document.getElementById("d5").value = user[0].website
        document.getElementById("d6").value = user[0].dateOfBirth;


    }

    // useEffect(refreshProfile, [])
    useEffect(getProfile, [])

    //change end

    let [userName, setUserName] = useState();
   //
    let [bio, setBio] = useState();
   let [location, setLocation] = useState();
    let [website, setWebsite] = useState();
    let [birthDate, setBirthdate] = useState();

    return(

        <div className="row">
            <div className="col-md-12 col-12">
                <div className="row">
                    <div className="col-2">

                        <Link to = "/a9/twitter/profile"><i className="fas fa-times"></i></Link>
                    </div>
                    <div className="col-4">
                        {/*<h6>{profile.userName}</h6>*/}
                        <h6 id = "d1">{localUser.userName}</h6>
                        <span className="text-secondary">5196 Tweets</span>
                    </div>
                    <div className="col-6 float-right">
                        <Link to="/a9/twitter/profile">
                            {/*<a className="btn border btn-block rounded-pill" onClick={updateProfile}>Save</a>*/}
                            <a className="btn border btn-block rounded-pill" onClick={updateProfile}>Save</a>
                        </Link>

                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-md-12 col-12 profile-back">
                    {/*<img src={profile.profilePicture} className="rounded-circle"/>*/}
                    <img id = "d2" src={localUser.profilePicture} className="rounded-circle"/>
                </div>

                <div className="col-md-12 pt-7">
                    <a className="btn border btn-block rounded-pill" onClick={refreshProfile}>Get default profile</a>
                    <div className="wd-details-form">

                        <ul className="list-group">
                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Name</label>
                                <br/>
                                {/*<input className="border-0 text-white mt-2" type="text" placeholder="Name" name="userName" defaultValue={profile.userName}*/}
                                <input id= "userNameBox" className="border-0 text-white mt-2" type="text" placeholder="Name" name="userName" defaultValue={localUser.userName}
                                       // onChange={e => setUserName(e.target.value)}
                                       onChange={e => setUserName(e.target.value)}
                                           // setProfile({...profile, userName: e.target.value})}
                                />


                            </li>
                            <br/>
                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Bio</label>
                                <br/>
                                {/*<textarea className="border-0 text-white mt-2" type="text" placeholder="Bio" name="bio" defaultValue={profile.bio}*/}
                                <textarea id = "d3" className="border-0 text-white mt-2" type="text" placeholder="Bio" name="bio" defaultValue={localUser.bio}
                                          // onChange={e => setBio(e.target.value)}
                                          onChange={e => setBio(e.target.value)}
                                />
                            </li>
                            <br/>

                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Location</label>
                                <br/>
                                {/*<input className="border-0 text-white mt-2" type="text" placeholder="location" name="location" defaultValue={profile.location}*/}
                                <input id = "d4" className="border-0 text-white mt-2" type="text" placeholder="location" name="location" defaultValue={localUser.location}
                                       // onChange={e => setLocation(e.target.value)}
                                       onChange={e => setLocation(e.target.value)}
                                />
                            </li>
                            <br/>

                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">Website</label>
                                <br/>
                                {/*<input className="border-0 text-white mt-2" type="text" placeholder="location" name="location" defaultValue={profile.website}*/}
                                <input id = "d5" className="border-0 text-white mt-2" type="text" placeholder="location" name="location" defaultValue={localUser.website}
                                       // onChange={e => setWebsite(e.target.value)}
                                       onChange={e => setWebsite(e.target.value)}
                                />
                            </li>
                            <br/>
                            <li className="list-group-item border border-secondary">
                                <label className="text-secondary">BirthDate</label>
                                {/*<br/> <input className="border-0 text-white mt-2" type="text" placeholder="date of Birth" name="dob" defaultValue={profile.dateOfBirth}*/}
                                <br/> <input id = "d6" className="border-0 text-white mt-2" type="text" placeholder="date of Birth" name="dob" defaultValue={localUser.dateOfBirth}
                                             // onChange={e => setDateOfBirth(e.target.value)}
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