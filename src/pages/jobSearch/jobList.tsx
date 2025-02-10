import JobCard from "src/pages/jobSearch/jobCard";

const JobList = (props: any) => {
  const { jobDetailsInfos, GroupData, viewMode } = props;

  return (
    <div
      className={`w-full grid ${
        viewMode === "column" ? "grid-cols-2" : "grid-cols-1"
      } gap-4`} 
    >
      {jobDetailsInfos.map((job, _id) => (
        <JobCard key={_id} job={job} GroupData={GroupData} />
      ))}
    </div>
  );
};

export default JobList;
