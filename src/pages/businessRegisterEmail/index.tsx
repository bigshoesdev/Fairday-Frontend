import JobPreviews from "./jobPreview";
import EmailContent from "src/pages/businessRegisterEmail/emailContent";
import { useSearchParams, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import { confirmMail } from "src/store/user/businessProfileSlice";
import { setDecodedToken } from "src/store/user/businessProfileSlice";

const BusinessRegisterEmail = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  const { token } = useParams();
  const email = searchParams.get("bufferEmail");
  const name = searchParams.get("bufferName");

  const BusinessProfileConfig = useSelector((state: any) => state.BusinessProfileConfig);
  const confirmMailData = BusinessProfileConfig.confirmMail;

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      if (token) {
        const decodedUser = jwtDecodeUtil(token);
        const data = {
          token: token,
          type: 'businessProfile'
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
        bufferEmail={email}
      />
      <JobPreviews />
    </div>
  );
};

export default BusinessRegisterEmail;
