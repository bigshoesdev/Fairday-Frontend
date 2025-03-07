import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeMessage, getMessage, getMessageFromLocalStorage } from "src/utlies/localstorageManage";

const initialState = {
  messageList: [],
};

const messageBox = createSlice({
  name: "messageBox",
  initialState,
  reducers: {
    setMessageBox(state, { payload }: PayloadAction<any>) {
      state.messageList = payload;
    },
  },
});

const loadMessage = getMessage("message");

export const messageBoxHandle = (data): any => async (dispatch) => {
  return new Promise<void>((resolve, reject) => {
    try {
      dispatch(setMessageBox(data)); 
      resolve(); 
    } catch (error) {
      reject(error); 
    }
  });
};

export const removeMessageBox = (category, index): any => async (dispatch) => {
  return new Promise<void>((resolve, reject) => {
    try {
      dispatch(setMessageBox(removeMessage(category, index))); 
      resolve(); 
    } catch (error) {
      reject(error); 
    }
  });
};

export const getessageBox = (category): any => async (dispatch) => {
  return new Promise<void>((resolve, reject) => {
    try {
      dispatch(setMessageBox(getMessageFromLocalStorage(category))); 
      resolve(); 
    } catch (error) {
      reject(error); 
    }
  });
};

export const { setMessageBox } = messageBox.actions;

export default messageBox.reducer;
    