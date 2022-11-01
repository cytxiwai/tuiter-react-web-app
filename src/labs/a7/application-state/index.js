import Tuits from './tuits';
import ProfileScreen from './profile-screen';
import BillingScreen from './billing-screen';
import currentUserReducer from './current-user';
import tuitsReducer from './tuits-reducer'
import {Provider} from "react-redux";
//import{createStore, combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

//const masterReducer = combineReducers({
  //  currentUser: currentUserReducer,
    //tuits: tuitsReducer
    //})
//const store = createStore(masterReducer);

const store = configureStore({
    reducer: {
    currentUser: currentUserReducer,
    tuits: tuitsReducer,
    }
    })

const ApplicationState = () => {
    return(
        <>
        <Provider store={store}>
            <h3>ApplicationState</h3>
            <Tuits/>
            <ProfileScreen/>
            <BillingScreen/>
        </Provider>

        </>

    )
}

export default ApplicationState;