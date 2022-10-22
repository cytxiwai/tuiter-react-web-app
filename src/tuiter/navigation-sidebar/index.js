import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'


const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">
     <a className="list-group-item"><i className="fab fa-twitter" className="d-flex justify-content-start align-items-center me-2"></i>Tuiter</a>
     <a className={`list-group-item ${active === 'home'?'active':''}`}><FontAwesomeIcon icon="fa-solid fa-house-chimney" className="d-flex-row justify-content-start align-items-center me-2"/>Home</a>
     <a className={`list-group-item ${active === 'explore'?'active':''}`}>Explore</a>
     <a className={`list-group-item ${active === 'notifications'?'active':''}`}>Notifications</a>
     <a className={`list-group-item ${active === 'messages'?'active':''}`}>Messages</a>
     <a className={`list-group-item ${active === 'bookmarks'?'active':''}`}>Bookmarks</a>
     <a className={`list-group-item ${active === 'lists'?'active':''}`}>Lists</a>
     <a className={`list-group-item ${active === 'profile'?'active':''}`}>Profile</a>
     <a className={`list-group-item ${active === 'more'?'active':''}`}>More</a>
   </div>
 );
};
export default NavigationSidebar;

