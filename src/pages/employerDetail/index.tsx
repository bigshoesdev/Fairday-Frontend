import ApplicantsList from "./applicantsList";
import HeaderBanner from "./headerBanner";
import JobBoardDetail from "./jobBoardDetail";

const EmployerDetail = () => {
  return (
    <div className="w-full items-center flex-col bg-[#f7fbff]">
        <HeaderBanner/>
        <JobBoardDetail/>
        <ApplicantsList/>
    </div>
  );
};

export default EmployerDetail;
