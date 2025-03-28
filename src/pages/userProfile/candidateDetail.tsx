import UserDetail from "../employerDetail/userdDetail";
import UserHistory from "../employerDetail/userHistory";
import Button from "src/components/common/Button";

const CandidateDetail = ({ item }: any) => {
  const viewProfileButton = () => {
  }

  return (
    <div className="bg-[#FAFAFA] flex-col sm:flex-row  w-full py-3 rounded-b-[10px] flex gap-3">
      <div className="flex-[5] flex-col">
        <UserDetail item={item} userprofile={true} />
      </div>
      <div className="flex-[7] w-full">
        <UserHistory item={item || item[0]} />
      </div>
    </div>
  );
};
export default CandidateDetail;
