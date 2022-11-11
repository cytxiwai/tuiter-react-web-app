import {createSlice} from "@reduxjs/toolkit";
import profile from "./profile.json";

const profileSlice = createSlice({   //create the slice
    name: "profile",             //name the reducer
    initialState: profile,  //initialize the reducer's state
    reducers: {
        updateProfile(state, action) {
            state = action.payload;
        }
    }
});

export const{updateProfile} = profileSlice.actions
export default profileSlice.reducer;