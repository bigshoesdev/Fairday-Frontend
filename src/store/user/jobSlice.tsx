import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import { messageBoxHandle } from "src/store/systemSetting/messageBoxSlice";
import { setMessage } from 'src/utlies/localstorageManage'
import axios from "axios";

interface JobConfigState {
  keyword: string;
  category: string;
  location: string;
  radius: string;
  jobType: string;
  applicantType: string;
  experienceYearsType: string;
  suggestions: string[];
  jobDetails: object[];
  jobConstManage: object[];
  jobCategoryList: object[];
  loading: boolean;
  error: any;
  categoryCountList: number[];
  bufferLink: string | null;
  decodedToken: any;
  confirmMail: any;
}

const initialState: JobConfigState = {
  keyword: '',
  category: '',
  location: '',
  radius: '',
  jobType: '',
  applicantType: '',
  experienceYearsType: '',
  suggestions: [],
  jobDetails: [],
  jobConstManage: [],
  jobCategoryList: [],
  loading: false,
  error: null,
  categoryCountList: [],
  bufferLink: null,
  confirmMail: [],
  decodedToken: []
};

const jobConfigSlice = createSlice({
  name: "job",
  initialState: initialState,
  reducers: {
    configLoading(state, { payload }: PayloadAction<any>) {
      state.loading = payload;
    },
    categoryNumber(state, { payload }: PayloadAction<number[]>) {
      state.categoryCountList = payload;
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
    updateSearchValue(state, { payload }: PayloadAction<any>) {
      state[payload.key] = payload.value;
    },
    confirmMailRead(state, { payload }: PayloadAction<object[]>) {
      state.confirmMail = payload;
      state.loading = false;
    },
    setBufferLink(state, { payload }: PayloadAction<any>) {
      state.bufferLink = payload;
    },
    setDecodedToken(state, { payload }: PayloadAction<any>) {
      state.decodedToken = payload;
    },
  },
});

export const getCategoryCount = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));
    const response = await axios.get("https://api.fairdayjobs.com/api/v1/user/job/get-category-count");
    dispatch(categoryNumber(response.data[0].employmentTypeCounts));
  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
  }
};


export const getJobsByQuery = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));

    let keyResult = Object.keys(data).map((key) => key)
    keyResult.forEach(key => dispatch(updateSearchValue({ key: [key], value: data[key] })));

    const response = await axios.post(`https://api.fairdayjobs.com/api/v1/user/job/get-job-by-query?${data.toString()}`);
    dispatch(configLoading(false));
    dispatch(constJobDetailsRead(response.data));
  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
  }
};

export const postJob = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/user/job/post-job", data);
    if (response.data.isOkay) {

      let currentMessage = setMessage('messageList', 'jobpost', "please check your mail box, Your job was applied successfully!")
      dispatch(messageBoxHandle(currentMessage))

      dispatch(setBufferLink(response.data.bufferLink))
      dispatch(constJobDetailsRead(response.data));
    } else {
      dispatch(configError(response.data.error))
      dispatch(messageHandle({ type: "error", message: response.data.message }));
    }

  } catch (error: any) {
    dispatch(messageHandle({ type: "error", message: "Failed to fetch data" }));
  }
};

export const viewJob = (data: any) => async (dispatch: any): Promise<any> => {
  dispatch(constJobDetailsRead(data));
};

export const getJobCategoryByAlpha = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/user/job/get-category-list-by-alpha", data);
    dispatch(constCategoryRead(response.data));
  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
  }
};

export const getJobConstManage = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));
    const response = await axios.get("https://api.fairdayjobs.com/api/v1/user/job/get-const-list");
    dispatch(constManageRead(response.data));
  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
  }
};

export const updateCurrentJobData = (data: any) => async (dispatch: any): Promise<any> => {
  dispatch(updateSearchValue(data));
};

export const confirmMail = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));
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
  categoryNumber,
  configError,
  constCategoryRead,
  constManageRead,
  constJobDetailsRead,
  updateSearchValue,
  confirmMailRead,
  setBufferLink,
  setDecodedToken
} = jobConfigSlice.actions;

export default jobConfigSlice.reducer;
