import { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";
import HeaderBanner from "./headerBanner";
import JobDetail from "./jobDetail";
import JobPanel from "./jobPanel";
import SpecialJobDetail from "./specialJobDetail";
import ApplyTap from 'src/pages/job-detail/ApplyTap';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { getJobConstManage } from "src/store/user/jobSlice";

const JobDetailPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const jobConfig = useSelector((state: any) => state.jobConfig);
  const { jobConstManage } = jobConfig;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const jobId = searchParams.get("id");

  const [activeModal, setActiveModal] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [jobDeatil, setJobDeatil] = useState(null);

  const toggleDetail = () => {
    setIsDetail(prev => !prev);
  };

  useEffect(() => {

    async function fetchData(jobId) {
      const response = await axios.get(`http://localhost:8000/api/v1/user/job/get-job-detail/${jobId}`);
      if (response.data) {
        setJobDeatil(response.data)
      }
    }

    if (jobId) {
      fetchData(jobId)
    }
    dispatch(getJobConstManage());
  }, [jobId])

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) setActiveModal(false);
  };

  return (
    <div className="w-full items-center flex flex-col bg-blue-50">
      <HeaderBanner />
      {
        jobDeatil &&
        Object.keys(jobDeatil).length > 0 &&
        <JobPanel
          jobDeatil={jobDeatil}
          ApplyClicked={() => setActiveModal(true)}
          isDetail={isDetail}
          toggleDetail={toggleDetail}
        />
      }
      {isDetail &&
        <JobDetail
          jobDeatil={jobDeatil} jobConstManage={jobConstManage}
        />
      }
      {isDetail &&
        <SpecialJobDetail
          jobDeatil={jobDeatil} jobConstManage={jobConstManage}
        />
      }
      {activeModal && (
        <div
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white rounded-[20px] shadow-md w-[500px]">
            {activeModal && <ApplyTap closeModal={() => setActiveModal(false)} />}
          </div>
        </div>
      )}
    </div>
  );
};
export default JobDetailPage;