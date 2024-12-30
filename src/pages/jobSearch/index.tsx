import SearchBar from "../home/SearchBar"
import JobSearchBoard from "./JobSearchBoard"

const JobSearch = () => {
    return (
        <div className='w-full items-center flex-colflex justify-center bg-[#f7fbff]'>
            <div>This is map</div>
            <SearchBar/>
            <JobSearchBoard/>
        </div>
    )
}

export default JobSearch