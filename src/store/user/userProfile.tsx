import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const userProfileConfigSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setUserProfileList(state, { payload }) {
      console.log("setUserProfileList");
    }
  },
});

export const {
  setUserProfileList
} = userProfileConfigSlice.actions;

export default userProfileConfigSlice.reducer;
