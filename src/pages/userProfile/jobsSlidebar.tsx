import JobDetail from '../home/JobDetail';
import { jobs } from 'src/mock/jobList.json'

const JobsSlidaBar = () => {
    return(<div className="w-full bg-gray-300">
        {jobs.map((item, index) => (
                <JobDetail
                    key={index}
                    item={item}
                />
            ))}
    </div>)
}

export default JobsSlidaBar;