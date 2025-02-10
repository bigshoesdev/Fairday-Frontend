import { persistStore } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';

export const storage = async (token: string) => {
  try {
    await localStorage.setItem('fairday_token', token); // Async handling
  } catch (error: any) {
    console.error(error);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await localStorage.getItem('fairday_token'); // Async handling
    return token;
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export const clearToken = async () => {
  try {
    await localStorage.removeItem('fairday_token'); // Async handling
  } catch (error: any) {
    console.error(error);
  }
};
