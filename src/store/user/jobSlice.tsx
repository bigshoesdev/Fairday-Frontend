import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface JobConfigState {
  jobDetails: object[];
  jobConstManage: object[];
  jobCategoryList: object[];
  loading: boolean;
  error: string | null;
}

const initialState: JobConfigState = {
  jobDetails:[],
  jobCategoryList: [],
  jobConstManage: [],
  loading: false,
  error: null,
};

const jobConfigSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    configLoading(state) {
      state.loading = true;
    },
    constCategoryRead(state, { payload }: PayloadAction<object[]>) {
      state.jobCategoryList = payload;
      state.loading = false;
    },
    constManageRead(state, { payload }: PayloadAction<object[]>) {
      state.jobConstManage = payload;
      state.loading = false;
    },
    constJobDetailsRead(state, { payload }: PayloadAction<object[]>) {
      state.jobDetails = payload;
      state.loading = false;
    },
    configError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
  },
});


export const postJob = (data) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("http://localhost:8000/api/v1/user/job/post-job", data);
    dispatch(constJobDetailsRead(response.data));
  } catch (error: any) {
    dispatch(configError(error.message || "Failed to fetch data"));
  }
};

export const getJobCategoryByAlpha = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.post("http://localhost:8000/api/v1/user/job/get-category-list-by-alpha", data);
    dispatch(constCategoryRead(response.data));
  } catch (error: any) {
    dispatch(configError(error.message || "Failed to fetch data"));
  }
};

export const getJobConstManage = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading());
    const response = await axios.get("http://localhost:8000/api/v1/user/job/get-const-list");
    dispatch(constManageRead(response.data));
  } catch (error: any) {
    dispatch(configError(error.message || "Failed to fetch data"));
  }
};




export const {
  configLoading,
  configError,
  constCategoryRead,
  constManageRead,
  constJobDetailsRead
} = jobConfigSlice.actions;

export default jobConfigSlice.reducer;
