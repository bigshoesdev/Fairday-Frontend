import CandidateDetail from "./candidateDetail";
import { jobs } from "src/mock/jobList.json";

const UserProfile = () => {
  return (
    <div className="items-center flex flex-col w-full bg-blue-100">
  <div className="w-full max-w-[1400px] bg-blue-100 p-5">
    <CandidateDetail item={jobs[0]} />
  </div>
</div>

  );
};

export default UserProfile;