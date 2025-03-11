import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import { messageBoxHandle } from "src/store/systemSetting/messageBoxSlice";
import { getMessage, setMessage, removeMessage } from 'src/utlies/localstorageManage'

const initialState = {
  isDarkMode: false,
  advertiseDetails: [],
  jobConstManage: [],
  loading: false,
  error: null,
  bufferLink: null,
  adDetails: [],
  decodedToken: [],
  confirmMail: [],
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
    confirmMailRead(state, { payload }: PayloadAction<object[]>) {
      state.confirmMail = payload;
      state.loading = false;
    },
    setBufferLink(state, { payload }: PayloadAction<any>) {
      state.bufferLink = payload;
    },
    constAdDetailsRead(state, { payload }: PayloadAction<object[]>) {
      state.adDetails = payload;
      state.loading = false;
    },
    setDecodedToken(state, { payload }: PayloadAction<any>) {
      state.decodedToken = payload;
    },
  },
});


export const publishAdvertise = (data) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/user/advertise/publish-advertise", data);
    if (response.data.isOkay) {
      dispatch(setBufferLink(response.data.bufferLink))
      let currentMessage = setMessage('messageList', 'advertisement', response.data.message)
        dispatch(messageBoxHandle(currentMessage))
      dispatch(constAdDetailsRead(response.data));
    } else {
      dispatch(configError(response.data.error))
      dispatch(messageHandle({ type: "error", message: response.data.message }));
    }
  } catch (error: any) {
    dispatch(messageHandle({ type: "error", message: "Failed to fetch data" }));
  }
};


export const getAllAdvertisements = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/user/advertise/get-all-advertisements");
    dispatch(constAdvertiseDetailsRead(response.data));
  } catch (error: any) {
    dispatch(configError(error.message || "Failed to fetch data"));
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
  constAdvertiseDetailsRead,
  confirmMailRead,
  setBufferLink,
  constAdDetailsRead,
  setDecodedToken

} = advertisementConfigSlice.actions;

export default advertisementConfigSlice.reducer;