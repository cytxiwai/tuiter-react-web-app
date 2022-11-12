import {useSelector, useDispatch} from 'react-redux';
import {FaTimes, FaCamera, FaChevronRight} from "react-icons/fa"
import {useState} from 'react';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import {FloatingLabel, FormGroup, FormControl} from "react-bootstrap"
import {updateProfile} from '../profile/profile-reducer'
import "../profile/index.css";


const EditProfileComponent = () => {
    const defaultProfile = useSelector((state) => state.profile)
    const [profile, setProfile] = useState(defaultProfile[0])
    const [bio, setBio] = useState(profile.bio);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();



    const updateProfileHandler = (e) => {
       dispatch(updateProfile(
           {...profile,
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website
            }
         ));
    }


    const handleBioChange =(e) => {
        const newBio = e.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: newBio
        }
        setProfile(newProfile)
    }

    const handleNameChange = (e) => {
        const newName = e.target.value.split(" ")
        console.log(newName)
        setFirstName(newName[0]);
        setLastName(newName[1]);
        const newProfile = {
            ...profile,
            firstName: firstName,
            lastName: lastName
        }
        setProfile(newProfile)
    }

    const handleLocationChange = (e) => {
        const newLocation = e.target.value;
        setLocation(newLocation);
        const newProfile = {
            ...profile,
            location: newLocation
        }
        setProfile(newProfile)
    }

    const handleWebsiteChange = (e) =>{
        const newWebsite = e.target.value;
        setWebsite(newWebsite);
        const newProfile = {
            ...profile,
            website: newWebsite
        }
        setProfile(newProfile);
    }

    return(
        <>
                <div>
                    <div>
                        <button
                            type="button" className="float-start btn btn-white pb-1">
                            <Link to="../profile/" className="text-decoration-none text-dark"><FaTimes/></Link></button>
                        <div className="float-start pt-2 mb-0"> Edit profile</div>
                        <button
                            onClick={(e) => {
                                updateProfileHandler(e);
                            }}
                            className="float-end me-2 mb-1 btn btn-white text-white btn-outline-dark rounded-pill">
                             <Link to="../profile/" className="text-decoration-none">Save</Link>
                        </button>
                    </div>
                    <div className="w-100">
                        <img src={profile.bannerPicture} className="w-100 position-relatively wd-img-grey" height="120px" alt=""/>
                        <div>
                             <button className="btn rounded-circle bg-secondary bg-opacity-75 position-absolute wd-updateBannerImg"><FaCamera/></button>
                        </div>
                        <div>
                            <button className="btn rounded-circle bg-secondary bg-opacity-75 position-absolute wd-cancelBannerImg"><FaTimes/></button>
                        </div>
                    </div>
                    <div>
                        <img src={profile.profilePicture} className="rounded-circle ms-5 position-absolute wd-profileimg wd-img-grey border-white border border-3" width="140px" alt=""/>
                        <div>
                            <button className="btn rounded-circle bg-secondary bg-opacity-75 position-absolute wd-updateProfileImg"><FaCamera/></button>
                        </div>
                    </div>
                    <div className="mt-5 pt-3">
                        <Form className="mt-2">

                            <FormGroup controlId="formGroupName">
                                <FloatingLabel id="forName" label="name" className="me-2">
                                    <FormControl
                                        type="input"
                                        value={firstName + " " + lastName}
                                        onChange={
                                            (e) => handleNameChange(e)
                                            }/>
                                </FloatingLabel>
                            </FormGroup>

                            <FormGroup controlId="formGroupBio">
                                <FloatingLabel id="forBio" label="bio" className="me-2">
                                <FormControl
                                        type="textarea"
                                        className="mt-2"
                                        value={bio}
                                        onChange={
                                        (e) => setBio(handleBioChange(e))
                                        }/>
                                </FloatingLabel>
                            </FormGroup>

                            <FormGroup controlId="formGroupLocation">
                                <FloatingLabel id="forLocation" label="location" className="me-2">
                                <FormControl
                                    type="input"
                                    className="mt-2"
                                    value={location}
                                    onChange={
                                         (e) => handleLocationChange(e)
                                         }/>
                                </FloatingLabel>
                            </FormGroup>

                            <FormGroup controlId="formGroupWebsite">
                                <FloatingLabel id="forWebsite" label="website" className="me-2">
                                <FormControl
                                    type="input"
                                    className="mt-2"
                                    value={website}
                                    onChange={
                                          (e) => handleWebsiteChange(e)
                                          }/>
                                </FloatingLabel>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="mt-2 ms-2">
                       <span className="d-flex flex-row">
                        <div className="me-2">Birthdate</div>
                        <button href="" className="text-primary btn btn-white text-decoration-none p-0 m-0 pb-1">Edit</button>
                       </span>
                        <div>{dateOfBirth}</div>
                    </div>
                    <div>
                        <button className="w-100 mt-2 ps-0 btn btn-white">
                            <div className="float-start">Switch to professional</div>
                            <FaChevronRight className="mt-1 float-end "/>
                        </button>
                    </div>
                </div>
        </>
    )

}
export default EditProfileComponent;