import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import axios from "axios";
import { messageBoxHandle } from "src/store/systemSetting/messageBoxSlice";
import { setMessage } from 'src/utlies/localstorageManage'
interface JobConfigState {
  appProfileDetails: object[];
  loading: boolean;
  error: any;
  bufferLink: string | null;
  decodedIdentify: string | null;
  confirmMail: any;
}

const initialState: JobConfigState = {
  appProfileDetails: [],
  loading: false,
  bufferLink: null,
  confirmMail: [],
  error: null,
  decodedIdentify: null,
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
    confirmMailRead(state, { payload }: PayloadAction<object[]>) {
      state.confirmMail = payload;
      state.loading = false;
    },
    configError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
    setBufferLink(state, { payload }: PayloadAction<any>) {
      state.bufferLink = payload;
    },
    setDecodedToken(state, { payload }: PayloadAction<any>) {
      state.decodedIdentify = payload;
    },
  },
});


export const registerAppProfile = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/user/appProfile/register-profile", data);
    if (response.data.isOkay) {
      dispatch(setBufferLink(response.data.bufferLink))
      let currentMessage = setMessage('messageList', 'applicantprofile', response.data.message)
      dispatch(messageBoxHandle(currentMessage))
      dispatch(constAppProfileDetailsRead(response.data));
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
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/user/appProfile/view-profile", userId);
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


export const confirmMail = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/confirm/verify", data);
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



export const {
  configLoading,
  configError,
  constAppProfileDetailsRead,
  setBufferLink,
  setDecodedToken,
  confirmMailRead
} = appProfileSliceConfig.actions;

export default appProfileSliceConfig.reducer;
