import { useSearchParams, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import JobPreviews from "./jobPreview";
import { AppDispatch } from 'src/store';
import { storage } from "src/utlies/localStorage";
import VerifySpace from "./verifySpace";
import { signupSuccess } from "src/store/auth/authSlice";
import { setAuthorizationToken } from "src/utlies/axiosInstance";

const VerifyEmail = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  const { token } = useParams();
  const email = searchParams.get("bufferEmail");
  const name = searchParams.get("bufferName");

  const authSliceConfig = useSelector((state: any) => state.authSliceConfig);
  const isAuthenticated = authSliceConfig.isAuthenticate

  useEffect(() => {
    if (token) {
      const decodedUser = jwtDecodeUtil(token);
      if (decodedUser) {
        storage(token)
        setAuthorizationToken(token)
        dispatch(signupSuccess({ user: decodedUser, token: token, isAuthenticate: true }));
      }
    }
  }, [token])

  return (
    <div className="w-full items-center flex-col bg-[#f7fbff]">
      <VerifySpace
        token={isAuthenticated}
        bufferName={name}
        bufferEmail={email}
      />
      <hr />
      <JobPreviews />
    </div>
  );
};

export default VerifyEmail;
