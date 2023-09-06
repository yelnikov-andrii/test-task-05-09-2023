import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: [] as User[],
    selectedUserId: null,
  },
  reducers: {
    addUser: (state, action) => {
     state.list = [...state.list, action.payload];
    },
    removeUser: (state, action) => {
      state.list = [...state.list].filter(item => item.id !== action.payload);
    },
    updateUser: (state, action) => {
    const foundUser = state.list.find((listItem: User) => listItem.id === action.payload.id);
    if (foundUser) {
      foundUser.name = action.payload.name;
    }
    },
    selectUser: (state, action) => {
      state.selectedUserId = action.payload;
    }  
  }
});

export default listSlice.reducer;
export const { addUser, removeUser, selectUser, updateUser } = listSlice.actions;