import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import CandidateDetail from "src/pages/userProfile/candidateDetail";
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { getJobConstManage } from 'src/store/user/jobSlice';

const UserProfile = () => {

  const userConfig = useSelector((state: any) => state.authSliceConfig);
  const { user } = userConfig;
  const userId = user?.sub;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(viewAppProfile({ userId: userId }));
    dispatch(getJobConstManage())
  }, [dispatch]);

  const applicantProfileConfig = useSelector((state: any) => state.appProfileConfig);

  const { appProfileDetails } = applicantProfileConfig;

  return (
    <div className="items-center flex flex-col w-full bg-blue-100">
      <div className="w-full max-w-[1400px] bg-blue-100 p-5">
        <CandidateDetail item={appProfileDetails} />
      </div>
    </div>

  );
};

export default UserProfile;