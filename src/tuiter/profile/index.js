import React from "react";
import {useSelector} from "react-redux";
import {FaMapMarkerAlt, FaMapPin, FaRegCalendarAlt, FaArrowLeft} from "react-icons/fa"
import "./index.css";
import {Link} from "react-router-dom";

const ProfileComponent = () => {

    const profile = useSelector((state) => state.profile[0])

    return(
    <>
                <div>
                    <div className="flex-column mb-2">
                        <button type="button" className="float-start btn btn-white">
                            <Link to="../home" className="text-decoration-none text-dark"><FaArrowLeft/></Link></button>
                        <div className="d-flex flex-column">
                            <div className="flex-row wd-font-currentUser"> {profile.firstName} {profile.lastName}</div>
                            <div className="flex-row  text-secondary fw-bold wd-fontLoc">{profile.tweets} Tweets</div>
                        </div>
                    </div>
                    <div className="w-100">
                        <img src={profile.bannerPicture} className="w-100 position-relatively" height="110px" alt=""/>
                    </div>
                    <div>
                        <img src={profile.profilePicture} className="rounded-circle ms-5 position-absolute wd-profileimg" width="140px" alt="" />
                        <button className="float-end mt-2 me-2 btn btn-white btn-outline-dark rounded-pill">
                            <Link to="../edit-profile" className="text-decoration-none text-dark">EditProfile</Link>
                        </button>
                    </div>
                    <div className="mt-5 pt-4">
                        <h5 className="m-0 wd-font-currentUser">{profile.firstName} {profile.lastName}</h5>
                        <h6 className="text-secondary fw-bold mb-2 wd-fonthandle">{profile.handle}</h6>
                        <p className="wd-fontBio mb-1">{profile.bio}</p>
                    </div>
                    <div className="d-flex flex-row mb-1">
                        <div className="flex-row me-2"><span className="wd-fontLoc text-secondary"><FaMapMarkerAlt/>{profile.location}</span></div>
                        <div className="flex-row me-2"><span className="wd-fontLoc text-secondary"><FaMapPin/> Born {profile.dateOfBirth}</span></div>
                        <div><span className="flex-row wd-fontLoc text-secondary"><FaRegCalendarAlt/> Joined {profile.dateJoined}</span></div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="fw-bold wd-followCount flex-row me-2">{profile.followingCount} <span className="text-secondary fw-normal">Following</span></div>
                        <div className="fw-bold wd-followCount flex-row">{profile.followersCount} <span className="text-secondary fw-normal">Followers</span></div>
                    </div>
                </div>

        </>

    )


}

export default ProfileComponent;