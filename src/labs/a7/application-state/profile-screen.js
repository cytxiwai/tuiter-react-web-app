import {useSelector} from 'react-redux';
const ProfileScreen = () => {
const currentUser = useSelector((state) => state.currentUser)
    return (
        <>
        <h4>Profile Screen</h4>
        {currentUser.firstName}
        </>
    )
}

export default ProfileScreen;