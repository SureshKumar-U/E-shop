import { createSlice,current } from '@reduxjs/toolkit';

const initialState = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) :{cartItems : []}

console.log(initialState)
const toDecimal = (num)=>{
  return Number(Math.round(num * 100) / 100).toFixed(2)
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
     console.log(newItem)
      
      const existingItem = state.cartItems.find(item => item._id == newItem._id);
      if(existingItem){
         state.cartItems = state.cartItems.map((item) => item._id === newItem._id ? newItem: item)
      }
      else{
        state.cartItems =[...state.cartItems, newItem]
      }
      // calculte items price
      state.itemsPrice = toDecimal(state.cartItems.reduce((acc,item)=> (acc + (Number(item.price) * item.qty )),0))
      // calculate taxprice
      state.taxPrice =  Number((0.15 * state.itemsPrice).toFixed(2))
      // calculate shipping price
      state.shippingPrice = state.itemsPrice > 100 ? 0 : 10

      localStorage.setItem("cartItems", JSON.stringify(state))
    },
    removeItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item._id != id);
      localStorage.setItem("cartItems", JSON.stringify(state))
    },
    clearCart(state,action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify({cartItems:[]}))
    },
  },
});

export const {addItem, removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
