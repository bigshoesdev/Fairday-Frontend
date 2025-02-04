import Button from "src/components/common/Button";

const AdvertiseContent = () => {
  return (
    <>
      <div className="w-full flex items-center flex-col border-t-[1px] border-gray-400 p-10">
        <span className="text-primaryBlue text-[30px] font-semibold">Advertising</span>
        <span className="text-[20px] font-semibold">Local Business Coupons</span>
      </div>
      <div className="bg-[#FAFAFA] w-full flex flex-col items-center pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className='bg-[url("src/assets/images/search_portal_banner_job.png")] bg-contain bg-no-repeat bg-center w-[300px] h-[200px]'></div>

          <div className="border border-gray-300 rounded-xl h-[180px] mt-2 text-primaryBlue">
            <div className="border-b pl-4">APPLICANT DASHBOARD</div>
            <div className="border-b pl-4">LOCAL WEATHER</div>
            <div className="border-b pl-4">LOCAL NEWS</div>
            <div className="border-b pl-4">STOCK MARKET</div>
            <div className="border-b pl-4">TRENDS MUSIC & ARTS</div>
            <div className="border-b pl-4">LINK TO FACEBOOK</div>
            <div className="pl-4">SNAPCHAT, SOCIAL MEDIA</div>
          </div>
          <div className='bg-[url("src/assets/images/search_portal_banner_food.png")] bg-contain bg-no-repeat bg-center w-[300px] h-[200px]'></div>
          <div className='bg-[url("src/assets/images/search_portal_banner_job.png")] bg-contain bg-no-repeat bg-center w-[300px] h-[200px]'></div>
        </div>

        <Button
            text="SEE ALL"
            className="mt-8 bg-primaryBlue py-3 text-white px-20 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
      </div>
    </>


  );
};

export default AdvertiseContent;