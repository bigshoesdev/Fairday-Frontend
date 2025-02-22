import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import { storage } from "src/utlies/localStorage";
import { messageHandle } from "src/store/systemSetting/commonSlice";
import { getToken } from "src/utlies/localStorage";
import { setAuthorizationToken } from "src/utlies/axiosInstance";


interface AuthState {
  user: object | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticate: boolean;
  bufferLink: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  bufferLink: null,
  loading: false,
  error: null,
  isAuthenticate: false
};

const loadAuthStateFromStorage = async () => {
  const token = await getToken();
  if (token) {
    const decodedUser = jwtDecodeUtil(token);
    return { user: decodedUser, token, isAuthenticate: true };
  }
  return { user: null, token: null, isAuthenticate: false };
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLoading(state) {
      state.loading = true;
    },
       loginSuccess(state, { payload }: PayloadAction<{ user: object; token: string; isAuthenticate: boolean }>) {
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
    setBufferLink(state, { payload }: PayloadAction<any>) {
      state.bufferLink = payload;
    },
    updateUser(state, { payload }: PayloadAction<object>) {
      state.user = payload;
    },
  },
});

export const initializeAuth = () => async (dispatch: any) => {
  try {
    const storedAuth = await loadAuthStateFromStorage();
    if (storedAuth.token) {
      setAuthorizationToken(storedAuth.token);
      dispatch(loginSuccess(storedAuth)); 
    }
  } catch (error: any) {
    console.error("Error initializing auth:", error);
  }
};

export const loginAPI = (credentials: { email: string; password: string }) => async (dispatch: any) => {
  try {
    dispatch(authLoading());
    const response = await axios.post("http://localhost:8000/api/v1/auth/login", credentials);

    console.log('This is login response data', response.data);

    if (response.data.isOkay) {
      let isOkay = response.data.isOkay
      let userToken = response.data.access_token
      let parsedResult = jwtDecodeUtil(userToken)

      setAuthorizationToken(userToken);
      storage(userToken)

      dispatch(messageHandle({ type: response.data.isOkay ? "success" : "error", message: response.data.message }));
      dispatch(loginSuccess({ user: parsedResult, token: userToken, isAuthenticate: isOkay }));
    } else {
      dispatch(messageHandle({ type: "error", message: response.data.message }));
    }

  } catch (error: any) {
    dispatch(authError(error.message || "Login failed"));
  }
};

export const signupAPI = (data) => async (dispatch: any): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(authLoading());

      const response = await axios.post("http://localhost:8000/api/v1/auth/signup", data);

      if (response.data.isOkay) {
        dispatch(setBufferLink(response.data.bufferLink))
        // dispatch(messageHandle({ type: "success", message: response.data.message }));
        // const userToken = response.data.access_token;

        // const parsedResult = jwtDecodeUtil(userToken);

        // setAuthorizationToken(userToken)
        // storage(userToken);

        // dispatch(signupSuccess({ user: parsedResult, token: userToken, isAuthenticate: true }));

        // resolve({ user: parsedResult, token: userToken }); // Resolve the promise with the parsed result and token
      } else {
        dispatch(messageHandle({ type: "error", message: response.data.message }));
      }

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

export const { loginSuccess, signupSuccess, logoutSuccess, authLoading, authError, updateUser, setBufferLink } = authSlice.actions;

export default authSlice.reducer;
