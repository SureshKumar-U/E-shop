import { createSlice,current } from '@reduxjs/toolkit';
import { updateCart } from '../../utils/cartUtils';

const initialState = {
    user: JSON.parse(localStorage.getItem("userInfo")) || null, // Retrieve from localStorage or default to null
  };


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser(state, action) {
      const user = action.payload;
      state.auth = user;
      localStorage.setItem("userInfo", JSON.stringify(user));
    },
    
    deleteUser(state,action) {
      state.auth = "";
      localStorage.removeItem("userInfo",)
    },
  },
});

export const {saveUser,deleteUser} = authSlice.actions;
export default authSlice.reducer;
