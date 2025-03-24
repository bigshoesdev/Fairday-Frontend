import ListIcon from "@mui/icons-material/List";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

const JobCount = (props: any) => {
  const { jobDetailsInfos, viewMode, setViewMode } = props;

  // Function to handle switching view mode
  const handleViewModeChange = (mode: "row" | "column") => {
    setViewMode(mode); // Set the view mode to either "row" or "column"
  };

  return (
    <div className="w-full">
      <div className="flex justify-between text-[16px] items-center border-gray-200 font-bold">
        <div>
          <a href="#" className="text-blue-500 hover:underline font-bold">
            Upload your resume
          </a>
          <span className="text-black"> - Let employers find you</span>
          <br />

          <span className="text-black">
            Show: <span className="text-black font-bold">all jobs</span> -{" "}
            <a href="#" className="text-blue-500 font-bold hover:underline">
              {jobDetailsInfos.length} new jobs
            </a>
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex space-x-2">
            {/* List View Button */}
            <div
              className={`hidden md:block flex items-center justify-center text-[40px] cursor-pointer ${
                viewMode === "row" ? "text-blue-500 font-bold" : "text-gray-400"
              }`}
              onClick={() => handleViewModeChange("row")}
            >
              <ListIcon className="text-[20px]" style={{fontSize:"34px"}}/>
            </div>

            {/* Grid View Button */}
            {/* <div
              className={`hidden md:block flex items-center justify-center text-[40px] cursor-pointer ${
                viewMode === "column" ? "text-blue-500 font-bold" : "text-gray-400"
              }`}
              onClick={() => handleViewModeChange("column")}
            >
              <GridViewRoundedIcon className="text-[20px]"  style={{fontSize:"28px"}}/>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCount;
