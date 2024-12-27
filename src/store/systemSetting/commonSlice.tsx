import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messageNotification: null, // Holds the message notification
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setMessageNotification(state, action) {
      console.log('setMessageNotification', action);
      
      state.messageNotification = action.payload; // Update the state with the payload
    },
  },
});

// Thunk for handling message notification
export const messageHandle = (data) => async (dispatch) => {
  return new Promise<void>((resolve, reject) => {
    try {
      dispatch(setMessageNotification(data)); // Dispatch action with the provided data
      resolve(); // Resolve the promise if successful
    } catch (error) {
      reject(error); // Reject the promise in case of an error
    }
  });
};

// Export the action creator
export const { setMessageNotification } = commonSlice.actions;

// Export the reducer
export default commonSlice.reducer;
