import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import { messageBoxHandle } from "src/store/systemSetting/messageBoxSlice";
import { setMessage } from 'src/utlies/localstorageManage'
import axios from "axios";

interface JobConfigState {
  keyword: string;
  category: string;
  location: string;
  language: string;
  radius: string;
  jobType: string;
  applicantType: string;
  experienceYearsType: string;
  suggestions: string[];
  jobDetails: object[];
  proposalJobs: object[];
  proposalJobsDetails: object[];
  jobConstManage: object[];
  jobCategoryList: object[];
  loading: boolean;
  error: any;
  categoryCountList: number[];
  bufferLink: string | null;
  decodedToken: any;
  confirmMail: any;
  allApplicants: object[];
}

const initialState: JobConfigState = {
  keyword: '',
  category: '',
  location: '',
  language: '',
  radius: '',
  jobType: '',
  applicantType: '',
  experienceYearsType: '',
  suggestions: [],
  jobDetails: [],
  proposalJobs: [],
  proposalJobsDetails: [],
  jobConstManage: [],
  jobCategoryList: [],
  allApplicants: [],
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
    constAllApplicantsRead(state, { payload }: PayloadAction<object[]>) {
      state.allApplicants = payload;
      state.loading = false;
    },
    constProposalJobsRead(state, { payload }: PayloadAction<object[]>) {
      state.proposalJobs = payload;
      state.loading = false;
      const merged = state.proposalJobs.map((proposal: any) => {
        
        const matchedJob = state.jobDetails.find((job: any) => job._id === proposal.jobId);
        if (matchedJob) {
          return { ...matchedJob, proposalStatus: proposal.status };
        }
        return null;
      }).filter(Boolean);
      state.proposalJobsDetails = merged;
      console.log('%%%%%%%%%%%%%%',state.proposalJobsDetails );
      
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
    changeJobDetails(state, { payload }: PayloadAction<any>) {
      state.jobDetails = state.jobDetails.map((item: any) => item._id === payload._id ? payload : item);
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


export const getJobsById = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));

    const response = await axios.post(`https://api.fairdayjobs.com/api/v1/user/job/get-job-by-id`, data);
    dispatch(configLoading(false));
    dispatch(constJobDetailsRead(response.data));
  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
  }
};

export const changeJob = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));

    const response = await axios.post(`https://api.fairdayjobs.com/api/v1/user/job/change-job`, data);
    dispatch(configLoading(false));
    dispatch(changeJobDetails(response.data))

  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
  }
};


export const getProposalJobs = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));

    const response = await axios.post(`https://api.fairdayjobs.com/api/v1/user/job/get-jobs-by-seeker`, data);
    dispatch(configLoading(false));
    dispatch(constJobDetailsRead(response.data));
  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
  }
};

export const viewJobById = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));
    const response = await axios.post(`https://api.fairdayjobs.com/api/v1/user/job/view-job-by-id`, data);
    dispatch(configLoading(false));
    dispatch(constJobDetailsRead(response.data));
  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
  }
};

export const getAllApplicants = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(configLoading(true));
    const response = await axios.post(`https://api.fairdayjobs.com/api/v1/user/job/all-applicants-by-id`, data);
    dispatch(configLoading(false));
    dispatch(constAllApplicantsRead(response.data));
  } catch (error: any) {
    dispatch(configError("Failed to fetch data"));
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
  setDecodedToken,
  changeJobDetails,
  constProposalJobsRead,
  constAllApplicantsRead
  // generateProposalJobsDetails
} = jobConfigSlice.actions;

export default jobConfigSlice.reducer;
