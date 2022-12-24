import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
};

const userSlice = createSlice({
    name: user,
    initialState
    reducers: {
        setCurrentUser: (state, action) => {
            console.log('...state', action.payload);
        };
    
    }
});