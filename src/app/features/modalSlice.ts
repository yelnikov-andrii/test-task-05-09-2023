import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
  },
  reducers: {
    setIsVisible: (state) => {
     state.isVisible = true;
    },
    setIsInvisible: (state) => {
      state.isVisible = false;
    }  
  }
});

export default modalSlice.reducer;
export const { setIsVisible, setIsInvisible } = modalSlice.actions;