import {useSelector, useDispatch} from 'react-redux';
import {deleteTuit, addTuit, likeTuit, unlikeTuit, updateTuit} from './tuits-reducer';
import {useState} from 'react';

const Tuits = () => {
    const [tuitString, setTuiteString] = useState('New Tuit')
    const [tuitBeingEdited, setTuitBeingEdited] = useState(null)
    const tuits = useSelector(state => state.tuits)
    const dispatch = useDispatch();

    const deleteTuitHandler = (tuit) => {
        dispatch(deleteTuit(tuit))
    }

    const addTuitHandler = () => {
     dispatch(addTuit(tuitString))
    }

    const likeTuitHandler = (tuit) => {
      dispatch(likeTuit(tuit))
    }

    const unlikeTuitHandler = (tuit) => {
       dispatch(unlikeTuit(tuit))
    }

    const updateTuitHandler = (tuit, newTuitText) => {
        dispatch(updateTuit({...tuit, tuit: newTuitText}));
    }

    return(
        <>
        <h3>Tuits</h3>
        <ul className="list-group">
            <li className="list-group-item">
                <input
                    onChange={(e) => setTuiteString(e.target.value)}
                    value={tuitString}/>
                <button className="btn btn-primary rounded-pill float-end" onClick={() => addTuitHandler(tuits)}>Tuit</button>
            </li>
            {
            tuits.map (tuit =>
                <li className="list-group-item">

                {
                    tuit !== tuitBeingEdited &&
                    <button
                        onClick={() => setTuitBeingEdited(tuit)}
                        className="btn btn-success float-end ms-2">
                       Edit
                    </button>
                }
                {
                    tuit === tuitBeingEdited &&
                    <button
                        onClick={() => setTuitBeingEdited(null)}
                        className="btn btn-primary float-end ms-2">Done
                     </button>
                 }

                <button
                onClick={() => deleteTuitHandler(tuit)}
                    className="btn btn-danger float-end ms-2">Delete</button>

                {
                    !tuit.liked &&
                    <button
                    onClick={() => likeTuitHandler(tuit)}
                    className="btn float-end">
                    Like ({tuit.likes})
                    </button>
                }
                {
                    tuit.liked &&
                    <button
                    onClick= {() => unlikeTuitHandler(tuit)}
                    className="btn btn-danger float-end">
                        Liked ({tuit.likes})
                    </button>
                }

                {
                    tuit !== tuitBeingEdited &&
                    <span>{tuit.tuit}</span>
                 }
                {
                    tuit === tuitBeingEdited &&
                    <input
                    onchange={(e) => updateTuitHandler(tuit, e.target.value)}
                    value={tuit.tuit}/>
                }

                </li>
            )}
            </ul>
        </>
    )
}

export default Tuits;