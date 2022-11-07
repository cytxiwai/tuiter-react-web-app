import React from 'react';
import {useSelector} from "react-redux";
import TuitItem from './TuitItem';

const TuitsList = () => {
const TuitArray = useSelector((state) => state.tuits)
    return (
        <ul className="list-group ms-1">
            {
            TuitArray.map((tuit) =>
                <TuitItem
                    key={tuit.id}
                    tuit={tuit}/>)
            }
        </ul>
    );
};

export default TuitsList;