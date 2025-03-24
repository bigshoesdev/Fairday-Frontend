import Button from 'src/components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { messageHandle } from "src/store/systemSetting/commonSlice";
import { AppDispatch } from 'src/store';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    const nagivate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const authSliceConfig = useSelector((state: any) => state.authSliceConfig);
    const isAuthenticate = authSliceConfig.isAuthenticate;

    const postJobClick = () => {
        if (isAuthenticate) {
            nagivate('/post-job')
        } else {
            dispatch(messageHandle({ type: "error", message: "Please login!" }));
        }
    }

    const advertiseClick = () => {
        if (isAuthenticate) {
            nagivate('/advertise-business')
        } else {
            dispatch(messageHandle({ type: "error", message: "Please login!" }));
        }
    }
    
    const onClick = () => {
        return (
            console.log('this is click')
        )
    }

    return (
        <div className='w-full flex flex-col items-center py-10 md:px-2 lg:px-10 bg-[url("https://fairdayjobs.com/src/assets/images/hero.png")] bg-contain bg-center bg-no-repeat container'>
            <h1 className='text-black sm:text-[30px] md:text-[40px] font-bold text-center'>
                FAIRDAY JOBS MARKETPLACE
            </h1>
            <div className='text-black sm:text-[26px] md:text-[37px] font-bold flex gap-4'>
                <span>LIST JOBS</span>
                <span className=''></span>
                <span>• FIND JOBS</span>
                <span></span>
                <span>• TRADE JOBS</span>
            </div>
            <div className='mt-[85px] p-[5px] flex flex-row bg-[#172733] items-center rounded-[10px] '>
                <Button
                    text="Post All Jobs Here!"
                    onClick={postJobClick}
                    className='px-[20px] sm:text-[20px] md:text-[24px] font-bold bg-[#172733] text-white px-8  transition-all cursor-pointer border-[#172733] hover:border-[#172733] focus:outline-none'
                />
                <a href="https://fairdayjobs.com/job-search">
                    <Button
                        text="Search Jobs Earn $"
                        onClick={onClick}
                        className='px-[20px] sm:text-[20px] md:text-[24px] font-bold bg-white text-black px-8 hover:bg-gray-400 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
                    />
                </a>

            </div>

            <div className='mt-10 flex flex-row justify-between gap-10 sm:text-[16px] md:text-[20px] text-black font-bold'>
                <div className='flex flex-col gap-[14px]'>
                    <span>* Corporate</span>
                    <span>* Farm</span>
                    <span>* Home</span>
                    <span>* Small Business</span>
                    <span>* For Trade or Barter</span>
                    <span>* Verified Hiring Tools</span>
                </div>
                <div className='flex flex-col gap-[14px]'>
                    <span>* Apply for Jobs Here</span>
                    <span>* Offer your services</span>
                    <span>* Part Time & Special Jobs</span>
                    <span>* Bid on Local Work</span>
                    <span>* Earn new clients</span>
                    <span>* Barter / Trade Services</span>
                </div>
            </div>

            <div className='w-full flex flex-col sm:flex-row mt-10 gap-[2px] justify-center sm:max-w-[600px]  sm:text-[18px] md:text-[22px]'>
                <Button
                    text="Business Tool Box"
                    onClick={() => nagivate('/business-toolbox')}
                    className='w-full text-[22px] bg-primaryBlue text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none'
                />
                <Button
                    text="Applicant Tool Box"
                    onClick={() => nagivate('/applicant-toolbox')}
                    className='w-full text-[22px] bg-primaryBlue text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none '
                />
            </div>

            <div className='flex flex-col md:flex-row mt-10 gap-[10px] w-full justify-center '>
                <Button
                    text="Advertise your Business Here"
                    onClick={advertiseClick}
                    className='text-[22px] bg-[#172733] text-white px-5 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBlue focus:outline-none'
                />
                <Button
                    text="Search Local Promotions & Services Discounts"
                    onClick={onClick}
                    className='text-[22px] bg-[#172733] text-white px-5 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none'
                />
            </div>


        </div>
    )
}

export default HeroSection