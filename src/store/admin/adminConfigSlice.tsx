import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AdminConfigState {
  constMange: object[];
  category: string;

  supportList: object[];
  supportUserName: string;
  supportTicketStatus: string;

  loading: boolean;
  error: string | null;
}

const initialState: AdminConfigState = {
  constMange: [],
  category: 'constMange',

  supportList: [],
  supportUserName: '',
  supportTicketStatus: '0',

  loading: false,
  error: null,
};

const adminConfigSlice = createSlice({
  name: "adminConfig",
  initialState,
  reducers: {
    adminConfigLoading(state) {
      state.loading = true;
    },
    constMangeRead(state, { payload }: PayloadAction<object[]>) {
      state.constMange = payload;
      state.loading = false;
    },
    constMangeCreate(state, { payload }: PayloadAction<object>) {
      console.log('This is create action! Current state:', JSON.parse(JSON.stringify(state.constMange)));
    },
    constMangeUpdate(state, { payload }: PayloadAction<{ id: string; updatedData: object }>) {
      const index = state.constMange.findIndex((item: any) => item.id === payload.id);
      if (index !== -1) {
        state.constMange[index] = { ...state.constMange[index], ...payload.updatedData };
      }
      state.loading = false;
    },
     constMangeDelete(state, { payload }: PayloadAction<any>) {
      console.log('Before filter:', JSON.parse(JSON.stringify(state.constMange)));
      const newState = state.constMange.filter((item: any) => item.id !== payload._id);
      state.constMange = [...newState];
      console.log('After filter:', JSON.parse(JSON.stringify(state.constMange)));
      state.loading = false;
    },
    adminConfigError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
    supportRead(state, { payload }: PayloadAction<any>) {
      state.supportList = payload.result
      state.loading = false;
    },

    
  },
});

export const fetchConstMangeAPI = (data: any) => async (dispatch: any): Promise<any> => {
  try {
    dispatch(adminConfigLoading());
    const response = await axios.post(data.link, data);
    dispatch(constMangeRead(response.data));
  } catch (error: any) {
    dispatch(adminConfigError(error.message || "Failed to fetch data"));
  }
};

export const createConstMangeAPI = (data: object) => async (dispatch: any) => {
  try {
    dispatch(adminConfigLoading());
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/admin/constmanagement/create", data);
    dispatch(constMangeCreate(response.data));
  } catch (error: any) {
    dispatch(adminConfigError(error.message || "Failed to create item"));
  }
};

export const updateConstMangeAPI = (id: string, updatedData: object) => async (dispatch: any) => {
  try {
    dispatch(adminConfigLoading());
    const response = await axios.put(`https://api.fairdayjobs.com/api/v1/adminConfig/${id}`, updatedData);
    dispatch(constMangeUpdate({ id, updatedData: response.data }));
  } catch (error: any) {
    dispatch(adminConfigError(error.message || "Failed to update item"));
  }
};

export const deleteConstMangeAPI = (data: any) => async (dispatch: any) => {
  try {
    dispatch(adminConfigLoading());
    const response = await axios.post(data.link, data);
    dispatch(constMangeDelete(response.data));
  } catch (error: any) {
    dispatch(adminConfigError(error.message || "Failed to delete item"));
  }
};

export const getSortedGroup = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(adminConfigLoading());
    const response = await axios.get("https://api.fairdayjobs.com/api/v1/admin/constmanagement/sorted-grouped");
    dispatch(constMangeRead(response.data));
  } catch (error: any) {
    dispatch(adminConfigError(error.message || "Failed to fetch data"));
  }
};

export const supportListRead = () => async (dispatch: any): Promise<any> => {
  try {
    dispatch(adminConfigLoading());
    const response = await axios.post("https://api.fairdayjobs.com/api/v1/admin/support/read");
    dispatch(supportRead(response.data));
  } catch (error: any) {
    dispatch(adminConfigError(error.message || "Failed to fetch data"));
  }
};

export const {
  constMangeRead,
  constMangeCreate,
  constMangeUpdate,
  constMangeDelete,

  supportRead,


  adminConfigLoading,
  adminConfigError,
} = adminConfigSlice.actions;

export default adminConfigSlice.reducer;
