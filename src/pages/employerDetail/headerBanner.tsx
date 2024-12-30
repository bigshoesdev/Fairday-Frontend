const HeaderBanner = () => {
  return (
    <div className='w-screen bg-darkTealGray flex flex-col justify-center items-center bg-[url("http://localhost:5173/src/assets/images/footer-banner.png")] bg-cover h-[400px]'>
      <span className="text-[70px] text-white font-semibold">
        Welcome Employer
      </span>
      <span className="text-[70px] text-white font-semibold mt-[-20px]">
        XYZ
      </span>
      <span className="text-[50px] text-white mt-[20px]">
        Job Applicant Review, Interview & Hire
      </span>
    </div>
  );
};
export default HeaderBanner;
