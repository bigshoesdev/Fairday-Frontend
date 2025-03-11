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
import PreviewModal from 'src/pages/advertiseBusiness/PreviewModal';

const AdverBusiness = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { advertisementConfig } = useSelector((state: any) => state);
  const { adDetails, bufferLink } = advertisementConfig
  const userConfig = useSelector((state: any) => state.authSliceConfig);
  const { user } = userConfig;
  const userId = user?.sub;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const adId = adDetails.result?._id;
  console.log('AdvertiseDetailsInfos', adDetails);

  const [advertiseValue, setAdvertiseValue] = useState({
    userId: userId,
    businessName: "",
    name: "",
    email: "",
    selectedCategories: [],
    street: "",
    city: "",
    country: "",
    insertWebsite: "",
    promoDiscount: "",
    promoEndDate: "",
    selectedImages: [],
    status: 0,
  })


  const viewAdButton = () => {
    const formData = new FormData();
    Object.keys(advertiseValue).forEach((key: string) => {
      if (key === 'selectedCategories') {
        advertiseValue.selectedCategories.forEach((categoryId: string) => {
          formData.append('selectedCategories[]', categoryId);
        });
      } else {
        formData.append(key, advertiseValue[key]);
      }
    });
    advertiseValue.selectedImages.forEach((file) => {
      formData.append("images", file);
    });

    dispatch(publishAdvertise(formData))

  }

  const publishAdButton = () => {
    const formData = new FormData();

    if (adId) {
      formData.append("adId", adId);
      formData.append("status", 1);
      Object.keys(advertiseValue).forEach((key: string) => {
        if (key === 'selectedCategories') {
          advertiseValue.selectedCategories.forEach((categoryId: string) => {
            formData.append('selectedCategories[]', categoryId);
          });
        } else {
          formData.append(key, advertiseValue[key]);
        }
      });
      advertiseValue.selectedImages.forEach((file) => {
        formData.append("images", file);
      });
    } else {
      advertiseValue.status = 1;
      Object.keys(advertiseValue).forEach((key: string) => {
        if (key === 'selectedCategories') {
          advertiseValue.selectedCategories.forEach((categoryId: string) => {
            formData.append('selectedCategories[]', categoryId);
          });
        } else {
          formData.append(key, advertiseValue[key]);
        }
      });
      advertiseValue.selectedImages.forEach((file) => {
        formData.append("images", file);
      });
    }

    dispatch(publishAdvertise(formData))
  };

  useEffect(() => {
    if (bufferLink) {
      const formattedBufferLink = bufferLink.startsWith('/')
        ? bufferLink
        : `/${bufferLink}`;

      navigate(formattedBufferLink);
    }
    if (adDetails.isOkay) {
      setIsModalOpen(true);
    }
  }, [bufferLink, adDetails]);

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Advertise Your Business
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-150px] w-full'>
          <RegisterAd
            advertiseValue={advertiseValue}
            bufferSetAdvertiseValue={(value: any) => setAdvertiseValue(value)}
          />
        </div>

        <BusinessCategory
          advertiseValue={advertiseValue}
          bufferSetAdvertiseValue={(value: any) => setAdvertiseValue(value)}
        />

        <JobLocation
          advertiseValue={advertiseValue}
          bufferSetAdvertiseValue={(value: any) => setAdvertiseValue(value)}
        />

        <AdvertisementImages
          advertiseValue={advertiseValue}
          bufferSetAdvertiseValue={(value: any) => setAdvertiseValue(value)}
        />

        <InsertWebsite
          advertiseValue={advertiseValue}
          bufferSetAdvertiseValue={(value: any) => setAdvertiseValue(value)}
        />

        <PromotionalDiscount
          advertiseValue={advertiseValue}
          bufferSetAdvertiseValue={(value: any) => setAdvertiseValue(value)}
        />

        <PromotionEndDate
          advertiseValue={advertiseValue}
          bufferSetAdvertiseValue={(value: any) => setAdvertiseValue(value)}
        />


        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="PREVIEW AD"
            onClick={viewAdButton}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
          <Button
            text="PUBLISH AD"
            onClick={publishAdButton}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
        </div>
        {isModalOpen && <PreviewModal onClose={() => setIsModalOpen(false)} />}
      </div>
    </div>
  );
};

export default AdverBusiness;
