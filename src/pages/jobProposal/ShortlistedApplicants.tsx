import DropPanel from 'src/components/common/DropPanel';
import { jobs } from 'src/mock/jobList.json'
import ShortlistedCard from 'src/pages/jobProposal/ShortlistedCard'
const ShortlistedApplicants = (props: any) => {

  return (
    <div className="w-full">
      <DropPanel
        header={
          <div className="flex flex-col gap-2">
            <span className="text-[#1880F1] text-[24px] font-bold">Shortlisted Applicants</span>
          </div>
        }
      >
        <div className="flex flex-col gap-4 p-6">
          {jobs.map((item, index) => (
            <ShortlistedCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default ShortlistedApplicants;
