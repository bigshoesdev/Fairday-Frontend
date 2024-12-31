import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
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
import { postJob } from 'src/store/user/jobSlice';

const PostJob = () => {

  const dispatch = useDispatch<AppDispatch>();

  //JobDetail component variables
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [employer, setEmploye] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState(false);

  //JobLocation component Variables
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  //Other Category component Variables
  const [otherCategory, setOtherCategory] = useState('');
  const [categoryConfirm, setCategoryConfirm] = useState(false);

  //Job Descriptoin component Variable
  const [detailJobDescription, setDetailJobDescription] = useState('');

  //Job Pay component Variable
  const [jobPayRate, setJobPayRate] = useState('');

  //Job Applicant Type Comoponent Variable
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});

  //Name  component Variable
  const [businessName, setBusinessName] = useState('');

  //Contact Component Variables
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [telephone, setTelephone] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [skype, setSkype] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [contactOther, setContactOther] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  //Address Component Variables
  const [userStreet, setUserStreet] = useState('');
  const [userCity, setUsercity] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [addressConfirm, setAddressConfirm] = useState(false);

  //Years Experience Component Variable
  const [selectedYearOption, setSelectedYearOption] = useState<string>('');

  //Job Type Component Variable
  const [selectedJobType, setSelectedJobType] = useState<string | null>(null);

  //button click event
  const buttonClick = () => {

    const applicantType = Object.keys(checkboxStates).filter(key => checkboxStates[key]);
    const data = {
      jobTitle,
      jobDescription,
      employer,
      name,
      email,
      emailConfirm,
      city,
      street,
      country,
      otherCategory,
      categoryConfirm,
      detailJobDescription,
      jobPayRate,
      businessName,
      userStreet,
      userCity,
      userCountry,
      addressConfirm,
      selectedOption,
      instagram,
      telephone,
      facebook,
      linkedin,
      skype,
      whatsApp,
      contactOther,
      contactEmail,
      selectedYearOption,
      selectedJobType,
      applicantType,
      dbName: 'job',
      action: 'create',
      key: 'job',
			avaialble: ["jobTitle", "jobDescription", "employer", "name", "email", "emailConfirm", "city", "street", "country", "otherCategory", "categoryConfirm", "detailJobDescription", "jobPayRate", "businessName", "userStreet", "userCity", "userCountry", "addressConfirm", "selectedOption", "instagram", "telephone", "facebook", "linkedin", "skype", "whatsApp", "contactOther", "contactEmail", "selectedYearOption", "selectedJobType", "applicantType"],
    }

    console.log('data', data);
    dispatch(postJob(data))

  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Create Job Post
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10'>
        <div className='mt-[-150px] w-full'>
          <JobDetail
            jobTitle={jobTitle}
            jobDescription={jobDescription}
            employer={employer}
            name={name}
            email={email}
            emailConfirm={emailConfirm}
            setJobTitle={setJobTitle}
            setJobDescription={setJobDescription}
            setEmploye={setEmploye}
            setName={setName}
            setEmail={setEmail}
            setEmailConfirm={setEmailConfirm}
          />
        </div>
        <JobLocation
          street={street}
          setStreet={setStreet}
          city={city}
          setCity={setCity}
          country={country}
          setCountry={setCountry}
        />
        <JobCategory />
        <OhterCategory
          otherCategory={otherCategory}
          setOtherCategory={setOtherCategory}
          categoryConfirm={categoryConfirm}
          setCategoryConfirm={setCategoryConfirm}
        />
        <JobDescription
          detailJobDescription={detailJobDescription}
          setDetailJobDescription={setDetailJobDescription}
        />
        <JobType
          selectedJobType={selectedJobType}
          setSelectedJobType={setSelectedJobType}
        />
        <JobPay 
          jobPayRate={jobPayRate}
          setJobPayRate={setJobPayRate}
        />
        <ApplicantType
          checkboxStates={checkboxStates}
          setCheckboxStates={setCheckboxStates}
        />
        <YearsExperience
          selectedYearOption={selectedYearOption}
          setSelectedYearOption={setSelectedYearOption}
        />
        <NameSection
          businessName={businessName}
          setBusinessName={setBusinessName}
        />
        <Address 
          userStreet={userStreet}
          userCity={userCity}
          userCountry={userCountry}
          addressConfirm={addressConfirm}
          setUserStreet={setUserStreet}
          setUsercity={setUsercity}
          setUserCountry={setUserCountry}
          setAddressConfirm={setAddressConfirm}
        />
        <Contact 
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          telephone={telephone}
          setTelephone={setTelephone}
          facebook={facebook}
          setFacebook={setFacebook}
          instagram={instagram}
          setInstagram={setInstagram}
          linkedin={linkedin}
          setLinkedIn={setLinkedIn}
          skype={skype}
          setSkype={setSkype}
          whatsApp={whatsApp}
          setWhatsApp={setWhatsApp}
          contactOther={contactOther}
          setContactOther={setContactOther}
          contactEmail={contactEmail}
          setContactEmail={setContactEmail}
        />
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
