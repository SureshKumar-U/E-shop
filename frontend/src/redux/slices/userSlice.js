import { createSlice,current } from '@reduxjs/toolkit';
import { updateCart } from '../../utils/cartUtils';

const initialState = {
    user: JSON.parse(localStorage.getItem("userInfo")) || null, // Retrieve from localStorage or default to null
  };


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser(state, action) {
      const user = action.payload;
      state.user = user;
      localStorage.setItem("userInfo", JSON.stringify(user));
    },
    
    deleteUser(state,action) {
      state.user = "";
      localStorage.removeItem("userInfo",)
    },
  },
});

export const {saveUser,deleteUser} = userSlice.actions;
export default userSlice.reducer;
