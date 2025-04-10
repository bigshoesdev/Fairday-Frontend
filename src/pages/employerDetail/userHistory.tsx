import Button from "src/components/common/Button";
import { useSelector } from "react-redux";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useState } from "react";
const UserHistory = ({ item }) => {

  const { jobConfig } = useSelector((state: any) => state);
  const { jobConstManage } = jobConfig;

  const userConfig = useSelector((state: any) => state.authSliceConfig);
  const { user } = userConfig;
  const userId = user?.sub;
  const [readMore, setReadMore] = useState(false);

  const experienceLevelTypes = jobConstManage.filter(item => item.category === 'experienceLevel');
  const locationYearsTypes = jobConstManage.filter(item => item.category === 'locationYears');

  const jobCategoryTypes = jobConstManage.filter(item => item.category || item[0]?.category === 'jobcategory');

  const selectedCategories = item?.selectedCategories || item[0]?.selectedCategories;

  const CategoriesStrings = jobCategoryTypes
    .filter(job => selectedCategories?.length > 0 && selectedCategories.includes(job._id))
    .map(job => job.string);

  const createdAt = item?.createdAt;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="w-full flex flex-col gap-3 relative">
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[20px] font-bold mb-1">
          Occupation or Services Offered
        </p>
        <p className="">
          From Our Category List{" "}
          <span className="text-blue-500">(Up to 5 Categories)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {CategoriesStrings.map((category, index) => (
            <span
              key={index}
              className=" border border-black bg-blue-200 text-black px-4 py-2 rounded-[7px]"
            >
              {category}
            </span>
          ))}
        </div>

      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[20px] font-bold mb-1">Skill Set Discription </p>
        <p className="">

          {(item?.skillDetails || item[0]?.skillDetails) ? (
            <p className="">
              {readMore
                ? (item?.skillDetails || item[0]?.skillDetails)
                : (item?.skillDetails || item[0]?.skillDetails).slice(0, 100) + ' ... '}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'Read Less' : 'Read More'}
              </span>
            </p>
          ) : (
            ""
          )}

        </p>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[20px] font-bold mb-1">
          <span className="">Experience Level</span>
          {
            (item?.selectedExperienceLevel || item?.[0]?.selectedExperienceLevel) ? (
              <Button
                text={
                  experienceLevelTypes.find((each) =>
                    each._id === (item?.selectedExperienceLevel || item?.[0]?.selectedExperienceLevel)
                  )?.string || ''
                }
                className="bg-darkBlue items-center text-white mt-3 float-right px-6 py-1 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                onClick={() => console.log()}
              />
            ) : (
              <p></p>
            )
          }

        </p>
      </div>
      <div className="w-full flex bg-white shadow-lg rounded-[10px] p-3 px-5 gap-2">
        <div className="flex-[6] flex flex-col">
          {
            item?.firstName ?
              <p className="text-[20px] font-bold mb-1">{item?.firstName || item[0]?.firstName} {item?.lastName || item[0]?.lastName}</p> :
              <p className="text-[20px] font-bold">Name</p>
          }
          <p className=" mb-1">
            {item?.street || item[0]?.street} {item?.city || item[0]?.city}
          </p>
          <p className=" mb-1 text-blue-500">{item?.country || item[0]?.country}</p>
          <p className=" mb-1">
            {item?.selectedLocationYears
              ? locationYearsTypes.find((each) => each._id === item.selectedLocationYears)?.string || ''
              : ''}
            {item?.selectedLocationYears ? ' at this location' : ''}
          </p>

        </div>
        <div className="flex-[6] flex flex-col hidden">
          <img
            src="http://localhost:5173/src/assets/images/pin_map.png"
            className="h-full
            "
          />
        </div>
      </div>
      <div className="w-full flex bg-white shadow-lg rounded-[10px] p-3 px-5 gap-2 hidden">
        <div className="flex-[7] flex flex-col">
          <p className="text-[20px] font-bold mb-1">
            Referrals from past Employers
          </p>
          <p className=" mb-1">
            I’m a highly skilled Full Stack Developer with a strong foundation
            in both frontend and backend technologies. My passion lies in
            creating dynamic,
          </p>
          <p className=" mb-1 text-blue-500">Referalls Doc.. file</p>
        </div>
        <div className="flex-[5] flex flex-col  border border-gray-300 rounded-lg hidden">
          <img
            src="http://localhost:5173/src/assets/images/userprofile_refer.png"
            className="h-full rounded-lg
            "
          />
        </div>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">

        {
          item.selectedResume ?
            <div className="flex items-start gap-3">
              <div className="text-green-700 !text-[30px]">
                <TaskAltIcon />
              </div>
              <div>
                <p className="text-[20px] font-bold mb-1">Success</p>
                <p className=" mb-1">
                  Resume has been successfully uploaded
                </p>
              </div>
            </div>
            : ""
        }


        <p className="text-[20px] font-bold mb-0">Attach resume</p>
        <p className=" mb-1">
          Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.
        </p>
        {item?.selectedResume?.name &&
          <p className=" font-bold mt-3">
            {item?.selectedResume?.name}  <span className="font-normal hidden"> Uploaded on {formattedDate}</span>
          </p>
        }

        <div className="w-full flex flex-col justify-center items-center py-5 border border-black pb-1 mt-10">
          {
            item.selectedResume ?
              <Button
                text="VIEW RESUME"
                className="bg-darkBlue text-white  px-10 py-3 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                // onClick={() => window.open(fileURL, "_blank", "noopener,noreferrer")}
                onClick={() => (console.log(''))}
              /> :
              <Button
                text="UPLOAD RESUME"
                className="bg-darkBlue text-white  px-10 py-3 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                // onClick={() => window.open(fileURL, "_blank", "noopener,noreferrer")}
                onClick={() => (console.log(''))}
              />
          }

          <p className=" mt-1">
            Supported Formats: doc, pdf, upto 2MB
          </p>
        </div>


      </div>

      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[20px] font-bold mb-3">Education Details</p>
        <p className="mb-1 break-words">
          {item?.educationDetail || item[0]?.educationDetail}
        </p>
      </div>

      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[20px] font-bold mb-1 word-break">Work History Details</p>
        <p className="mb-1 break-words">
          {item?.workHistoryDetail || item[0]?.workHistoryDetail}
        </p>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5 hidden">
        <p className="text-[20px] font-bold mb-3">Pre Screening Reports</p>
        <p className=" font-bold mb-3">Link 1</p>
        <p className="">
          Report : <br />
          <a href="#" className="underline">
            Medical Clearnace Certified Covide Free
          </a>
        </p>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5 hidden">
        <p className="text-[20px] font-bold mb-3">Ratting & Review</p>
        <div>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
        </div>
        <p className=" font-bold mb-3">4.1 out of 5 star</p>
        <p className=" mb-1">
          I’m a highly skilled Full Stack Developer with a strong foundation in
          to deliver high-quality solutions, I’m always looking for creative
          challenges that push the boundaries of what’s possible in web
          development.
        </p>
        <p className=" font-bold mb-3">11 Nov, 2018</p>
        <hr />
        <p className="text-[20px] font-bold mb-3 mt-3">
          Past Employers Reviews
        </p>
        <div className="flex items-start gap-3 w-full pb-4 ">
          <div className="!w-10 flex-shrink-0">
            <img
              src="http://localhost:5173/src/assets/images/user1.png"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <div>
                <p className="text-[20px] font-bold mb-0">Rohit Sharma</p>
                <p className=" mb-1 text-gray-600">
                  Great Service by Localmanpower
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                <span className="text-yellow-400 text-[20px]">&#9733;</span>
                <span className=" ml-1 font-bold text-gray-800">
                  5.0
                </span>
              </div>
            </div>
            <p className=" text-gray-600 mb-1">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry’s standard dummy text
              ever since the 1500s...{" "}
              <span className="text-blue-500 cursor-pointer">Read more</span>
            </p>
            <p className=" text-gray-500">1 Sep 2019</p>
          </div>
        </div>
      </div>

      {
        userId == item.userId || item[0].userId ? "" :
          <>
            <Button
              text="Attach profile to Referral"
              className="bg-darkBlue items-center text-white mt-3 mb-0 float-right text-[20px] px-6 py-2 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
              onClick={() => console.log()}
            />
            <Button
              text="Save to Shortlist"
              className="bg-darkBlue items-center text-white mt0 mb-0 float-right text-[20px] px-6 py-2 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
              onClick={() => console.log()}
            />


            <div className="flex w-full gap-3">
              <Button
                text="Request Interview"
                className="bg-darkBlue items-center w-[50%] text-white mt-0 float-right text-[20px] px-6 py-2 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                onClick={() => console.log()}
              />
              <Button
                text="Hire"
                className="bg-white items-center w-[50%] text-darkBlue border-darkBlue border mt-0 float-right text-[20px] px-6 py-2 hover:bg-blue-600 transition-all cursor-pointer hover:text-white hover:border-blue-600 focus:outline-none"
                onClick={() => console.log()}
              />
            </div>

          </>
      }


    </div >
  );
};
export default UserHistory;
