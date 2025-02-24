import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import axios from "axios";

interface JobConfigState {
  appProfileDetails: object[];
  loading: boolean;
  error: any;
}

const initialState: JobConfigState = {
  appProfileDetails: [],
  loading: false,
  error: null,
};

const appProfileSliceConfig = createSlice({
  name: "appProfile",
  initialState: initialState,
  reducers: {
    configLoading(state) {
      state.loading = true;
    },
    constAppProfileDetailsRead(state, { payload }: PayloadAction<object[]>) {
      state.appProfileDetails = payload;
      state.loading = false;
    },
    configError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
  },
});


export const registerAppProfile = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("https://fairdayjobs.com/api/v1/user/appProfile/register-profile", data);
    if (response.data.isOkay) {
      dispatch(constAppProfileDetailsRead(response.data));
      dispatch(messageHandle({ type: "success", message: response.data.message }));
    } else {
      dispatch(configError(response.data.error))
      dispatch(messageHandle({ type: "error", message: response.data.message }));
    }

  } catch (error: any) {
    dispatch(messageHandle({ type: "error", message: "Failed to fetch data" }));
  }
};



export const viewAppProfile = (userId: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("https://fairdayjobs.com/api/v1/user/appProfile/view-profile", userId);
    if (response.data.isOkay) {
      dispatch(constAppProfileDetailsRead(response.data.result));
    } else {
      dispatch(configError(response.data.error))
      dispatch(messageHandle({ type: "error", message: response.data.message }));
    }

  } catch (error: any) {
    dispatch(messageHandle({ type: "error", message: "Failed to fetch data" }));
  }
};


export const {
  configLoading,
  configError,
  constAppProfileDetailsRead,
} = appProfileSliceConfig.actions;

export default appProfileSliceConfig.reducer;
