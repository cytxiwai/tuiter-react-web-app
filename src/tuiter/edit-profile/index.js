import {useSelector, useDispatch} from 'react-redux';
import {FaTimes} from "react-icons/fa"
import {useState} from 'react';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import {FloatingLabel, FormGroup, FormControl} from "react-bootstrap"
import {updateProfile} from '../profile/profile-reducer.js'


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
            fistName: firstName,
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
                            onclick={(e) => {
                                updateProfileHandler(e);
                            }}
                            className="float-end me-2 mb-1 btn btn-dark text-white btn-outline-none rounded-pill">
                             <Link to="../profile/" className="text-decoration-none">Save</Link>
                        </button>
                    </div>
                    <div className="w-100">
                        <img src={profile.bannerPicture} className="w-100 position-relatively" height="110px" alt=""/>
                    </div>
                    <div>
                        <img src={profile.profilePicture} className="rounded-circle ms-5 position-absolute wd-profileimg" width="140px" alt="" />
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
                        <a href="#" className="text-primary text-decoration-none">Edit</a>
                       </span>
                        <div>{dateOfBirth}</div>
                    </div>
                </div>
        </>
    )

}
export default EditProfileComponent;