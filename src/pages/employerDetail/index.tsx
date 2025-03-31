import ApplicantsList from "./applicantsList";
import HeaderBanner from "./headerBanner";
import JobBoardDetail from "./jobBoardDetail";
import { useParams } from "react-router-dom";
import { viewJobById, getAllApplicants, getJobConstManage } from "src/store/user/jobSlice";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { useEffect } from "react";

const EmployerDetail = () => {

  const id = useParams<{ id: string }>();
  const { jobConfig } = useSelector((state: any) => state);
  const { jobDetails, allApplicants, jobConstManage } = jobConfig;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getJobConstManage());
    dispatch(viewJobById(id));
    dispatch(getAllApplicants(id));
  }, [dispatch]);


  return (
    <div className="w-full items-center flex-col bg-[#f7fbff]">
      <HeaderBanner />
      <JobBoardDetail jobDetails={jobDetails} />
      <ApplicantsList
        jobConstManage={jobConstManage}
        jobDetails={jobDetails}
        allApplicants={allApplicants}
      />
    </div>
  );
};

export default EmployerDetail;
