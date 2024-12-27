import { combineReducers, configureStore } from "@reduxjs/toolkit";

// theme
import themeConfigSlice from "src/store/systemSetting/themeConfigSlice";

// admin
import crudAPIModule from "src/store/crudModuleSlice";
import authSlice from "src/store/auth/authSlice";
import adminConfigSlice from "src/store/admin/adminConfigSlice";

// user
import advertisementConfigSlice from "src/store/user/advertisement";
import homeConfigSlice from "src/store/user/homeSlice";
import jobConfigSlice from "src/store/user/jobSlice";
import userProfileConfigSlice from "src/store/user/userProfile";

// common
import commonSlice from "src/store/systemSetting/commonSlice";


const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
  crudAPIModuleConfig: crudAPIModule,
  authSliceConfig: authSlice,
  adminConfig: adminConfigSlice,

  commonSliceConfig: commonSlice,

  advertisementConfig: advertisementConfigSlice,
  homeConfig: homeConfigSlice,
  jobConfig: jobConfigSlice,
  userProfile: userProfileConfigSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 
