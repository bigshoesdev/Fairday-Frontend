import JobDetail from 'src/pages/home/JobDetail';
import { jobs } from 'src/mock/jobList.json'

const JobContent = () => {
    return (
        <div className="w-full bg-[#fafafa] grid grid-cols-1 xl:grid-cols-2 gap-8  place-items-center max-w-[1419px] container py-5">
            {jobs.map((item, index) => (
                <JobDetail key={index} item={item} />
            ))}
        </div>
    );
};

export default JobContent