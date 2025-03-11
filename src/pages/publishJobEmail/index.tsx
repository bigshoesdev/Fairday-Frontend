import EmailContent from "src/pages/publishJobEmail/emailContent";
import { useSearchParams, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import { AppDispatch } from 'src/store';
import { setDecodedToken } from "src/store/user/jobSlice";
import { confirmMail } from "src/store/user/jobSlice";

const PublishJobEmail
 = () => {

  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  const { token } = useParams();
  const email = searchParams.get("bufferEmail");
  const name = searchParams.get("bufferName");

  const jobConfig = useSelector((state: any) => state.jobConfig);
  const confirmMailData = jobConfig.confirmMail;

  useEffect(() => {
    async function fetchData() {
      if (token) {
        const decodedUser = jwtDecodeUtil(token);
        const data = {
          token: token,
          type: 'jobPost'
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
      dispatch(setDecodedToken(confirmMailData.data));
    }
  }, [confirmMailData, dispatch]); 

  return (
    <div className="w-full flex items-center flex-col">
      <EmailContent 
        bufferEmail={email}
      />
    </div>
  );
};

export default PublishJobEmail
;
