import {useState} from 'react';

const ComponentState = () => {
    const [count, setCount] = useState(123);
    const [email, setEmail] = useState('alice@wonderland.com');
    const [editingEmail, setEditingEmail] = useState(false)
    const [bio, setBio] = useState('blablabla');
    const [showBio, setShowBio] = useState(true);
    const [profile, setProfile] = useState({
    firstNmae: 'Alice', lastName:'Wondrland',
    username: 'alice123', password:'P@ssw0rd'})


   const changeEmail = (event) => {
        const newEmail = event.target.value
            setEmail(newEmail);
   }

    const up = () => {
        setCount(count + 1);
    };

    const down = () => {
        setCount(count - 1);
    };

    const setFirstName = (e) => {
       const newFirstName = e.target.value;
       const newProfile = {
       firstName: newFirstName, lastName: profile.lastName,
       username: profile.username, password: profile.password}
       setProfile(newProfile)}

    const setLastName = (e) => {
       const newLastName = e.target.value;
       const newProfile = {
       ...profile,
       lastName: newLastName,}
       setProfile(newProfile)}


    return (
        <>
            <h3>Component state</h3>

            <h4>Objects</h4>

            First Name: <input
            onChange={setFirstName}
            value={profile.firstName}/><br/>

            Last Name: <input
            onChange={setLastName}
            value={profile.lastName}/><br/>
            Username: <input value={profile.username}/><br/>
            Password: <input value={profile.password} type="password"/><br/>
            <pre>
                {JSON.stringify(profile, null, 2)}
            </pre>

            <hr/>
            <input type="checkbox"
            onChange={(e) => setShowBio(e.target.checked)}
            checked={showBio}/>
            {
            showBio &&
                <>
                <h4>Bio</h4>
                <textarea
                    value={bio}
                    onChange={
                        (e) => setBio(e.target.value)
                     }>
                </textarea>
                </>            }


            <h4>Email</h4>
             <input type="checkbox"
                    onChange={(e) =>setEditingEmail(e.target.checked)}
                    checked={editingEmail}/>
                    {
                    editingEmail && <input value={email} onChange={changeEmail}/>
                    }
                    {
                    !editingEmail && <span>{email}</span>
                    }

            <h4>Counter</h4>
            count = {count}
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>
            <h1> Email = {email}</h1>

        </>
    )
}
export default ComponentState;