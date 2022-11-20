import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TuitItem from './TuitItem';
import TuitStates from './TuitStates.js';
import {findTuitsThunk} from "../../services/tuits-thunks.js";

const TuitsList = () => {
const {tuits, loading} = useSelector((state) => state.tuitsData)
const dispatch = useDispatch();
useEffect(() => {
    dispatch(findTuitsThunk())    //invoke find tuits thunk to fetch tuits and put them in reducer's store
    })

    return (
        <ul className="list-group ms-1 position-relatively">
            {
                loading &&
                <li className="list-group-item">
                    loading...
                </li>
            }
            {

            tuits.map((tuit) =>
                <li className="list-group-item d-flex flex-column">
                <div className="flex-row">
                <TuitItem
                    key={tuit._id}
                    tuit={tuit}/>
                </div>
                <div className="flex-row ps-3">
                <TuitStates
                    key={tuit._id}
                    tuit={tuit}/>
                </div>
                </li>)
            }
        </ul>
    );
};

export default TuitsList;