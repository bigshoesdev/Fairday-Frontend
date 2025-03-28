import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { useNavigate } from 'react-router-dom';
import { getJobConstManage } from 'src/store/user/jobSlice';
import Button from 'src/components/common/Button';
import RegisterSection from 'src/pages/jobProfileRegister/RegisterSection'
import CategorySelect from 'src/pages/jobProfileRegister/CategorySelect'
import OtherSection from 'src/pages/jobProfileRegister/OtherSection'
import CertificationsSection from 'src/pages/jobProfileRegister/CertificationsSection'
import NameLocation from 'src/pages/jobProfileRegister/NameLocation'
import PicIdImage from 'src/pages/jobProfileRegister/PicIdImage';
import UploadResume from 'src/pages/jobProfileRegister/UploadResume';
import UploadReferrials from 'src/pages/jobProfileRegister/UploadReferrials';
import OverallRating from 'src/pages/jobProfileRegister/OverallRating';
import VerifyRequire from 'src/pages/jobProfileRegister/VerifyRequire';
import PaymentArea from 'src/components/common/PaymentArea'
import ExperienceLevel from 'src/pages/jobProfileRegister/ExperienceLevel';
import EducationDetail from 'src/pages/jobProfileRegister/EducationDetail';
import WorkHistofyDetail from 'src/pages/jobProfileRegister/WorkHistofyDetail';
import ReportsLinks from 'src/pages/jobProfileRegister/ReportsLinks';
import { registerAppProfile } from 'src/store/user/appProfileSlice';
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { messageHandle } from "src/store/systemSetting/commonSlice";

const JobProfileEditing = ({
    appProfileValue,
    setAppProfileValue
}) => {

    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const userConfig = useSelector((state: any) => state.authSliceConfig);
    const { user } = userConfig;
    const userId = user?.sub;
    const userEmail = user?.email;

    useEffect(() => {
        dispatch(viewAppProfile({ userId: userId }));
    }, [dispatch]);

    const applicantProfileConfig = useSelector((state: any) => state.appProfileConfig);
    const { appProfileDetails } = applicantProfileConfig;
    const bufferLink = applicantProfileConfig?.bufferLink;

    useEffect(() => {
        dispatch(getJobConstManage());
        if (bufferLink) {
            const formattedBufferLink = bufferLink.startsWith('/')
                ? bufferLink
                : `/${bufferLink}`;

            navigate(formattedBufferLink);
        }
    }, [dispatch, bufferLink]);


    useEffect(() => {
        if (appProfileDetails && appProfileDetails.length > 0) {
            setAppProfileValue((prevState) => ({
                ...prevState,
                ...appProfileDetails[0],
            }));
        }
    }, []);

    const [autoSaveContrim, setAutoSaveContrim] = useState(false);

    const registerButton = () => {

        if (autoSaveContrim) {
            const formData: any = new FormData();

            Object.keys(appProfileValue).forEach((key: string) => {
                if (key === 'selectedCategories') {
                    appProfileValue.selectedCategories.forEach((categoryId: string) => {
                        formData.append('selectedCategories[]', categoryId);
                    });
                } else {
                    formData.append(key, appProfileValue[key]);
                }
            });

            dispatch(registerAppProfile(formData));
        } else {
            dispatch(messageHandle({ type: "info", message: "Please check Email for Confirmation checkbox for registering your profile" }));
        }
    };


    return (
        <div className='flex flex-col gap-8'>
            <RegisterSection
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            <CategorySelect
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />


            <OtherSection
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            <ExperienceLevel
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            <CertificationsSection
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            <PicIdImage
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            <NameLocation
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            <UploadResume
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            <EducationDetail
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />
            <WorkHistofyDetail
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            <UploadReferrials
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            {/* <VerifyRequire
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        /> */}

            <ReportsLinks
                appProfileValue={appProfileValue}
                bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
            />

            {/* <OverallRating
          hideEmployerConfirm={hideEmployerConfirm}
          setHideEmployerConfirm={setHideEmployerConfirm}
          agreeConfirm={agreeConfirm}
          setAgreeConfirm={setAgreeConfirm}
          setAutoSaveContrim={setAutoSaveContrim}
          autoSaveContrim={autoSaveContrim}
        /> */}
            {/* 
        <PaymentArea
          appProfileValue={appProfileValue}
          bufferSetAppProfileValue={(value: any) => setAppProfileValue(value)}
        /> */}

            <label className="flex items-center space-x-5 my-6 justify-center  ">
                <input
                    type="checkbox"
                    className="w-[20px] h-[20px] form-checkbox text-blue-600"
                    checked={autoSaveContrim}
                    onChange={() => setAutoSaveContrim((prev) => !prev)}
                />
                <span className="font-bold text-[16px] text-gray-600 ">
                    Look To Your Email for Confirmation
                </span>
            </label>

            <div className='flex flex-col gap-4 w-full'>
                <Button
                    text="REGISTER PROFILE"
                    onClick={() => registerButton()}
                    disable={!autoSaveContrim}
                    className={`py-6 text-[20px] font-bold transition-all cursor-pointer rounded-xl ${!autoSaveContrim ? 'bg-gray-200 text-gray-300 cursor-not-allowed hover:border-gray-200' : 'bg-primaryBlue text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none'}`}
                />
                <div className='text-[15px] text-black font-bold px-10 sm:px-60 flex justify-center justify-between mt-5'>
                    <span>Site Security / Privacy</span>
                    <span>Verified</span>
                    <span>Copyright</span>
                </div>
            </div>

        </div>
    );
};

export default JobProfileEditing;
