import { useEffect } from 'react';
import Button from 'src/components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { MdVerifiedUser } from "react-icons/md";
import { AppDispatch } from 'src/store';
import { LuCircleCheckBig } from "react-icons/lu";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { getJobConstManage } from 'src/store/user/jobSlice';
import UserDetail from "../employerDetail/userdDetail";
import { viewBusinessProfile } from 'src/store/user/businessProfileSlice';
import Tabs from 'src/components/common/Tab';
import BusinessDetail from 'src/pages/businessProfile/BusinessDetail';

const BusinessProfile = ({ businessProfileData }) => {
    const navigate = useNavigate();

    const { jobConfig } = useSelector((state: any) => state);
    const { jobConstManage } = jobConfig;

    const userConfig = useSelector((state: any) => state.authSliceConfig);
    const { user } = userConfig;
    const userId = user?.sub;

    const BusinessProfileConfig = useSelector((state: any) => state.BusinessProfileConfig);
    const { businessProfileDetails } = BusinessProfileConfig;

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(viewBusinessProfile({ userId: userId }));
        dispatch(getJobConstManage())
    }, [dispatch]);


    const jobCategoryTypes = jobConstManage.filter(item => item.category === 'jobcategory');

    const selectedCategories = businessProfileData?.selectedCategories || [];

    const locationYearsTypes = jobConstManage.filter(item => item.category === 'locationYears');

    const CategoriesStrings = jobCategoryTypes
        .filter(job => selectedCategories?.length > 0 && selectedCategories.includes(job._id))
        .map(job => job.string);

    const experienceLevelTypes = jobConstManage.filter(item => item.category === 'businessYears');

    console.log('businessProfileData', businessProfileData);

    const onClick = () => {

    }

    return (
        <div className="items-center flex flex-col w-full bg-[#FAFAFA] container">
            <Tabs value={2} />
            <div className="w-full max-w-[1400px] bg-[#FAFAFA] py-5">
                <BusinessDetail businessProfileData={businessProfileData} isHideEdit={false}  />
            </div>
        </div>
    )
}

export default BusinessProfile