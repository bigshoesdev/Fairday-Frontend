import ListIcon from "@mui/icons-material/List";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

const JobCount = () => {
  return (
    <div className="p-2 w-full">
      <div className="flex justify-between text-[16px] items-center p-4  border-gray-200 font-bold">
        <div>
          <a href="#" className="text-blue-500 hover:underline font-bold">
            Upload your resume
          </a>
          <span className="text-black"> - Let employers find you</span>
          <br />

          <span className="text-black">
            Show: <span className="text-black font-bold">all jobs</span> -{" "}
            <a href="#" className="text-blue-500 font-bold hover:underline">
              153 new jobs
            </a>
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex space-x-2">
            <div className="flex items-center justify-center text-blue-500 text-[40px]">
              <ListIcon className="text-[20px]" />
            </div>
            <div className="flex items-center justify-center text-blue-500 text-[40px]">
              <GridViewRoundedIcon className="text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCount;
