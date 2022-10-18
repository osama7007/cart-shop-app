import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    counter :0,
}

export const counterSlice = createSlice({
    name : 'counter',
    initialState , 
    reducers :{
        increment : (state)=>{
           
            state.counter  = state.counter + 1 ;
        },
        decrement : (state)=>{
             if (state.counter>0) state.counter = state.counter - 1;
        },
        reset : (state)=>{
            state.counter  = 0 ;
        }
    }
})
export const { reset, increment, decrement } = counterSlice.actions;