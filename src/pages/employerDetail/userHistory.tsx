import Button from "src/components/common/Button";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const UserHistory = () => {
  return (
    <div className="w-full flex flex-col gap-3 relative">
        <div className="w-0 h-0 border-l-[15px] top-[-25px] left-[-200px] absolute border-l-transparent border-r-[15px] border-r-transparent border-b-[15px] border-b-blue-100"></div>

      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[16px] font-bold mb-1">
          Occupation or Services Offered
        </p>
        <p className="text-[12px]">
          From Our Category List{" "}
          <span className="text-blue-500">(Up to 5 Categories)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="text-[12px] border border-black bg-blue-200 text-black px-4 py-2 rounded-[7px]">
            UI Engineering
          </span>
          <span className="text-[12px] border border-black bg-blue-200 text-black px-4 py-2 rounded-[7px]">
            Front End Programming
          </span>
          <span className="text-[12px] border border-black bg-blue-200 text-black px-4 py-2 rounded-[7px]">
            Web Design
          </span>
          <span className="text-[12px] border border-black bg-blue-200 text-black px-4 py-2 rounded-[7px]">
            HTML.CSS3
          </span>
          <span className="text-[12px] border border-black bg-blue-200 text-black px-4 py-2 rounded-[7px]">
            UI/UX
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[16px] font-bold mb-1">Skill Set Discription</p>
        <p className="text-[12px]">
          I’m a highly skilled Full Stack Developer with a strong foundation in
          both frontend and backend technologies. My passion lies in creating
          dynamic, user-friendly applications, ensuring seamless functionality
          and a polished user experience. I thrive on solving complex problems
          and enjoy working across the entire tech stack, from crafting sleek
          interfaces to optimizing backend performance. Confident in my ability
          to deliver high-quality solutions, I’m always looking for creative
          challenges that push the boundaries of what’s possible in web
          development.
        </p>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[16px] font-bold mb-1">
          <span className="">Experience Level</span>
          <Button
            text="5 Months"
            className="bg-darkBlue items-center text-white mt-3 float-right text-[12px] px-6 py-1 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
        </p>
      </div>
      <div className="w-full flex bg-white shadow-lg rounded-[10px] p-3 px-5 gap-2">
        <div className="flex-[6] flex flex-col">
          <p className="text-[16px] font-bold mb-1">Rohit Sharma</p>
          <p className="text-[12px] mb-1">
            8-52 ear Kortlis Mosptal, Noide spc 63 201301
          </p>
          <p className="text-[12px] mb-1 text-blue-500">more</p>
          <p className="text-[12px] mb-1">1 Years at this location</p>
        </div>
        <div className="flex-[6] flex flex-col">
          <img
            src="http://localhost:5173/src/assets/images/pin_map.png"
            className="h-full
            "
          />
        </div>
      </div>
      <div className="w-full flex bg-white shadow-lg rounded-[10px] p-3 px-5 gap-2">
        <div className="flex-[7] flex flex-col">
          <p className="text-[16px] font-bold mb-1">
            Referrals from past Enployers
          </p>
          <p className="text-[12px] mb-1">
            I’m a highly skilled Full Stack Developer with a strong foundation
            in both frontend and backend technologies. My passion lies in
            creating dynamic,
          </p>
          <p className="text-[12px] mb-1 text-blue-500">Referalls Doc.. file</p>
        </div>
        <div className="flex-[5] flex flex-col">
          <img
            src="http://localhost:5173/src/assets/images/pin_map.png"
            className="h-full
            "
          />
        </div>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <div className="flex items-start gap-3">
          <div className="text-green-700 !text-[30px]">
            <TaskAltIcon />
          </div>
          <div>
            <p className="text-[16px] font-bold mb-1">Success</p>
            <p className="text-[12px] mb-1">
              Resume has been successfully uploaded
            </p>
          </div>
        </div>
        <p className="text-[16px] font-bold mb-0">Attach resume</p>
        <p className="text-[12px] mb-1">
          I’m a highly skilled Full Stack Developer with a strong foundation in
          both frontend and backend technologies.
        </p>
        <div className="w-full flex flex-col justify-center items-center py-5 border border-black pb-1">
          <Button
            text="Upload"
            className="bg-darkBlue text-white text-[12px] px-6 py-1 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
            onClick={() => console.log()}
          />
          <p className="text-[12px] mt-1">
            I’m a highly skilled Full Stack Developer
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[16px] font-bold mb-3">Education Details</p>
        <p className="text-[14px] font-bold mb-1">
          bachelor in graphic and web page design
        </p>
        <p className="text-[12px]">
          Aptech india
          <br />
          June 2013 Full Time
          <br />
          Avaible to join in 15 Days or less
          <br />
          I’m a highly skilled Full Stack Developer with a strong foundation in
          both frontend and backend technologies.
        </p>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[16px] font-bold mb-1">Work History Details</p>
        <p className="text-[14px] font-bold mb-1 mt-2">UI UX Designer</p>
        <p className="text-[12px]">
          V Resorts
          <br />
          June 2013 to PResnet(1 year 9 monts)
          <br />
          Avaible to join in 15 Days or less
          <br />
          I’m a highly skilled Full Stack Developer with a strong foundation in
          both frontend and backend technologies.
        </p>
        <p className="text-[14px] font-bold mb-1 mt-2">UI UX Designer</p>
        <p className="text-[12px]">
          Appsquadr V Resorts
          <br />
          June 2013 to PResnet(1 year 9 monts)
          <br />
          Avaible to join in 15 Days or less
          <br />
          I’m a highly skilled Full Stack Developer with a strong foundation in
          both frontend and backend technologies.
        </p>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[16px] font-bold mb-3">Pre Screening Reports</p>
        <p className="text-[14px] font-bold mb-3">Link 1</p>
        <p className="text-[12px]">
          Report : <br />
          <a href="#" className="underline">
            Medical Clearnace Certified Covide Free
          </a>
        </p>
      </div>
      <div className="w-full flex flex-col bg-white shadow-lg rounded-[10px] p-3 px-5">
        <p className="text-[16px] font-bold mb-3">Ratting & Review</p>
        <div>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
          <span className="text-yellow-400 text-[22px]">&#9733;</span>
        </div>
        <p className="text-[14px] font-bold mb-3">4.1 out of 5 star</p>
        <p className="text-[12px] mb-1">
          I’m a highly skilled Full Stack Developer with a strong foundation in
          to deliver high-quality solutions, I’m always looking for creative
          challenges that push the boundaries of what’s possible in web
          development.
        </p>
        <p className="text-[14px] font-bold mb-3">11 Nov, 2018</p>
        <hr />
        <p className="text-[16px] font-bold mb-3 mt-3">
          Past Employers Reviews
        </p>
        <div className="flex items-start gap-3 w-full pb-4">
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
                <p className="text-[16px] font-bold mb-0">Rohit Sharma</p>
                <p className="text-[12px] mb-1 text-gray-600">
                  Great Service by Localmanpower
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 text-[18px]">&#9733;</span>
                <span className="text-yellow-400 text-[18px]">&#9733;</span>
                <span className="text-yellow-400 text-[18px]">&#9733;</span>
                <span className="text-yellow-400 text-[18px]">&#9733;</span>
                <span className="text-yellow-400 text-[18px]">&#9733;</span>
                <span className="text-[14px] ml-1 font-bold text-gray-800">
                  5.0
                </span>
              </div>
            </div>
            <p className="text-[12px] text-gray-600 mb-1">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry’s standard dummy text
              ever since the 1500s...{" "}
              <span className="text-blue-500 cursor-pointer">Read more</span>
            </p>
            <p className="text-[12px] text-gray-500">1 Sep 2019</p>
          </div>
        </div>
      </div>

      <Button
        text="Save to Shortlist"
        className="bg-darkBlue items-center text-white mt-3 mb-0 float-right text-[16px] px-6 py-2 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
        onClick={() => console.log()}
      />
      <div className="flex w-full gap-3">
        <Button
          text="Request Interview"
          className="bg-darkBlue items-center w-[50%] text-white mt-0 float-right text-[16px] px-6 py-2 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
          onClick={() => console.log()}
        />
        <Button
          text="Hire"
          className="bg-white items-center w-[50%] text-darkBlue border-darkBlue border mt-0 float-right text-[16px] px-6 py-2 hover:bg-blue-600 transition-all cursor-pointer hover:text-white hover:border-blue-600 focus:outline-none"
          onClick={() => console.log()}
        />
      </div>
    </div>
  );
};
export default UserHistory;
