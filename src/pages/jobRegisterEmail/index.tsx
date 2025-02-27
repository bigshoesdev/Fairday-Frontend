import { useSearchParams, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import JobPreviews from "./jobPreview";
import { AppDispatch } from 'src/store';
import EmailContent from "src/pages/jobRegisterEmail/emailContent";
import { setDecodedToken } from "src/store/user/appProfileSlice";
import { confirmMail } from "src/store/user/appProfileSlice";

const JobRegisterEmail = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  const { token } = useParams();
  const email = searchParams.get("bufferEmail");
  const name = searchParams.get("bufferName");

  const appProfileConfig = useSelector((state: any) => state.appProfileConfig);
  const confirmMailData = appProfileConfig.confirmMail;

  useEffect(() => {
    async function fetchData() {
      if (token) {
        const decodedUser = jwtDecodeUtil(token);
        const data = {
          token: token,
          type: 'applicantProfile'
        };

        if (decodedUser) {
          dispatch(confirmMail(data)); 
        }
      }
    }
    fetchData();
  }, [token, dispatch]); 

  useEffect(() => {
    if (confirmMailData.isOkay) {
      dispatch(setDecodedToken(confirmMailData.identify));
    }
  }, [confirmMailData, dispatch]); 

  return (
    <div className="w-full flex items-center flex-col">
      <EmailContent
        bufferName={name}
        bufferEmail={email}
      />
      <JobPreviews />
    </div>
  );
};

export default JobRegisterEmail;
