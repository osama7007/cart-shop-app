import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartProducts: [],
	cartCount: 0,
};

export const cartSlice = createSlice({
    name : 'cart' , 
    initialState , 
    reducers : {
        addToCart : (state , action)=>{ // action is product object
            state.cartCount = state.cartProducts.length+1;
             let productIdex =  state.cartProducts.findIndex(product=>product.id === action.payload.id)
                if (productIdex < 0)
                 state.cartProducts.push(action.payload);
        }, 
        deleteProduct : (state ,action)=>{// action is product id
           state.cartCount -= 1;
           console.log(state.cartProducts);
            let deletedId = state.cartProducts.findIndex((product) => 
                    product.id === action.payload
			    );
            state.cartProducts.splice(deletedId,1);
        },
    }
})

export const {addToCart , deleteProduct} = cartSlice.actions