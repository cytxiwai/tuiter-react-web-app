import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "../images/nasa-logo.png",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const tuitsSlice = createSlice(
    {
    name: 'tuits',
    initialState: tuits,

     reducers: {
     likeTuit(state, action){
             const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
             state[tuitIndex].liked = true;
             state[tuitIndex].likes += 1;
         },

     unlikeTuit(state, action){
             const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
             state[tuitIndex].liked = false;
             state[tuitIndex].likes -= 1;
         },

        createTuit(state, action) {
         state.unshift({
           ...action.payload,
           ...templateTuit,
           _id: (new Date()).getTime(),
         })
        },

           deleteTuit(state, action) {
             const index = state
                .findIndex(tuit =>
                   tuit._id === action.payload);
             state.splice(index, 1);
           }


     }

    });
export const {likeTuit, unlikeTuit, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
