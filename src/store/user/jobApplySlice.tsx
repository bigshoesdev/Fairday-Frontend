import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import { messageBoxHandle } from "src/store/systemSetting/messageBoxSlice";
import { getMessage, setMessage, removeMessage } from 'src/utlies/localstorageManage'

const initialState = {
  isDarkMode: false,
  loading: false,
  error: null,
  applyJobDetail: [],

};

const jobApplySlice = createSlice({
  name: "jobapply",
  initialState: initialState,
  reducers: {
    configLoading(state) {
      state.loading = true;
    },
    configError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },

  },
});


export const applyJob = (data) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("http://localhost:8000/api/v1/user/job/apply-job", data);
    if (response.data.isOkay) {

      dispatch(messageHandle({ type: "success", message: response.data.message }));

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

} = jobApplySlice.actions;

export default jobApplySlice.reducer;