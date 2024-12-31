import JobCard from 'src/pages/jobSearch/jobCard';

const JobList = (props: any) => {

  const { jobDetailsInfos, GroupData } = props

  return (
    <div>
      {jobDetailsInfos.map((job, _id) => (
        <JobCard
          key={_id}
          job={job}
          GroupData={GroupData}
        />
      ))}
    </div>
  );
};

export default JobList;
