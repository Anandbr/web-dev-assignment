import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import profileServiceA9 from "../../../../services/profileServiceA9";
import {getCurrentProfile} from "../../../../services/profileService";
import {prettyFormat} from "@testing-library/react";
import twitterServiceA9 from "../../../../services/twitterServiceA9";

// const profileDetail = (state) => state.profileA8;

const ProfileComponent = () => {
    const [profile, setProfile] = useState([]);
    useEffect(() =>
        profileServiceA9.getCurrentProfile()
            .then(profile => setProfile(profile[0])));
    // console.log("what?" + profile);
    // const prof = useSelector(profileDetail);
    // // console.log(prof);
    // let profile;
    // if (prof[0] == null) {
    //     profile =  prof;
    // }
    // else {
    //     profile = prof[0];
    // }
    //
    //
    // console.log("ProfileComponent", profile);
    //
    // const dispatch = useDispatch();
    //
    // // useEffect(() => getCurrentProfile(dispatch()), []);
    // useEffect(() => {
    //     console.log("Profile component loaded");
    //     fetch('http://localhost:4000/api/profile')
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((profile) => {
    //             console.log(profile.userName +"before set")
    //             dispatch({
    //                 type: 'set-profile',
    //                 profile
    //
    //             });
    //         })
    //
    // }, []);

    return(

        <div className="row">
            <div className="col-md-12 col-12">
                <div className="row">
                    <div className="col-2">

                        <Link to = "/a9/twitter/home"><i className="fas fa-arrow-left"></i></Link>
                    </div>
                    <div className="col-8">

                        <h6>{profile.userName}</h6>

                        <span className="text-secondary">5196 Tweets</span>
                    </div>
                </div>
            </div>
            <div className="col-md-12 col-12 profile-back">
                <img src={profile.profilePicture} className="rounded-circle"/>
            </div>
            <div className="col-md-12 ">
                <Link to="/a9/twitter/profile/editProfile">
                    <a className="btn border btn-block rounded-pill">Edit Profile</a>
                </Link>
            </div>
            <div className="col-md-12 pt-5">
                <span className="h5 fw-bold">{profile.userName}</span> <br/>
                <span className="text-secondary">@{profile.handle}</span>
                <div className="pt-2">{profile.bio}</div>
                <div className="pt-2">{profile.website}</div>
            </div>
            <div className="col-md-12 pt-3">
                <span className="text-secondary"><i className="fas fa-map-marker-alt "></i> {profile.location}</span>
                <span className="text-secondary ms-3"><i className="fas fa-map-pin"></i> Born {profile.dateOfBirth}</span>
                <span className="text-secondary ms-3"><i className="fas fa-calendar-alt"></i> Joined {profile.dateJoined}</span>
            </div>
            <div className="col-md-12 pt-3 pb-3">
                <span>{profile.followingCount} <span className="text-secondary"> Following</span></span>
                <span className="ms-3">{profile.followersCount}<span className="text-secondary"> Followers</span> </span>
            </div>
        </div>

    );

}

export default ProfileComponent;