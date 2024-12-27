import localStorage from "redux-persist/es/storage";

export const storage = (token: string)=> {
  try {
    localStorage.setItem('fairday_token', token)
    console.log("success storing");
  } catch (error: any) {
    console.error(error);
  }
};

export const getToken = ()=> {
  try {
    localStorage.getItem('fairday_token')
    console.error("success getting");
  } catch (error: any) {
    console.error(error);
  }
};

export const clearToken = ()=> {
  try {
    localStorage.removeItem('fairday_token')
    console.error("Error clearing token");
  } catch (error: any) {
    console.error(error);
  }
};
