import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { useNavigate } from 'react-router-dom';


import RegisterAd from 'src/pages/advertiseBusiness/RegisterAd';
import BusinessCategory from 'src/pages/advertiseBusiness/BusinessCategory';
import JobLocation from 'src/pages/advertiseBusiness/JobLocation';
import InsertWebsite from 'src/pages/advertiseBusiness/InsertWebsite';
import PromotionalDiscount from 'src/pages/advertiseBusiness/PromotionalDiscount';
import PromotionEndDate from 'src/pages/advertiseBusiness/PromotionEndDate';
import AdvertisementImages from 'src/pages/advertiseBusiness/AdvertisementImages';

import { publishAdvertise } from 'src/store/user/advertisementSlice';
import Button from 'src/components/common/Button';

const AdverBusiness = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { advertisementConfig } = useSelector((state: any) => state);
  const AdvertiseDetailsInfos = advertisementConfig.advertiseDetails;

  //Register Advertisement component variables
  const [businessName, setBusinessName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //Job Location component variables
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  //Advertiesment Images Component
  const [selectedImages, setSelectedImages] = useState<File[]>([]);


  //Insert Website component variables
  const [insertWebsite, setInsertWebsite] = useState('');

  //Promotional Discount component varaibles
  const [promoDiscount, setPromoDiscount] = useState('');

  //Promotion end Date component variables
  const [promoEndDate, setPromoEndDate] = useState('');


  //button click event
  const buttonClick = (status: number) => {
    const formData = new FormData();
    formData.append("businessName", businessName);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("insertWebsite", insertWebsite);
    formData.append("promoDiscount", promoDiscount);
    formData.append("promoEndDate", promoEndDate);
    formData.append("status", status.toString());

    selectedImages.forEach((file) => {
      formData.append("images", file);
    });

    dispatch(publishAdvertise(formData))
  };

  useEffect(() => {
    if (AdvertiseDetailsInfos.isOkay) {
      navigate('/advertise-checkout');
    }
  }, [AdvertiseDetailsInfos.isOkay, navigate]); 

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Advertise Your Business
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-150px] w-full'>
          <RegisterAd
            businessName={businessName}
            setBusinessName={setBusinessName}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
          />
        </div>

        <BusinessCategory />

        <JobLocation
          street={street}
          setStreet={setStreet}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
        />

        <AdvertisementImages
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />

        <InsertWebsite
          insertWebsite={insertWebsite}
          setInsertWebsite={setInsertWebsite}
        />

        <PromotionalDiscount
          promoDiscount={promoDiscount}
          setPromoDiscount={setPromoDiscount}
        />

        <PromotionEndDate
          promoEndDate={promoEndDate}
          setPromoEndDate={setPromoEndDate}
        />


        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="PREVIEW AD"
            onClick={() => buttonClick(1)}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
          <Button
            text="PUBLISH AD"
            onClick={() => buttonClick(2)}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default AdverBusiness;
