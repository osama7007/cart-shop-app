import { createSlice } from "@reduxjs/toolkit";
import { Navigate, Outlet } from "react-router-dom";

const initialState = {
    isAuth : false,
}

export const authSlice = createSlice({
    name : 'auth' , 
    initialState , 
    reducers :{
        loggedIn : (state)=>{
             state.isAuth = true;
        },
        LoggedOut : (state)=>{
           state.isAuth = false; 
        },

    }
});
export const {loggedIn , LoggedOut} = authSlice.actions
