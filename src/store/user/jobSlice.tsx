import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface JobConfigState {
    jobCategoryList: object[];
    loading: boolean;
    error: string | null;
}

const initialState: JobConfigState = {
    jobCategoryList: [],
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
    constMangeRead(state, { payload }: PayloadAction<object[]>) {
        state.jobCategoryList = payload;
        state.loading = false;
    },
    configError(state, { payload }: PayloadAction<string>) {
        state.error = payload;
        state.loading = false;
      },
  },
});

export const getJobCategoryByAlpha = (data: any) => async (dispatch: any): Promise<any> => {
    try {
      dispatch(configLoading());
      const response = await axios.post("http://localhost:8000/api/v1/user/job/get-category-list-by-alpha", data);
      dispatch(constMangeRead(response.data));
    } catch (error: any) {
      dispatch(configError(error.message || "Failed to fetch data"));
    }
  };

export const {
    configLoading,
    configError,
    constMangeRead
} = jobConfigSlice.actions;

export default jobConfigSlice.reducer;
