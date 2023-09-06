import { configureStore } from '@reduxjs/toolkit';
import listSlice from '../features/listSlice';
import modalSlice from '../features/modalSlice';

export default configureStore({
  reducer: {
    list: listSlice,
    mymodal: modalSlice,
  },
})