import Panel from "src/components/common/Panel";

const JobBoardDetail = ({ jobDetails }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-white py-4 mt-16 px-6 pb-8 rounded-[10px] w-[800px] shadow-xl gap-4 flex flex-col justify-center items-center mb-12">
        <span className="text-[24px] text-left w-full font-bold">{jobDetails?.employer}</span>
        <div className="border-solid border-black border-2 w-full">
          <img src={`http://localhost:8000${jobDetails?.images?.[0]}`} className="w-full h-72 object-cover" alt="Banner" />
          <span className="text-center text-white text-[20px] bg-red-700 w-full block py-2">
            {jobDetails?.jobTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobBoardDetail;
