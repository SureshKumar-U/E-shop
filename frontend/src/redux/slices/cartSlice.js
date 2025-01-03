import { createSlice,current } from '@reduxjs/toolkit';
import { updateCart } from '../../utils/cartUtils';

const initialState = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :{cartItems : []}


const toDecimal = (num)=>{
  return Number((Math.round(num * 100) / 100).toFixed(2))
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item._id == newItem._id);
      if(existingItem){
         state.cartItems = state.cartItems.map((item) => item._id === newItem._id ? newItem: item)
      }
      else{
        state.cartItems =[...state.cartItems, newItem]
      }
      updateCart(state)
    },
    removeItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item._id != id);
              
      updateCart(state)
    },
    clearCart(state,action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify({cartItems:[]}))
    },
  },
});

export const {addItem, removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
