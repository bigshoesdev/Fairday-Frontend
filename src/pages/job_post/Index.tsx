import JobDetail from 'src/pages/job_post/JobDetail';
import JobLocation from 'src/pages/job_post/JobLocation';
import JobCategory from 'src/pages/job_post/JobCategory';
import OhterCategory from 'src/pages/job_post/OhterCategory';
import JobDescription from 'src/pages/job_post/JobDescription';
import JobType from 'src/pages/job_post/JobType';
import JobPay from 'src/pages/job_post/JobPay';
import ApplicantType from 'src/pages/job_post/ApplicantType';
import YearsExperience from 'src/pages/job_post/YearsExperience';
import NameSection from 'src/pages/job_post/NameSection';
import Address from 'src/pages/job_post/Address';
import Contact from 'src/pages/job_post/Contact';
import Button from 'src/components/common/Button';

const PostJob = () => {

  const buttonClick = () => {
    console.log("clicked!!");
  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Create Job Post
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-150px] w-full'>
          <JobDetail />
        </div>
        <JobLocation />
        <JobCategory />
        <OhterCategory />
        <JobDescription />
        <JobType />
        <JobPay />
        <ApplicantType />
        <YearsExperience />
        <NameSection />
        <Address />
        <Contact />
        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="VIEW JOB POST"
            onClick={buttonClick}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
          <Button
            text="PUBLISH JOB AD"
            onClick={buttonClick}
            className="bg-[#d7b135] text-white py-6 text-[20px] font-bold hover:bg-yellow-300 transition-all cursor-pointer hover:border-yellow-300 focus:outline-none rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default PostJob;
