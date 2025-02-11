import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import axios from "axios";

interface SupportConfigState {

  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;

  loading: boolean;
  error: string | null;
}

const initialState: SupportConfigState = {

  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  message: '',

  loading: false,
  error: null,
};

const supportConfigSlice = createSlice({
  name: "support",
  initialState: initialState,
  reducers: {
    loading(state, { payload }: PayloadAction<boolean>) {
      state.loading = payload;
    },
    error(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
    updateValue(state, { payload }: PayloadAction<any>) {
      state[payload.key] = payload.value;
    },
  },
});

export const supportCreate = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(loading(true));

    const response = await axios.post("http://localhost:8000/api/v1/admin/support/create", data);
    dispatch(messageHandle({ type: response.data.isOkay ? "success" : "error", message: response.data.message }));
    
    if(response.data.isOkay){
      let keyResult = Object.keys(data).map((key) => key)
      keyResult.forEach(key => dispatch(updateValue({  key: [key], value: ""})) );
    }

    dispatch(loading(false));
  } catch (error: any) {
    dispatch(error("Failed to fetch data"));
  }
};

export const updateCurrentJobData = (data: any) => async (dispatch: any): Promise<any> => {
  dispatch(updateValue(data));
};

export const {
  updateValue,
  loading,
  error
} = supportConfigSlice.actions;

export default supportConfigSlice.reducer;
