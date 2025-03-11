import { useState, useEffect } from 'react';
import AdvertiseSize from 'src/pages/advertiseCheckout/AdvertiseSize';
import AdvertiseRadius from 'src/pages/advertiseCheckout/AdvertiseRadius';
import AdvertiseDuration from 'src/pages/advertiseCheckout/AdvertiseDuration';
import MapRadius from 'src/pages/advertiseCheckout/MapRadius';
import PaymentArea from 'src/pages/advertiseCheckout/PaymentArea';
import { useSearchParams, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { jwtDecodeUtil } from "src/utlies/jwt.decode";
import { AppDispatch } from 'src/store';
import { setDecodedToken, confirmMail } from "src/store/user/advertisementSlice";
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button';

const AdverBusiness = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const { token } = useParams();

  const email = searchParams.get("bufferEmail");
  const name = searchParams.get("bufferName");

  const advertisementConfig = useSelector((state: any) => state.advertisementConfig);
  const decodedToken = advertisementConfig.decodedToken;
  const confirmMailData = advertisementConfig?.confirmMail;

  useEffect(() => {
    async function fetchData() {
      if (token) {
        const decodedUser = jwtDecodeUtil(token);
        const data = { token: token, type: 'adPost' };

        if (decodedUser) {
          dispatch(confirmMail(data));
        }
      }
    }
    fetchData();
  }, [token, dispatch]);

  useEffect(() => {
    if (confirmMailData?.isOkay) {
      dispatch(setDecodedToken(confirmMailData?.data));
    }
  }, [confirmMailData, dispatch]);



  const [adCheckoutValue, setAdCheckoutValue] = useState({
    selectedAdvertiseSize: "",
    selectedAdvertiseRadius: "",
    selectedAdvertiseDuration: "",
  })














  // const [selectedAdvertiseSize, setSelectedAdvertiseSize] = useState<string>('');
  // const [selectedAdvertiseRadius, setSelectedAdvertiseRadius] = useState<string>('');
  // const [selectedAdvertiseDuration, setSelectedAdvertiseDuration] = useState<string>('');
  const [selectedPayment, setSelectedPayment] = useState('mastercard');

  const buttonClick = () => {
    console.log('data');
  };

  if (!decodedToken) {
    return <div></div>;
  }

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Checkout
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-150px] w-full'>
          <AdvertiseSize
            adCheckoutValue={adCheckoutValue}
            buffersetAdCheckoutValue={(value: any) => setAdCheckoutValue(value)}
          />
        </div>

        <AdvertiseRadius
          adCheckoutValue={adCheckoutValue}
          buffersetAdCheckoutValue={(value: any) => setAdCheckoutValue(value)}
        />

        <MapRadius />

        <AdvertiseDuration
          adCheckoutValue={adCheckoutValue}
          buffersetAdCheckoutValue={(value: any) => setAdCheckoutValue(value)}
        />
        <PaymentArea
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />

        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="CONFIRM ORDER"
            onClick={buttonClick}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
          <Button
            text="MAKE PAYMENT"
            onClick={buttonClick}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default AdverBusiness;
