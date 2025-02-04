import { persistStore } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';

export const storage = async (token: string) => {
  try {
    await localStorage.setItem('fairday_token', token); // Async handling
    console.log("success storing", token);
  } catch (error: any) {
    console.error(error);
  }
};

export const getToken = async (): Promise<string | null> => {
  console.error("getToken");
  try {
    const token = await localStorage.getItem('fairday_token'); // Async handling
    console.error("success getting", token);
    return token;
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export const clearToken = async () => {
  try {
    await localStorage.removeItem('fairday_token'); // Async handling
    console.log("success clearing token");
  } catch (error: any) {
    console.error(error);
  }
};
