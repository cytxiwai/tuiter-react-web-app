import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH } from "react-icons/fa";
import {Link} from "react-router-dom"
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
 return (
   <div className="list-group">
     <Link to="/tuiter/" className="list-group-item d-flex flex-row"><FaTwitter className="mt-1 me-2 mb-1"/><p className="d-none d-xl-block d-flex m-0">Tuiter</p></Link>
     <Link to="/tuiter/home" className={`list-group-item d-flex flex-row ${active === 'home'?'active':''}`}><FaHome className=" mt-1 me-2"/><p className="d-none d-xl-block d-flex m-0">Home</p></Link>
     <Link to="/tuiter/explore" className={`list-group-item d-flex flex-row ${active === 'explore'?'active':''}`}><FaHashtag className="mt-1 me-2"/><p className="d-none d-xl-block d-flex m-0">Explore</p></Link>
     <Link className={`list-group-item d-flex flex-row ${active === 'notifications'?'active':''}`}><FaBell className="mt-1 me-2"/><p className="d-none d-xl-block d-flex m-0">Notifications</p></Link>
     <Link className={`list-group-item d-flex flex-row ${active === 'messages'?'active':''}`}><FaEnvelope className="mt-1 me-2"/><p className="d-none d-xl-block d-flex m-0">Messages</p></Link>
     <Link className={`list-group-item d-flex flex-row ${active === 'bookmarks'?'active':''}`}><FaBookmark className="mt-1 me-2"/><p className="d-none d-xl-block d-flex m-0">Bookmarks</p></Link>
     <Link className={`list-group-item d-flex flex-row ${active === 'lists'?'active':''}`}><FaList className="mt-1 me-2"/><p className="d-none d-xl-block d-flex m-0">Lists</p></Link>
     <Link to="/tuiter/profile" className={`list-group-item d-flex flex-row ${active === 'profile'?'active':''}`}><FaUser className="mt-1 me-2"/><p className="d-none d-xl-block d-flex m-0">Profile</p></Link>
     <Link className={`list-group-item d-flex flex-row ${active === 'more'?'active':''}`}><FaEllipsisH className="mt-1 me-2"/><p className="d-none d-xl-block d-flex m-0">More</p></Link>
   </div>
 );
};
export default NavigationSidebar;

