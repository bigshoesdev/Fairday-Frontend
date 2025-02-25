import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import JobDetail from 'src/pages/jobPost/JobDetail';
import JobLocation from 'src/pages/jobPost/JobLocation';
import JobCategory from 'src/pages/jobPost/JobCategory';
import OhterCategory from 'src/pages/jobPost/OhterCategory';
import JobDescription from 'src/pages/jobPost/JobDescription';
import JobType from 'src/pages/jobPost/JobType';
import JobPay from 'src/pages/jobPost/JobPay';
import ApplicantType from 'src/pages/jobPost/ApplicantType';
import YearsExperience from 'src/pages/jobPost/YearsExperience';
import NameSection from 'src/pages/jobPost/NameSection';
import Address from 'src/pages/jobPost/Address';
import Contact from 'src/pages/jobPost/Contact';
import JobImages from 'src/pages/jobPost/JobImages';
import LogoImage from 'src/pages/jobPost/LogoImage';
import AdvancedEmployer from 'src/pages/jobPost/AdvancedEmployer';
import AdvancedYears from 'src/pages/jobPost/AdvancedYears';
import AdvancedInsurance from 'src/pages/jobPost/AdvancedInsurance';
import AdvacnedAplicant from 'src/pages/jobPost/AdvacnedAplicant';
import AdvancedCurrency from 'src/pages/jobPost/AdvancedCurrency';
import AdvancedAppRequirements from 'src/pages/jobPost/AdvancedAppRequirements';
import AdvancedPayment from 'src/pages/jobPost/AdvancedPayment';
import AdvancedEmployPayment from 'src/pages/jobPost/AdvancedEmployPayment';
import AdditionalJobDetail from 'src/pages/jobPost/AdditionalJobDetail';
import PaymentArea from 'src/pages/jobPost/PaymentArea';
import Button from 'src/components/common/Button';
import DraggableModal from 'src/components/common/DraggableModal'
import { postJob, viewJob } from 'src/store/user/jobSlice';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getJobConstManage } from 'src/store/user/jobSlice';

const PostJob = () => {

  const dispatch = useDispatch<AppDispatch>();
  const jobConfig = useSelector((state: any) => state.jobConfig);

  const { jobDetails, error } = jobConfig

  const isOkay = jobDetails && jobDetails.isOkay;
  const jobId = jobDetails.result?._id;

  useEffect(() => {
    dispatch(getJobConstManage());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [jobValue, setJobValue] = useState({
    jobTitle: "",
    jobDescription: "",
    employer: "",
    name: "",
    email: "",
    emailConfirm: false,
    city: "",
    street: "",
    country: "",
    checkboxStates: {},
    selectedCategory: "",
    selectedImages: [],
    contactPreferences: {},
    selectedLogo: "",
    otherCategory: "",
    categoryConfirm: false,
    detailJobDescription: "",
    selectedJobType: "",
    jobPayRate: "",
    selectedYearOption: "",
    businessName: "",
    userStreet: "",
    userCity: "",
    userCountry: "",
    addressConfirm: false,
    instagram: "",
    telephone: "",
    facebook: "",
    linkedin: "",
    skype: "",
    whatsApp: "",
    contactOther: "",
    contactEmail: "",
    logoImage: "",
    lastConfirm: false,
    boolean: ["emailConfirm", "categoryConfirm", "addressConfirm"],
    status: 0,
  })

  useEffect(() => {
    if (jobValue.status === 1) {
    }
  }, [jobValue.status]);

  const publishJobButton = () => {
    const formData: any = new FormData();

    if (jobId) {
      formData.append("jobId", jobId);
      formData.append("status", 1);
      console.log('jobId', jobId);


    } else {
      jobValue.status = 1;
      Object.keys(jobValue).map((key: string) => {
        formData.append(key, jobValue[key]);
      })
      
      const applicantType = Object.keys(jobValue.checkboxStates).filter(key => jobValue.checkboxStates[key]);
      applicantType.forEach(type => formData.append("applicantType", type));

    
      

      jobValue.selectedImages.forEach((file) => {
        formData.append("images", file);
      });
    }
    dispatch(postJob(formData))
  }

  const viewJobButton = () => {
    const formData: any = new FormData();
    Object.keys(jobValue).map((key: string) => {
      formData.append(key, jobValue[key]);
    })

    const applicantType = Object.keys(jobValue.checkboxStates).filter(key => jobValue.checkboxStates[key]);
    
    applicantType.forEach(type => formData.append("applicantType", type));

    jobValue.selectedImages.forEach((file) => {
      formData.append("images", file);
    });

    dispatch(postJob(formData))
  }

  useEffect(() => {
    if (isOkay) {
      setIsModalOpen(true);
    }
  }, [isOkay]);

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20'>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Create Job Post
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10 '>
        <div className='mt-[-150px] w-full'>
          <JobDetail
            jobValue={jobValue}
            bufferSetJobValue={(value: any) => setJobValue(value)}
            errorJobTitle={error && error.jobTitle}
            errorJobDescription={error && error.jobDescription}
            errorEmployer={error && error.employer}
            errorName={error && error.name}
            errorEmail={error && error.email}
          />
        </div>

        <JobLocation
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
          errorStreet={error && error.street}
          errorCity={error && error.city}
          errorCountrt={error && error.country}
        />
        <JobCategory
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
          errorSelectedCategory={error && error.selectedCategory}
        />
          
        <OhterCategory
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <JobDescription
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
          errorDetailJobDescription={error && error.detailJobDescription}
        />
        <JobType
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
          errorSelectedJobType={error && error.selectedJobType}
        />
        <JobPay
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <ApplicantType
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <YearsExperience
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
          errorSelectedYearOption={error && error.selectedYearOption}
        />

        <JobImages
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        
        <NameSection
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
          errorBusinessName={error && error.businessName}
        />

        <Address
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
          errorUserStreet={error && error.userStreet}
          errorUserCity={error && error.userCity}
          errorUserCountry={error && error.userCountry}
        />

        <LogoImage
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <Contact
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <div className="relative w-full">
          <div className="bg-primaryBlue text-blue p-6 rounded-xl shadow-md z-10 cursor-pointer relative flex justify-between items-start" onClick={() => setOpen(!open)}>
            <div className='text-white text-[26px] font-bold'>
              <span>Create Advanced Job Post</span>
              <span className='ml-5 text-white text-[18px] font-normal'> (optional Sections)</span>
            </div>
            <p >
              {open ? <ExpandMoreIcon fontSize="large" className="text-white" /> : <KeyboardArrowRightIcon fontSize="large" className="text-white" />}
            </p>
          </div>
          <div
            className={`left-0 w-full transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[50000px]" : "max-h-0"}`}
          >
            <div className="bg-gray py-10 flex flex-col gap-y-10 ">
              <AdvancedEmployer
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedYears
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedInsurance
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedAppRequirements
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvacnedAplicant
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedEmployPayment
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedCurrency
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedPayment
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdditionalJobDetail
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <PaymentArea
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <input
            type="checkbox"
            id="terms"
            checked={jobValue.lastConfirm}
            onChange={() => setJobValue({ ...jobValue, lastConfirm: !jobValue.lastConfirm })}
            className="w-5 h-5 border-gray-400 cursor-pointer"
          />
          <label htmlFor="terms" className="cursor-pointer ml-2 text-[20px]">
            * Accept FAIRDAY terms and Conditions
          </label>
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="VIEW JOB POST"
            onClick={viewJobButton}
            disable={!jobValue.lastConfirm}
            className={`py-6 text-[20px] font-bold transition-all cursor-pointer rounded-xl ${!jobValue.lastConfirm ? 'bg-gray-200 text-gray-300 cursor-not-allowed hover:border-gray-200' : 'bg-primaryBlue text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none'}`}
          />
          <Button
            text="PUBLISH JOB AD"
            onClick={publishJobButton}
            disable={!jobValue.lastConfirm}
            className={`py-6 text-[20px] font-bold transition-all cursor-pointer rounded-xl ${!jobValue.lastConfirm ? 'bg-gray-200 text-gray-200 cursor-not-allowed hover:border-gray-200' : 'bg-[#d7b135] text-white hover:bg-yellow-300 hover:border-yellow-300 focus:outline-none'}`}
          />
          {isModalOpen && <DraggableModal onClose={() => setIsModalOpen(false)} />}
        </div>

      </div>
    </div>
  );
};

export default PostJob;
