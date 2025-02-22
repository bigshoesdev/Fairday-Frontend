import { useSearchParams, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import JobPreviews from "./jobPreview";
import { AppDispatch } from 'src/store';
import VerifySpace from "./verifySpace";
import { signupSuccess } from "src/store/auth/authSlice";

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
      console.log("decodedUser", decodedUser);

      if (decodedUser) {
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
