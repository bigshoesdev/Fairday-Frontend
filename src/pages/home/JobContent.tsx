import JobDetail from 'src/pages/home/JobDetail';
import { jobs } from 'src/mock/jobList.json'

const JobContent = () => {

    return (
        <div className='w-full bg-[#fafafa] p-10 justify-between items-center grid xs:grid-cols-1 md:grid-cols-2 gap-4'>
            {jobs.map((item, index) => (
                <JobDetail
                    key={index}
                    item={item}
                />
            ))}
        </div>

    )
}

export default JobContent