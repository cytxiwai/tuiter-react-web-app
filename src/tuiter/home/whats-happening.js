import React, {useState} from "react";
import {createTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";


const WhatsHappening = () => {
 let [whatsHappening, setWhatsHappening] = useState('');
 const dispatch = useDispatch();

 const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening,
      _id: "Teena C",
      handle:"@teenac",
      likes: 0,
      dislikes: 0,
      replies: 0,
      retuits: 0,
      time: "just now",
      image:"img.png",
      liked: false,
      disliked: false
    }
    dispatch(createTuitThunk(newTuit));

   console.log(whatsHappening);
 }

 return (
   <div className="row">
     <div className="col-auto">
       <img alt="" src="../../images/img.png" width={60} className="rounded-circle"/>
     </div>
     <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
               className="form-control border-0"
               onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
       <div>
         <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                 onClick={tuitClickHandler}>
           Tuit
         </button>
         <div className="text-primary fs-2">
           <i className="bi bi-card-image me-3"></i>
           <i className="bi bi-filetype-gif me-3"></i>
           <i className="bi bi-bar-chart me-3"></i>
           <i className="bi bi-emoji-smile me-3"></i>
           <i className="bi bi-geo-alt"></i>
         </div>
       </div>
     </div>
     <div className="col-12"><hr/></div>
   </div>
 );
}
export default WhatsHappening;

