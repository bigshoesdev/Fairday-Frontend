import EmailContent from "src/pages/publishAdEmail/emailContent";
import { useSearchParams, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import { AppDispatch } from 'src/store';
import { setDecodedToken } from "src/store/user/advertisementSlice";
import { confirmMail } from "src/store/user/advertisementSlice";

const PublishAdEmail

  = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [searchParams] = useSearchParams();

    const { token } = useParams();
    const email = searchParams.get("bufferEmail");
    const name = searchParams.get("bufferName");

    const advertisementConfig = useSelector((state: any) => state.advertisementConfig);
    console.log('advertisementConfig', advertisementConfig);

    const confirmMailData = advertisementConfig?.confirmMail;



    useEffect(() => {
      async function fetchData() {
        if (token) {
          const decodedUser = jwtDecodeUtil(token);
          const data = {
            token: token,
            type: 'adPost'
          };

          if (decodedUser) {
            dispatch(confirmMail(data));
          }
        }
      }
      fetchData();
    }, [token, dispatch]);

    useEffect(() => {
      if (confirmMailData?.isOkay) {
        console.log('confirmMailDataconfirmMailData', confirmMailData);

        dispatch(setDecodedToken(confirmMailData?.data));
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

export default PublishAdEmail;
