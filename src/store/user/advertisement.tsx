import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const advertisementConfigSlice = createSlice({
  name: "advertisement",
  initialState: initialState,
  reducers: {
    setAdvertisementList(state, { payload }) {
    }
  },
});

export const {
  setAdvertisementList
} = advertisementConfigSlice.actions;

export default advertisementConfigSlice.reducer;