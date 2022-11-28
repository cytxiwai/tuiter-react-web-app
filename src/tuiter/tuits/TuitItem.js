import React from 'react';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks.js";


const TuitItem = (
    {
        tuit = {
            "_id": "234",
            "topic": "Space",
            "username": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "disliked":false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 0,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) => {

        const dispatch = useDispatch();
        const deleteTuitHandler = (id) => {
            dispatch(deleteTuitThunk(id))
        }
    return (
                            <>
                              <div className="d-flex float-start me-2 mt-3">
                                  <img alt="" width="40px" height="40px" className="rounded-circle" src={`/images/${tuit.image}`}/>
                               </div>
                              <div className="ms-2 d-flex flex-column mt-3">
                                  <div className="d-flex flex-row">
                                  <div className="fw-bold">{tuit.username} <span className="fw-normal text-secondary">{tuit.handle} • {tuit.time}</span></div>
                                  <i className="bi bi-x-lg d-flex flex-fill justify-content-end"

                                       onClick={() => deleteTuitHandler(tuit._id)}></i>

                                  </div>
                                  <div>{tuit.tuit} </div>
                              </div>
                              </>
    );
};

export default TuitItem;
