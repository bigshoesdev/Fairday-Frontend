import HeaderBanner from "./headerBanner";
import JobDetail from "./jobDetail";
import JobPanel from "./jobPanel";
import SpecialJobDetail from "./specialJobDetail";

const PublishAd = () => {
  return (
    <div className="w-full items-center flex flex-col bg-blue-50">
      <HeaderBanner />
      <JobPanel/>
      <JobDetail/>
      <SpecialJobDetail/>
    </div>
  );
};
export default PublishAd;
