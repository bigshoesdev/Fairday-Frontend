import DropPanel from 'src/components/common/DropPanel';
import EndedJobCard from 'src/pages/jobManagement/EndedJobCard';

const EndedJobs = (props: any) => {

  const { jobDetailsInfos, GroupData } = props

  return (
    <div className="w-full">
      <DropPanel
        header={
          <div className="flex flex-col gap-2">
            <span className="text-[#1880F1] text-[24px] font-bold">All Active Jobs</span>
          </div>
        }
      >
        <div className="flex flex-col gap-4 p-6">
          {
            jobDetailsInfos.map((job, index) => (
              <EndedJobCard
                key={index}
                job={job}
                GroupData={GroupData}
              />
            ))
          }
        </div>
      </DropPanel>
    </div>
  );
};

export default EndedJobs;
