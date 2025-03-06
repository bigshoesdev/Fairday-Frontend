import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import axios from "axios";

interface businessProfileConfigState {
  businessProfileDetails: object[];
  loading: boolean;
  bufferLink: string | null;
  error: any;
  decodedIdentify: string | null;
  confirmMail: any;
}

const initialState: businessProfileConfigState = {
  businessProfileDetails: [],
  loading: false,
  error: null,
  bufferLink: null,
  confirmMail: [],
  decodedIdentify: null,
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
    confirmMailRead(state, { payload }: PayloadAction<object[]>) {
      state.confirmMail = payload;
      state.loading = false;
    },
    setBufferLink(state, { payload }: PayloadAction<any>) {
      state.bufferLink = payload;
    },
    setDecodedToken(state, { payload }: PayloadAction<any>) {
      state.decodedIdentify = payload;
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
      dispatch(setBufferLink(response.data.bufferLink))
      dispatch(constBusinessProfileDetailsRead(response.data));
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


export const confirmMail = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("http://localhost:8000/api/v1/confirm/verify", data);
    if (response.data.isOkay) {
      dispatch(confirmMailRead(response.data));
    } else {
      dispatch(configError(response.data.error))
      dispatch(messageHandle({ type: "error", message: response.data.message }));
    }

  } catch (error: any) {
    dispatch(messageHandle({ type: "error", message: "Failed to fetch data" }));
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
  confirmMailRead,
  setDecodedToken,
  setBufferLink
} = BusinessProfileSliceConfig.actions;

export default BusinessProfileSliceConfig.reducer;
