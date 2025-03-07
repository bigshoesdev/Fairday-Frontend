import Panel from "src/components/common/Panel";

const JobBoardDetail = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-white py-4 mt-16 px-6 pb-8 rounded-[10px] w-[800px] shadow-xl gap-4 flex flex-col justify-center items-center mb-12">
        <span className="text-[20px] text-left w-full">Job Ad #12345</span>
        <div className="border-solid border-black border-2">
          <img src="https://fairdayjobs.com/src/assets/images/home_banner2.png" alt="Banner" />
          <span className="text-center text-white text-[20px] bg-red-700 w-full block py-2">
            IT Professional Wanted
          </span>
        </div> 
      </div>
    </div>
  );
};

export default JobBoardDetail;
