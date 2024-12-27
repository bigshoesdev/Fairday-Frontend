import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

// Define the type of the API data
interface APIResponse {
  [key: string]: any; // You can define more specific types here based on your response structure
}

interface CrudAPIState {
  createResult: APIResponse;
  readResult: APIResponse;
  updateResult: APIResponse;
  deleteResult: APIResponse;
  loading: boolean;
  error: string | null;
}

const initialState: CrudAPIState = {
  createResult: {},
  readResult: {},
  updateResult: {},
  deleteResult: {},
  loading: false,
  error: null,
};

const crudAPIModule = createSlice({
  name: "crudAPI",
  initialState,
  reducers: {
    crudAPILoading(state) {
      state.loading = true;
    },
    createAPISuccess(state, { payload }: PayloadAction<APIResponse>) {
      state.createResult = payload;
      state.loading = false;
    },
    readAPISuccess(state, { payload }: PayloadAction<APIResponse>) {
      state.readResult = payload;
      state.loading = false;
    },
    updateAPISuccess(state, { payload }: PayloadAction<APIResponse>) {
      state.updateResult = payload;
      state.loading = false;
    },
    deleteAPISuccess(state, { payload }: PayloadAction<APIResponse>) {
      state.deleteResult = payload;
      state.loading = false;
    },
    crudAPIError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
  },
});

// Thunk to handle API calls
export const handleAPICall = (
  method: string,
  url: string,
  data: any = null
) => async (dispatch: any) => {
  try {
    dispatch(crudAPILoading());
    let response: APIResponse;

    // Perform the correct HTTP request
    switch (method) {
      case "POST":
        response = await axios.post(url, data);
        dispatch(createAPISuccess(response.data));
        break;
      case "GET":
        response = await axios.get(url, { params: data });
        dispatch(readAPISuccess(response.data));
        break;
      case "PUT":
        response = await axios.put(url, data);
        dispatch(updateAPISuccess(response.data));
        break;
      case "DELETE":
        response = await axios.delete(url, { data });
        dispatch(deleteAPISuccess(response.data));
        break;
      default:
        throw new Error("Unsupported HTTP method");
    }
  } catch (error: any) {
    dispatch(crudAPIError(error.message || "Error with the API request"));
  }
};

// Thunks for Create, Read, Update, and Delete
export const createAPI = (url: string, data: any): any =>
  handleAPICall("POST", url, data);

export const readAPI = (url: string, params: any): any =>
  handleAPICall("GET", url, params);

export const updateAPI = (url: string, data: any): any =>
  handleAPICall("PUT", url, data);

export const deleteAPI = (url: string, data: any): any =>
  handleAPICall("DELETE", url, data);

export const {
  createAPISuccess,
  readAPISuccess,
  updateAPISuccess,
  deleteAPISuccess,
  crudAPILoading,
  crudAPIError,
} = crudAPIModule.actions;

export default crudAPIModule.reducer;
