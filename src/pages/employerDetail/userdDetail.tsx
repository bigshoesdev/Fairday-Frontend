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
import { FaUserCircle } from "react-icons/fa";


const UserDetail = ({ item, userprofile, isHideEdit, link }) => {

  const navigate = useNavigate();

  const userConfig = useSelector((state: any) => state.authSliceConfig);
  const user = userConfig?.user || {};
  // const userId = user?.sub || null

  const { jobConfig } = useSelector((state: any) => state);
  const { jobConstManage } = jobConfig;

  const locationYearsTypes = jobConstManage.filter(item => item.category === 'locationYears');
  const avatar = item?.selectedIdPic || item[0]?.selectedIdPic;
  const avatarPath = item[0]?.selectedIdPic.slice(1);

  return (
    <div className="w-full flex flex-col bg-white relative items-center shadow-lg rounded-[10px] p-6">
      {isHideEdit !== true ? (
        <div
          className="absolute top-0 right-0 rounded-bl-lg text-white p-5 py-2 bg-blue-500 rounded-tr-lg cursor-pointer"
          onClick={() => navigate(link)}
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
        {/* {
          avatar ?
            <img
              src={URL.createObjectURL(item.selectedIdPic) || ""}
              className="w-40 h-40 mt-3 rounded-full object-cover border-4 border-gray-300 shadow-lg"
              alt="User Avatar"
            /> :
            avatarPath ?
              <img
                src={`http://localhost:8000${avatarPath}`}
                className="w-40 h-40 mt-3 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                alt="User Avatar"
              />
              : <FaUserCircle className='text-gray-500 text-[10rem] ml-5 mr-4 cursor-pointer' />
        } */}
        {
          avatar ? (
            typeof avatar === "string" ? (
              <img
                src={`http://localhost:8000${avatar.slice(1)}`}
                className="w-40 h-40 mt-3 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                alt="User Avatar"
              />
            ) : (
              <img
                src={URL.createObjectURL(avatar)}
                className="w-40 h-40 mt-3 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                alt="User Avatar"
              />
            )
          ) : (
            <FaUserCircle className="text-gray-500 text-[10rem] ml-5 mr-4 cursor-pointer" />
          )
        }



        <div className="white bg-blue-500 !text-[20px] w-10 h-10 items-center rounded-[50px] text-white absolute top-2 right-4 justify-center flex">
          <CameraAltOutlinedIcon className="items-center" />
        </div>

      </div>
      <span className="font-semibold mt-3 text-[25px]">{item?.firstName || item[0]?.firstName} {item?.lastName || item[0]?.lastName}</span>
      <span className="text-[16px]  mt-2">{item?.otherTitle || item[0]?.otherTitle}</span>
      {/* {userId == item[0].userId ? "" : */}
      <Button
        text="HIRE"
        className="bg-darkBlue items-center text-white mt-3 mb-5 text-[16px] px-10 py-3 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
        onClick={() => console.log()}
      />
      {/* } */}

      <div className="w-full text-left items-center mt-2">
        <p className="text-[16px] mb-2">
          <LocationOnOutlinedIcon className="text-blue-500 mr-4 !text-[16px]" />{" "}
          {item?.street || item[0]?.street} {item?.city || item[0]?.city} {item?.country || item[0]?.country}
        </p>
        <p className="text-[16px] mb-2">
          <BusinessCenterOutlinedIcon className="text-blue-500 mr-4 !text-[16px]" />{" "}
          {locationYearsTypes.find((each) => each._id === (item?.selectedLocationYears || item[0]?.selectedLocationYears))?.string || ''}
        </p>
        <p className="text-[16px] mb-2 hidden">
          <WorkHistoryOutlinedIcon className="text-blue-500 mr-4 !text-[16px]" />{" "}
          {locationYearsTypes.find((each) => each._id === item?.selectedLocationYears)?.string || ''}
        </p>
        <p className="text-[16px] mb-2 hidden">
          <LocalPhoneOutlinedIcon className="text-blue-500 mr-4 !text-[16px]" />{" "}
          {item?.phoneNumber || ''}
        </p>
        <p className="text-[16px] mb-2">
          <EmailOutlinedIcon className="text-blue-500 mr-4 !text-[16px]" />{" "}
          {item?.email || item[0]?.email}
          <span className="text-right text-blue-500 float-right mt-3 hidden">
            VERIFY <SecurityIcon className=" !text-[16px]" />
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
