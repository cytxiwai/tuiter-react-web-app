import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName: 'Bob',
    lastName: 'Hope',
    username: 'bob@hope.com'
}

//const currentUserReducer = () => {
  //  return initialState
//}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: initialState})
export default currentUserSlice.reducer;