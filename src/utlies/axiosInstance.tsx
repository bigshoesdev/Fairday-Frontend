import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const setAuthorizationToken = (token: string | null) => {
  if (token) {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers['Authorization']; // Remove token if not present
  }
};
