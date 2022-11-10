import {useSelector} from 'react-redux';
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
    //const [editing, setEditing] = useState(true)



    const handleSubmit = (event) => {
        //event.preventDefault();
        //alert(inputs);
      }



    return(
        <>
        {profile.map((profile) =>
                <div>
                    <div>
                        <button
                            onclick={() => setEditing(false)}
                            type="button" className="float-start btn btn-white pb-1">
                            <Link to="../profile/" className="text-decoration-none text-dark"><FaTimes/></Link></button>
                        <div className="float-start pt-2 mb-0"> Edit profile</div>
                        <button
                            onclick={() => setEditing(true)}
                            className="float-end me-2 mb-1 btn btn-white btn-outline-dark rounded-pill">
                             <Link to="../profile/" className="text-decoration-none text-dark">Save</Link>
                        </button>
                    </div>
                    <div className="w-100">
                        <img src={profile.bannerPicture} className="w-100 position-relatively" height="110px" alt=""/>
                    </div>
                    <div>
                        <img src={profile.profilePicture} className="rounded-circle ms-5 position-absolute wd-profileimg" width="140px" alt="" />
                    </div>

                    <form className="mt-5 pt-4" onSubmit={handleSubmit}>
                       <ul className="list-group">
                        <li className="list-group-item">
                            <label for="firstName" className="me-2"> First Name </label>
                            <input
                                id="firstName"
                                type="text"
                                className="me-2"
                                onChange={
                                    (e) => setFirstName(e.target.value)
                                    }
                                value={firstName}/>
                        </li>
                        <li className="list-group-item">
                            <label for="lastName"className="me-2"> Last Name </label>
                            <input
                                id="lastName"
                                type="text"
                                onChange={
                                    (e) => setLastName(e.target.value)
                                    }
                                value={lastName}
                                />
                        </li>
                        <li className="list-group-item">
                            <label for="bio" className="me-2"> Bio </label>
                            <textarea
                                     id='bio'
                                    className="mt-3"
                                    value={bio}
                                    onChange={
                                    (e) => setBio(e.target.value)
                                    }>
                            </textarea>
                        </li>
                        <li className="list-group-item">
                        <label for="Location" className="me-2"> Location </label>
                        <input
                            className="mt-2"
                            onChange={
                                 (e) => setLocation(e.target.value)}
                            value={location} />
                        </li>
                        <li className="list-group-item">
                        <label for="website" className="me-2"> Website </label>
                        <input
                            id="website"
                            className="mt-2"
                            onChange={
                                  (e) => setWebsite(e.target.value)
                                  }
                            value={website} />
                        </li>
                        <li className="list-group-item">
                            <label for="bday" className="me-2"> Date of Birth </label>
                            <input
                            className="mt-2"
                                onChange={
                                    (e) => setBDay(e.target.value)
                                    }
                                value={bday}
                                />
                        </li>
                       </ul>
                    </form>
                    </div>

                )
                }
        </>
    )

}
export default EditProfile;