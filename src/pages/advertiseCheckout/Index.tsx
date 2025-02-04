import { useState } from 'react';
import AdvertiseSize from 'src/pages/advertiseCheckout/AdvertiseSize';
import AdvertiseRadius from 'src/pages/advertiseCheckout/AdvertiseRadius';
import AdvertiseDuration from 'src/pages/advertiseCheckout/AdvertiseDuration';
import MapRadius from 'src/pages/advertiseCheckout/MapRadius';
import PaymentArea from 'src/pages/advertiseCheckout/PaymentArea';

import Button from 'src/components/common/Button';

const AdverBusiness = () => {

  const [selectedAdvertiseSize, setSelectedAdvertiseSize] = useState<string>('');
  const [selectedAdvertiseRadius, setSelectedAdvertiseRadius] = useState<string>('');
  const [selectedAdvertiseDuration, setSelectedAdvertiseDuration] = useState<string>('');
  const [selectedPayment, setSelectedPayment] = useState('mastercard');

  //button click event
  const buttonClick = () => {
    console.log('data');
  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Checkout
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-150px] w-full'>
          <AdvertiseSize
            selectedAdvertiseSize={selectedAdvertiseSize}
            setSelectedAdvertiseSize={setSelectedAdvertiseSize}
          />
        </div>

        <AdvertiseRadius
          selectedAdvertiseRadius={selectedAdvertiseRadius}
          setSelectedAdvertiseRadius={setSelectedAdvertiseRadius}
        />

        <MapRadius />

        <AdvertiseDuration
          selectedAdvertiseDuration={selectedAdvertiseDuration}
          setSelectedAdvertiseDuration={setSelectedAdvertiseDuration}
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
