import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import axios from "axios";

interface businessProfileConfigState {
  businessProfileDetails: object[];
  loading: boolean;
  error: any;
}

const initialState: businessProfileConfigState = {
  businessProfileDetails: [],
  loading: false,
  error: null,
};

const BusinessProfileSliceConfig = createSlice({
  name: "BusinessappProfile",
  initialState: initialState,
  reducers: {
    configLoading(state) {
      state.loading = true;
    },
    constBusinessProfileDetailsRead(state, { payload }: PayloadAction<object[]>) {
      state.businessProfileDetails = payload;
      state.loading = false;
    },
    configError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
  },
});


// export const registerBusinessProfile = (data: any) => async (dispatch: any): Promise<any> => {
//   try {
//     dispatch(configLoading());
//     const response = await axios.post("http://localhost:8000/api/v1/user/businessProfile/register-profile", data);
//     if (response.data.isOkay) {
//       dispatch(constBusinessProfileDetailsRead(response.data));
//       dispatch(messageHandle({ type: "success", message: response.data.message }));
//     } else {
//       dispatch(configError(response.data.error))
//       dispatch(messageHandle({ type: "error", message: response.data.message }));
//     }

//   } catch (error: any) {
//     dispatch(messageHandle({ type: "error", message: "Failed to fetch data" }));
//   }
// };

export const registerBusinessProfile = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("http://localhost:8000/api/v1/user/businessProfile/register-profile", data);

    if (response.data.isOkay) {
      dispatch(constBusinessProfileDetailsRead(response.data)); 
      dispatch(messageHandle({ type: "success", message: response.data.message }));
      return response.data;
    } else {
      dispatch(configError(response.data.error));
      dispatch(messageHandle({ type: "error", message: response.data.message }));
      return null;
    }
  } catch (error: any) {
    dispatch(messageHandle({ type: "error", message: "Failed to fetch data" }));
    return null;
  }
};


export const viewBusinessProfile = (userId: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("http://localhost:8000/api/v1/user/businessProfile/view-profile", userId);
    if (response.data.isOkay) {

      dispatch(constBusinessProfileDetailsRead(response.data.result));
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
  constBusinessProfileDetailsRead,
} = BusinessProfileSliceConfig.actions;

export default BusinessProfileSliceConfig.reducer;
