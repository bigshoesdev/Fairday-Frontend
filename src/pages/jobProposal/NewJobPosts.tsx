import DropPanel from 'src/components/common/DropPanel';
import NewJobCard from 'src/pages/jobProposal/NewJobCard';

const NewJobPosts = (props: any) => {

  const { jobDetailsInfos, GroupData } = props;

  console.log("jobDetailsInfos", jobDetailsInfos );
  

  return (
    <div className="w-full">
      <DropPanel
        header={
          <div className="flex flex-col gap-2">
            <span className="text-[#1880F1] text-[24px] font-bold">Pending Jobs</span>
          </div>
        }
      >
        <div className="flex flex-col gap-4 p-6">
          {
            jobDetailsInfos.map((job, index) => (
              <NewJobCard
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

export default NewJobPosts;
