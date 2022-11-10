import {createSlice} from "@reduxjs/toolkit";
import profile from "./profile.json";

const profileSlice = createSlice({   //create the slice
    name: "profile",             //name the reducer
    initialState: profile  //initialize the reducer's state
});

export default profileSlice.reducer;