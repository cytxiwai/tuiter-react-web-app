import {createSlice} from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

const whoSlice = createSlice({   //create the slice
    name: "who",             //name the reducer
    initialState: whoArray  //initialize the reducer's state
});

export default whoSlice.reducer;