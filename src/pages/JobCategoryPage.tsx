import { useEffect } from "react";
import JobCategory from "src/pages/home/JobCategory";
import { getJobConstManage, getJobCategoryByAlpha } from "src/store/user/jobSlice";
import { AppDispatch } from "src/store";
import { useDispatch } from "react-redux";


const JobCategoryPage = () => {

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(getJobCategoryByAlpha({ category: "jobcategory" }));
    }, [dispatch]);

    return (
        <JobCategory></JobCategory>
    )
}

export default JobCategoryPage