import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  isDarkMode: false,
  advertiseDetails:[],
  jobConstManage: [],
  loading: false,
  error: null,
};

const advertisementConfigSlice = createSlice({
  name: "advertisement",
  initialState: initialState,
  reducers: {
    configLoading(state) {
      state.loading = true;
    },
    configError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
    constAdvertiseDetailsRead(state, { payload }: PayloadAction<object[]>) {
      state.advertiseDetails = payload;
      state.loading = false;
    },
  },
});


export const publishAdvertise = (data) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("http://localhost:8000/api/v1/user/advertise/publish-advertise", data);
    dispatch(constAdvertiseDetailsRead(response.data));
  } catch (error: any) {
    dispatch(configError(error.message || "Failed to fetch data"));
  }
};


export const getAllAdvertisements = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("http://localhost:8000/api/v1/user/advertise/get-all-advertisements");
    dispatch(constAdvertiseDetailsRead(response.data));
  } catch (error: any) {
    dispatch(configError(error.message || "Failed to fetch data"));
  }
};


export const {
  configLoading,
  configError,
  constAdvertiseDetailsRead
} = advertisementConfigSlice.actions;

export default advertisementConfigSlice.reducer;