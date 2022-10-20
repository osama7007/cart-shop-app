import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from './counterSlice';
import { cartSlice } from "./cartSlice";
import { authSlice } from "./auth";
export const store = configureStore({
	reducer: {
		counterStore: counterSlice.reducer,
		cartStore: cartSlice.reducer,
		authStore: authSlice.reducer
	},
});