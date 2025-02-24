import UserDetail from "../employerDetail/userdDetail";
import UserHistory from "../employerDetail/userHistory";

const CandidateDetail = ({item}) => {
  console.log('item', item);
  
  return (
    <div className="bg-blue-100 w-full px-5 py-3 rounded-b-[10px] flex gap-3">
      <div className="flex-[5]">
        <UserDetail item={item} userprofile={true}/>
      </div>
      <div className="flex-[7]">
        <UserHistory item={item} userprofile={true}/>
      </div>
    </div>
  );
};
export default CandidateDetail;
