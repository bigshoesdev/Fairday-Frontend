import Button from "src/components/common/Button";
import SecurityIcon from "@mui/icons-material/Security";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinearProgress from "@mui/material/LinearProgress";

interface JobDetailProps {
    avatar: string;
    jobTitle: string;
    jobType: string;
    jobApplications: string;
    jobDate: string;
    userAvatar: string;
    userName: string;
    userEmail: string;
    jobIndustry: string;
    jobSeniority: string;
    jobPosision: string;
    company: string;
  }

const UserDetail: React.FC<{ item: JobDetailProps }> = ({ item }) => {
    const {
      avatar,
      jobTitle,
      jobType,
      jobApplications,
      jobDate,
      userAvatar,
      userName,
      userEmail,
      jobIndustry,
      jobSeniority,
      jobPosision,
      company,
    } = item;
    return (<div className="w-full flex flex-col bg-white items-center shadow-lg rounded-[10px] p-3">
    <Button
      text="👨‍💻 Referral Applicant"
      className="bg-primaryBlue items-center text-white text-[14px] font-bold px-2 py-1 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
      onClick={() => console.log()}
    />
    <img src={userAvatar} className="w-20 h-20 mt-3" alt="User Avatar" />
    <span className="font-semibold">{userName}</span>
    <span className="text-[12px]">
      UI/UX Designer at Tecorts technolgies
    </span>
    <Button
      text="HIRE"
      className="bg-darkBlue items-center text-white mt-3 mb-5 text-[12px] px-6 py-1 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
      onClick={() => console.log()}
    />
    <div className="w-full text-left items-center">
      <p className="text-[12px] mb-2">
        <LocationOnOutlinedIcon className="text-blue-500 mr-2 !text-[18px]" />{" "}
        8-52 ear Kortlis Mosptal, Noide spc 63
      </p>
      <p className="text-[12px] mb-2">
        <BusinessCenterOutlinedIcon className="text-blue-500 mr-2 !text-[18px]" />{" "}
        5 Years(y) 2 Months(m)
      </p>
      <p className="text-[12px] mb-2">
        <WorkHistoryOutlinedIcon className="text-blue-500 mr-2 !text-[18px]" />{" "}
        INR2 lakh(s) 20 Thoushand
      </p>
      <p className="text-[12px] mb-2">
        <LocalPhoneOutlinedIcon className="text-blue-500 mr-2 !text-[18px]" />{" "}
        991096776
      </p>
      <p className="text-[12px] mb-2 w-full ">
        <EmailOutlinedIcon className="text-blue-500 mr-2 !text-[18px]" />{" "}
        rohit.aharam@jacob.com
        <span className="text-right text-blue-500 float-right">
          VERIFY <SecurityIcon className=" !text-[18px]" />
        </span>
      </p>
    </div>
    <div className="mt-3 mb-3 w-[80%]">
      <p className="text-[12px] mb-1 text-gray-500">
          Profile Strength
          <span className="text-blue-500 text-right float-right"> 72%</span>
      </p>
      <LinearProgress
        className="w-[100%] items-center flex"
        variant="determinate"
        value={70}
      />
    </div>
  </div>)
}

export default UserDetail;