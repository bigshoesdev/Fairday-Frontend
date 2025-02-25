import Button from "src/components/common/Button";
import SecurityIcon from "@mui/icons-material/Security";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const UserDetail = ({ item, userprofile }) => {

  const navigate = useNavigate();

  const userConfig = useSelector((state: any) => state.authSliceConfig);
  const { user } = userConfig;
  const userId = user?.sub;

  const { jobConfig } = useSelector((state: any) => state);
  const { jobConstManage } = jobConfig;

  const locationYearsTypes = jobConstManage.filter(item => item.category === 'locationYears');
  const avatar = item[0]?.selectedIdPic || "";
  const avatarPath = avatar.startsWith("./") ? avatar.slice(1) : avatar;



  return (
    <div className="w-full flex flex-col bg-white relative items-center shadow-lg rounded-[10px] p-6">
      {userprofile === true ? (
        <div
          className="absolute top-0 right-0 rounded-bl-lg text-white p-5 py-2 bg-blue-500 rounded-tr-lg cursor-pointer"
          onClick={() => navigate('/job-applicant-profile-registration')}
        >
          Edit
        </div>
      ) : (
        <></>
      )}
      {userprofile === true ? (
        <></>
      ) : (
        <Button
          text="👨‍💻 Referral Applicant"
          className="bg-primaryBlue items-center text-white text-[16px] font-bold px-2 py-1 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
          onClick={() => console.log()}
        />
      )}
      <div className="items-center relative">
        <img
          src={`http://localhost:8000${avatarPath}`}
          className="w-40 h-40 mt-3 rounded-full object-cover border-4 border-gray-300 shadow-lg"
          alt="User Avatar"
        />


        {/* <div className="white bg-blue-500 !text-[20px] w-10 h-10 items-center rounded-[50px] text-white absolute top-2 right-2 justify-center flex">
          <CameraAltOutlinedIcon className="items-center" />
        </div> */}
      </div>
      <span className="font-semibold mt-3 text-[25px]">{item[0]?.firstName} {item[0]?.lastName}</span>
      <span className="text-[20px] font-bold mt-2">{item[0]?.otherTitle}</span>
      {userId == item[0].userId ? "" :
        <Button
          text="HIRE"
          className="bg-darkBlue items-center text-white mt-3 mb-5 text-[16px] px-10 py-3 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
          onClick={() => console.log()}
        />
      }

      <div className="w-full text-left items-center mt-2">
        <p className="text-[16px] mb-2">
          <LocationOnOutlinedIcon className="text-blue-500 mr-4 !text-[18px]" />{" "}
          {item[0]?.street} {item[0]?.city} {item[0]?.country}
        </p>
        <p className="text-[16px] mb-2">
          <BusinessCenterOutlinedIcon className="text-blue-500 mr-4 !text-[18px]" />{" "}
          5 Years(y) 2 Months(m)
        </p>
        <p className="text-[16px] mb-2">
          <WorkHistoryOutlinedIcon className="text-blue-500 mr-4 !text-[18px]" />{" "}
          {locationYearsTypes.find((each) => each._id === item[0]?.selectedLocationYears)?.string || ''}
        </p>
        <p className="text-[16px] mb-2">
          <LocalPhoneOutlinedIcon className="text-blue-500 mr-4 !text-[18px]" />{" "}
          {item[0]?.phoneNumber || '- -'}
        </p>
        <p className="text-[16px] mb-2 w-full ">
          <EmailOutlinedIcon className="text-blue-500 mr-4 !text-[18px]" />{" "}
          {item[0]?.email}
          <span className="text-right text-blue-500 float-right">
            VERIFY <SecurityIcon className=" !text-[18px]" />
          </span>
        </p>
      </div>
      {/* <div className="mt-10 mb-3 w-[80%]">
        <p className="text-[16px] mb-1 text-gray-500">
          Profile Strength
          <span className="text-blue-500 text-right float-right"> 72%</span>
        </p>
        <LinearProgress
          className="w-[100%] items-center flex"
          variant="determinate"
          value={70}
        />
      </div> */}
    </div>
  );
};

export default UserDetail;
