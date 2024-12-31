import Button from 'src/components/common/Button';

const HeroSection = () => {

    const onClick = () => {
        return (
            console.log('this is click')
        )
    }

    return (
        <div className='flex flex-col items-center py-10 md:px-2 lg:px-10 bg-[url("http://localhost:5173/src/assets/images/hero.png")] bg-contain bg-center bg-no-repeat'>
            <p className='text-black sm:text-[30px] md:text-[40px] font-bold text-center'>
                FAIRDAY JOBS MARKETPLACE
            </p>
            <div className='text-black sm:text-[26px] md:text-[37px] font-bold flex gap-4'>
                <span>LIST JOBS</span>
                <span className=''></span>
                <span>• FIND JOBS</span>
                <span></span>
                <span>• TRADE JOBS</span>
            </div>
            <div className='mt-[85px] p-[5px] flex flex-row bg-[#172733] items-center rounded-[10px]'>
                <a href="http://localhost:5173/post-job">
                    <span className='px-[30px] sm:text-[20px] md:text-[24px] text-white content-center cursor-pointer'>Post All Jobs Here!</span>
                </a>
                <a href="http://localhost:5173/job-search">
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

            <div className='flex flex-col sm:flex-row mt-10 gap-[10px] justify-between sm:w-auto w-full sm:text-[18px] md:text-[22px]'>
                <Button
                    text="Business Tool Box"
                    onClick={onClick}
                    className='px-[50px]  bg-primaryBlue text-white px-8 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none'
                />
                <Button
                    text="Applicant Tool Box"
                    onClick={onClick}
                    className='ml-1 px-[50px] bg-primaryBlue text-white px-8 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none'
                />
            </div>

            <div className='flex flex-col md:flex-row mt-10 gap-[10px]'>
                <Button
                    text="Advertise your Business Here"
                    onClick={onClick}
                    className='px-[50px] text-[22px] bg-[#172733] text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBlue focus:outline-none'
                />
                <Button
                    text="Search Local Promotions & Services Discounts"
                    onClick={onClick}
                    className='ml-1 px-[50px] text-[22px] bg-[#172733] text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none'
                />
            </div>


        </div>
    )
}

export default HeroSection