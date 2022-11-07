import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json";

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
         }

     },

    });
export const {likeTuit, unlikeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
