import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import { storage } from "src/utlies/localStorage";
import { messageHandle } from "src/store/systemSetting/commonSlice";

interface AuthState {
  user: object | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticate: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticate: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLoading(state) {
      state.loading = true;
    },
    loginSuccess(state, { payload }: PayloadAction<{ user: object; token: string, isAuthenticate:boolean }>) {
      console.log('This is loginSuccess data', state.isAuthenticate);
      
      state.isAuthenticate = payload.isAuthenticate;
      state.user = payload.user;
      state.token = payload.token;
      state.loading = false;
    },
    signupSuccess(state, { payload }: PayloadAction<{ user: object; token: string, isAuthenticate: boolean }>) {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticate = payload.isAuthenticate;
      state.loading = false;
    },
    logoutSuccess(state) {
      state.user = null;
      state.token = null;
      state.loading = false;
    },
    authError(state, { payload }: PayloadAction<string>) {
      state.error = payload;
      state.loading = false;
    },
    updateUser(state, { payload }: PayloadAction<object>) {
      state.user = payload;
    },
  },
});

export const loginAPI = (credentials: { email: string; password: string }) => async (dispatch: any) => {
  try {
    dispatch(authLoading());
    const response = await axios.post("http://localhost:8000/api/v1/auth/login", credentials);
    let isOkay = response.data.isOkay
    let userToken = response.data.access_token
    let parsedResult = jwtDecodeUtil(userToken)
    storage(userToken)
    dispatch(loginSuccess({ user: parsedResult, token: userToken, isAuthenticate: isOkay})); 

  } catch (error: any) {
    dispatch(authError(error.message || "Login failed"));
  }
};

export const signupAPI = (data) => async (dispatch: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(authLoading());

      const response = await axios.post("http://localhost:8000/api/v1/auth/signup", data);
      const userToken = response.data.access_token;

      const parsedResult = jwtDecodeUtil(userToken);
      storage(userToken);

      dispatch(messageHandle({ type: response.data.isOkay ? "success" : "error", message: response.data.message }));
      dispatch(signupSuccess({ user: parsedResult, token: userToken, isAuthenticate: true }));

      resolve({ user: parsedResult, token: userToken }); // Resolve the promise with the parsed result and token
    } catch (error: any) {
      dispatch(authError(error.message || "Signup failed"));
      reject(error); // Reject the promise with the error
    }
  });
};


export const logoutAPI = () => async (dispatch: any) => {
  try {
    dispatch(authLoading());
    dispatch(logoutSuccess());
  } catch (error: any) {
    dispatch(authError(error.message || "Logout failed"));
  }
};

export const updateUserAPI = (userData: object) => async (dispatch: any) => {
  try {
    dispatch(authLoading());
    const response = await axios.put("/api/auth/update", userData); 
    dispatch(updateUser(response.data));
  } catch (error: any) {
    dispatch(authError(error.message || "Update failed"));
  }
};

export const { loginSuccess, signupSuccess, logoutSuccess, authLoading, authError, updateUser } = authSlice.actions;

export default authSlice.reducer;
