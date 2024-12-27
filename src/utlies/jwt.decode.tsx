import { jwtDecode } from "jwt-decode";

export const jwtDecodeUtil = (token: string): any => {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error: any) {
    console.error(error);
  }
};
