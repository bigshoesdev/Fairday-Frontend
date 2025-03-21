import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const homeConfigSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setHomeList(state, { payload }) {
    }
  },
});

export const {
  setHomeList
} = homeConfigSlice.actions;

export default homeConfigSlice.reducer;
