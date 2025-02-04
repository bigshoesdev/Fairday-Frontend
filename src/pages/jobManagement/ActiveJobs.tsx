import DropPanel from 'src/components/common/DropPanel';
import ActiveJobCard from 'src/pages/jobManagement/ActiveJobCard';

const ActiveJobs = (props: any) => {

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
              <ActiveJobCard
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

export default ActiveJobs;
