import React from 'react';
import {useSelector} from "react-redux";
import TuitItem from './TuitItem';
import TuitStates from './TuitStates.js';

const TuitsList = () => {
const TuitArray = useSelector((state) => state.tuits)
    return (
        <ul className="list-group ms-1 position-relatively">
            {

            TuitArray.map((tuit) =>
                <li className="list-group-item d-flex flex-column">
                <div className="flex-row">
                <TuitItem
                    key={tuit.id}
                    tuit={tuit}/>
                </div>
                <div className="flex-row ps-3">
                <TuitStates
                    key={tuit.id}
                    tuit={tuit}/>
                </div>
                </li>)
            }
        </ul>
    );
};

export default TuitsList;