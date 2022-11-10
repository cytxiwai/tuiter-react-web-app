import {useSelector, useDispatch} from 'react-redux';
import {FaTimes} from "react-icons/fa"
import {useState} from 'react';
import {Link} from 'react-router-dom'


const EditProfile = () => {
const profile = useSelector(state => state.profile)
    const [bio, setBio] = useState('Bio');
    const [firstName, setFirstName] = useState('Teena');
    const [lastName, setLastName] = useState('C');
    const [location, setLocation] = useState('San Jose, CA');
    const [website, setWebsite] = useState('www.123.com');
    const [bday, setBDay] = useState('11/11/1111');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //setInputs(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        //alert(inputs);
      }



    return(
        <>
        {profile.map((profile) =>
                <div>
                    <div>
                        <button type="button" className="float-start btn btn-white pb-1"><FaTimes/></button>
                        <div className="float-start pt-2 mb-0"> Edit profile</div>
                        <button className="float-end me-2 mb-1 btn btn-white btn-outline-dark rounded-pill">
                             <Link to="../edit-profile" className="text-decoration-none text-dark">Save</Link>
                        </button>
                    </div>
                    <div className="w-100">
                        <img src={profile.bannerPicture} className="w-100 position-relatively" height="110px" alt="Responsive image"/>
                    </div>
                    <div>
                        <img src={profile.profilePicture} className="rounded-circle ms-5 position-absolute wd-profileimg" width="140px" alt="" />
                    </div>

                    <form className="mt-5 pt-4" onSubmit={handleSubmit}>
                        <label for="firstName"> First Name </label>
                        <input
                            id="firstName"
                            type="text"
                            className="me-2"
                            onChange={
                                (e) => setFirstName(e.target.value)
                                }
                            value={firstName}/>

                        <label for="lastName"> Last Name </label>
                        <input
                            id="lastName"
                            type="text"
                            onChange={
                                (e) => setLastName(e.target.value)
                                }
                            value={lastName}
                            />



                        <label for="bio"> Bio </label>
                        <textarea
                                 id='bio'
                                className="mt-3"
                                value={bio}
                                onChange={
                                (e) => setBio(e.target.value)
                                }>
                        </textarea>

                        <br/>

                        <label for="Location"> Location </label>
                        <input
                            className="mt-2"
                            onChange={
                                 (e) => setLocation(e.target.value)}
                            value={location} />

                        <br/>

                        <label for="website"> Website </label>
                        <input
                            id="website"
                            className="mt-2"
                            onChange={
                                  (e) => setWebsite(e.target.value)
                                  }
                            value={website} />

                        <br/>

                        <label for="bday"> Date of Birth </label>
                        <input
                        className="mt-2"
                            onChange={
                                (e) => setBDay(e.target.value)
                                }
                            value={bday}
                            />

                    </form>

                    </div>

                )
                }
        </>
    )

}
export default EditProfile;