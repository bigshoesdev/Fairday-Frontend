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
import { viewBusinessProfile } from 'src/store/user/businessProfileSlice';
import Tabs from 'src/components/common/Tab';

const BusinessProfile = ({businessProfileData}) => {
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

    const selectedCategories = businessProfileData[0]?.selectedCategories || [];

    const locationYearsTypes = jobConstManage.filter(item => item.category === 'locationYears');

    const CategoriesStrings = jobCategoryTypes
        .filter(job => selectedCategories?.length > 0 && selectedCategories.includes(job._id))
        .map(job => job.string);

    const experienceLevelTypes = jobConstManage.filter(item => item.category === 'businessYears');

    console.log('businessProfileData', businessProfileData);

    const onClick = () => {

    }

    return (
        <div className="flex flex-col w-full justify-cenver items-center bg-[#FAFAFA] gap-y-8 container">

            {/* <Tabs /> */}

            <div className="flex flex-col bg-white container max-w-[950px] shadow-lg py-4 rounded-xl">
                <div className="flex justify-between py-5 items-center">
                    <span className='font-bold text-gray-600'>{businessProfileData?.businessName}</span>
                    <Button
                        text="EDIT"
                        onClick={() => navigate('/business-applicant-profile-registration')}
                        className=' bg-blue-500 text-white  px-6 py-2 hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
                    />
                </div>
                <div >
                    <img src="src/assets/images/business-background.png"></img>
                </div>
                <hr className='mt-8 bg-gray-600'></hr>
                <div className='flex flex-row justify-between pt-5 pb-3'>
                    <span className='font-bold text-gray-600 text-[18px] sm:text-[22px]'>Business Address</span>
                    <span className='font-bold text-gray-600 text-[18px] sm:text-[22px]'>Years at this location</span>
                </div>
                <div className='flex flex-row justify-between font-semibold text-[16px] sm:text-[18px]'>
                    <div className='flex flex-col'>
                        <span>{businessProfileData?.street}</span>
                        <span>{businessProfileData?.country}</span>
                    </div>
                    <span>{locationYearsTypes.find((each) => each._id === businessProfileData?.selectedLocationYears)?.string || ''}</span>
                </div>
                <img src="src/assets/images/business-map.png" className='mt-5'></img>
            </div>


            <div className='flex flex-col sm:flex-row sm:justify-between w-full max-w-[950px]  gap-x-8'>
                <div className='flex flex-col bg-white w-full shadow-lg container py-5 rounded-xl'>
                    <span className='font-bold text-gray-600 text-[18px] sm:text-[20px] flex items-center w-full'>Services Offered</span>
                    <span className='mt-5 sm:text-[15px] text-[13px] font-bold text-gray-500'>From Our Category List <span className='text-blue-500'>(Up to 5 Categories)</span></span>
                    <div className="flex flex-wrap gap-2 mt-5">
                        {CategoriesStrings.map((category, index) => (
                            <span
                                key={index}
                                className="text-center text-[14px] border border-black bg-blue-300 text-black px-4 py-2 rounded-[7px]"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col bg-white w-full shadow-lg container py-5 rounded-xl'>
                    <span className='font-bold text-gray-600 text-[18px] sm:text-[20px] flex items-center w-full'>Service Details</span>
                    <div className='mt-5 y-20'>{businessProfileData?.serviceDescription}</div>
                </div>
            </div>


            <div className='flex justify-between bg-white container max-w-[950px] shadow-lg py-6 rounded-xl'>
                <span className='font-bold text-gray-600 text-[18px] sm:text-[20px]'>Years in Business</span>
                <Button
                    text={
                        businessProfileData?.selectedBusinessYears
                            ? experienceLevelTypes.find((each) => each._id === businessProfileData.selectedBusinessYears
                            )?.string || ''
                            : ''
                    }
                    onClick={onClick}
                    className=' bg-blue-500 text-white  px-6 py-2 hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
                />
            </div>


            <div className='flex flex-col bg-white container max-w-[950px] shadow-lg py-6 rounded-xl'>
                <span className='font-bold text-[20px]'>Business Licenses & Certifications</span>
                <div className='flex flex-row mt-4'>
                    <div className='flex flex-col w-full'>
                        <span>Business:</span>
                        <span>Industrial:</span>
                        <span>Construction:</span>
                    </div>

                    <div className='flex flex-col w-full text-blue-500 underline'>
                        <span>www.Business.com</span>
                        <span>www.Industrial.com</span>
                        <span>www.Construction.com</span>
                    </div>
                </div>
                <hr className='bg-gray-500 mt-4'></hr>
                <span className='mt-4 font-bold text-[20px]'>Affiliations</span>
                <span className='mt-2'>{businessProfileData?.affiliations}</span>
            </div>


            <div className='flex flex-col sm:flex-row sm:justify-between w-full max-w-[950px]  gap-8'>
                <div className='flex flex-col bg-white w-full shadow-lg container py-5 rounded-xl'>
                    <span className='font-bold text-gray-600 text-[20px] flex items-center w-full'>Verification</span>
                    {businessProfileData?.verifyRequireConfirm ?
                        <div className='flex justify-between mt-4'>
                            <div className='flex flex-row items-center gap-x-3'>
                                <MdVerifiedUser className='text-blue-500 w-[30px] h-[30px] ml-[-7px]' />
                                <span>Verified</span>
                            </div>
                            <LuCircleCheckBig className='text-[30px] text-green-500' />
                        </div> : ""
                    }


                </div>

                <div className='flex flex-col bg-white w-full shadow-lg container py-5 rounded-xl'>
                    <span className='font-bold text-gray-600 text-[20px] flex items-center w-full'>Website Link</span>
                    <a className='mt-5 text-blue-500 underline'>{businessProfileData?.websiteLink}</a>
                </div>
            </div>


            <div className='flex flex-col bg-white container max-w-[950px] shadow-lg py-6 rounded-xl'>
                <div className='flex flex-row'>
                    <div className='flex flex-col w-full'>
                        <span className='text-[18px] sm:text-[20px] font-bold text-gray-600'>Business insurance</span>
                        <Button
                            text="Yes"
                            onClick={onClick}
                            className='mt-3 w-20 bg-blue-500 text-white  px-6 py-2 hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <span className='text-[18px] sm:text-[20px] font-bold text-gray-600'>Workmans insurance</span>
                        <Button
                            text="Yes"
                            onClick={onClick}
                            className='mt-3 bg-blue-500 text-white w-20 py-2 hover:bg-gray-200 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
                        />
                    </div>
                </div>
                <hr className='bg-gray-600 my-7'></hr>
                <span className='text-[18px] sm:text-[20px] font-bold text-gray-600'>Other insurance</span>
                <p className='mt-4'>{businessProfileData?.insurance}</p>
            </div>


            <div className="w-full flex bg-white shadow-lg rounded-[10px] p-3 px-5 gap-2 max-w-[950px]">
                <div className="flex-[7] flex flex-col">
                    <p className="text-[18px] sm:text-[20px] font-bold mb-1 text-gray-600">
                        Referrals from past Employers
                    </p>
                    <p className="mb-1">
                        I’m a highly skilled Full Stack Developer with a strong foundation
                        in both frontend and backend technologies. My passion lies in
                        creating dynamic,
                    </p>
                    <p className="mb-1 text-blue-500">Referalls Doc.. file</p>
                </div>
                <div className="flex-[5] flex flex-col  border border-gray-300 rounded-lg">
                    <img
                        src="https://fairdayjobs.com/src/assets/images/userprofile_refer.png"
                        className="h-full rounded-lg
            "
                    />
                </div>
            </div>


            <div className='flex flex-col sm:flex-row sm:justify-between w-full max-w-[950px] gap-8'>
                <div className='flex flex-col bg-white w-full shadow-lg container py-5 rounded-xl'>
                    <span className='font-bold text-gray-600 text-[18px] sm:text-[20px] flex items-center w-full'>Public record purchase</span>
                    <p className='mt-4'>Gain access to comprehensive public records with ease! Our platform allows you to purchase verified public records directly, from background checks to professional licensing information, and more. </p>
                </div>

                <div className='flex flex-col bg-white w-full shadow-lg container py-5 rounded-xl'>
                    <span className='font-bold text-gray-600 text-[18px] sm:text-[20px] flex items-center w-full'>Currency accepted</span>
                    <span className='font-bold mt-4 '>{businessProfileData?.currencyAccepted}</span>
                </div>
            </div>

            {businessProfileData?.barterConfirm ?
                <div className='flex flex-row bg-white container max-w-[950px] shadow-lg py-6 rounded-xl items-center'>
                    <BsFillCheckSquareFill className='text-[30px] text-green-500' />
                    <span className='ml-3 text-[18px] sm:text-[20px] font-bold text-gray-600'>Barter or Trade Accepted</span>
                </div> : ""
            }



            <div className='flex flex-col sm:flex-row sm:justify-between w-full max-w-[950px]  gap-8'>
                <div className='flex flex-col bg-white w-full shadow-lg container py-5 rounded-xl'>
                    <span className='font-bold text-gray-600 text-[18px] sm:text-[20px] flex items-center w-full'>Current Service Promotion</span>
                    <p className='mt-2'>Coupon <span className='text-blue-500'>#4564</span></p>
                    <span className='font-bold text-black text-[18px] sm:text-[20px] flex items-center w-full'> Expiration Date</span>
                    <span className='text-gray-700 mt-2'>{businessProfileData?.expirationDate}</span>

                </div>

                <div className='flex flex-col  bg-white w-full shadow-lg container py-5 rounded-xl'>
                    <span className='font-bold text-gray-600 sm:text-[20px] text-[18px] flex items-center w-full'>Method of Contact</span>
                    <p className='flex flex-row mt-4 items-center'>
                        <FaPhoneAlt className='text-[25px] text-blue-500' />
                        <span className='ml-4'>+1 0800 453167</span>
                    </p>
                    <p className='flex flex-row mt-2 items-center'>
                        <IoMailSharp className='text-[25px] text-blue-500' />
                        <span className='ml-4'>info@localmanpower</span>
                    </p>
                    <p className='flex flex-row mt-2 items-center'>
                        <BsFacebook className='text-[25px] text-blue-500' />
                        <span className='ml-4'>www.facebook/in/</span>
                    </p>

                </div>
            </div>



            <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5 container max-w-[950px]">
                <p className="text-[20px] font-bold mb-3">Ratting & Review</p>
                <div>
                    <span className="text-yellow-400 text-[25px]">&#9733;</span>
                    <span className="text-yellow-400 text-[25px]">&#9733;</span>
                    <span className="text-yellow-400 text-[25px]">&#9733;</span>
                    <span className="text-yellow-400 text-[25px]">&#9733;</span>
                    <span className="text-yellow-400 text-[25px]">&#9733;</span>
                </div>
                <p className="font-bold mb-3">4.1 out of 5 star</p>
                <p className="mb-1">
                    I’m a highly skilled Full Stack Developer with a strong foundation in
                    to deliver high-quality solutions, I’m always looking for creative
                    challenges that push the boundaries of what’s possible in web
                    development.
                </p>
                <p className="font-bold mb-3">11 Nov, 2018</p>
                <hr />
                <p className="text-[20px] font-bold mb-3 mt-3">
                    Past Employers Reviews
                </p>
                <div className="flex items-start gap-3 w-full pb-4">
                    <div className="!w-10 flex-shrink-0">
                        <img
                            src="https://fairdayjobs.com/src/assets/images/user1.png"
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                    <div className="flex-grow">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-[20px] font-bold mb-0">Rohit Sharma</p>
                                <p className="mb-1 text-gray-600">
                                    Great Service by Localmanpower
                                </p>
                            </div>
                            <div className="flex items-center">
                                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                                <span className="ml-1 font-bold text-gray-800">
                                    5.0
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-1">
                            Lorem ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem ipsum has been the industry’s standard dummy text
                            ever since the 1500s...{" "}
                            <span className="text-blue-500 cursor-pointer">Read more</span>
                        </p>
                        <p className="text-gray-500">1 Sep 2019</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BusinessProfile