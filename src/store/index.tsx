import { combineReducers, configureStore } from "@reduxjs/toolkit";

// theme
import themeConfigSlice from "src/store/systemSetting/themeConfigSlice";

// admin
import crudAPIModule from "src/store/crudModuleSlice";
import authSlice from "src/store/auth/authSlice";
import adminConfigSlice from "src/store/admin/adminConfigSlice";

// user
import advertisementConfigSlice from "src/store/user/advertisementSlice";
import homeConfigSlice from "src/store/user/homeSlice";
import jobConfigSlice from "src/store/user/jobSlice";
import userProfileConfigSlice from "src/store/user/userProfile";
import supportSlice from "src/store/user/supportSlice";
import appProfileSlice from "src/store/user/appProfileSlice";
import businessProfileSlice from "src/store/user/businessProfileSlice";
import jobApplySlice from "src/store/user/jobApplySlice";

// common
import commonSlice from "src/store/systemSetting/commonSlice";
import messageBoxSlice from "src/store/systemSetting/messageBoxSlice";

const rootReducer = combineReducers({
  commonSliceConfig: commonSlice,
  messageBoxSliceConfig: messageBoxSlice,
  themeConfig: themeConfigSlice,
  crudAPIModuleConfig: crudAPIModule,
  authSliceConfig: authSlice,
  adminConfig: adminConfigSlice,
  advertisementConfig: advertisementConfigSlice,
  homeConfig: homeConfigSlice,
  jobConfig: jobConfigSlice,
  userProfile: userProfileConfigSlice,
  supportConfig: supportSlice,
  appProfileConfig: appProfileSlice,
  BusinessProfileConfig: businessProfileSlice,
  jobApplyConfig: jobApplySlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch; 
