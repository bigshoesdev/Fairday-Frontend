import {useState, useEffect} from 'react'
import JobDetail from 'src/pages/home/JobDetail';

const JobContent = () => {

    const [jobList, setJobList] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const data = {size: 0, page: 1, pageSize: 6}
                const response = await fetch(`https://api.fairdayjobs.com/api/v1/user/job/get-job-by-query?${data.toString()}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({})
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setJobList(result)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
    
        fetchData();
    }, []);

    return (
        <div className="w-full bg-[#fafafa] grid grid-cols-1 xl:grid-cols-2 gap-8  place-items-center max-w-[1419px] container py-5">
            {jobList.map((item, index) => (
                <JobDetail key={index} item={item} />
            ))}
        </div>
    );
};

export default JobContent