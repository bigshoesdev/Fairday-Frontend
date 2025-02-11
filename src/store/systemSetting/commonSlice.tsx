import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageNotification: null,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setMessageNotification(state, action) {
      state.messageNotification = action.payload; 
    },
  },
});

export const messageHandle = (data) => async (dispatch) => {
  return new Promise<void>((resolve, reject) => {
    try {
      dispatch(setMessageNotification(data)); 
      resolve(); 
    } catch (error) {
      reject(error); 
    }
  });
};

export const { setMessageNotification } = commonSlice.actions;

export default commonSlice.reducer;
