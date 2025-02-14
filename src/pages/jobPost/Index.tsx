import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
  

  useEffect(() => {
    dispatch(getJobConstManage());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  // const [modalOpen, setModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [jobValue, setJobValue] = useState({
    jobTitle: "",
    jobDescription: "",
    employer: "",
    name: "",
    email: "",
    emailConfirm: "",
    city: "",
    street: "",
    country: "",
    checkboxStates: {},
    selectedCategory: "",
    otherCategory: "",
    categoryConfirm: "",
    detailJobDescription: "",
    selectedJobType: "",
    jobPayRate: "",
    selectedYearOption: "",
    businessName: "",
    userStreet: "",
    userCity: "",
    userCountry: "",
    addressConfirm: "",
    instagram: "",
    telephone: "",
    facebook: "",
    linkedin: "",
    skype: "",
    whatsApp: "",
    contactOther: "",
    contactEmail: "",
    logoImage: "",
    boolean: ["emailConfirm", "categoryConfirm", "addressConfirm"],
  })

  //JobLocation component Variables
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const [contactPreferences, setContactPreferences] = useState({
    privateStatus: false,
    publicStatus: false,
    telephoneStatus: false,
    telephone: '',
    emailStatus: false,
    email: '',
    facebookStatus: false,
    facebook: '',
    instagramStatus: false,
    instagram: '',
    linkedinStatus: false,
    linkedin: '',
    skypeStatus: false,
    skype: '',
    whatsappStatus: false,
    whatsapp: '',
    otherStatus: false,
    other: ''
  });

  const [userStreet, setUserStreet] = useState('');
  const [userCity, setUsercity] = useState('');
  const [userCountry, setUserCountry] = useState('');
  const [addressConfirm, setAddressConfirm] = useState(false);

  const [selectedYearOption, setSelectedYearOption] = useState<string>('');

  const [selectedJobType, setSelectedJobType] = useState<string | null>(null);

  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);

  const [selectedAdvancedEmployer, setSelectedAdvancedEmployer] = useState<string | null>(null);

  const [selectedBusinessYears, setSelectedBusinessYears] = useState<string>('');

  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(null);

  const [selectedAdvancedApplicant, setSelectedAdvancedApplicant] = useState<string | null>(null);

  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  const [appRequirements, setAppRequirements] = useState<{ [key: string]: string }>({});
  const [selectedAppRequirement, setSelectedAppRequirement] = useState<string | null>(null);

  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const [selectedEmployPayment, setSelectedEmployPayment] = useState<string | null>(null);

  const [specification, setSpecification] = useState<string | null>(null);
  const [schedules, setSchedules] = useState<string | null>(null);
  const [agreements, setAgreements] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('mastercard');

  const [isChecked, setIsChecked] = useState(false);


  //button click event
  const viewJobButton = () => {

    const formData: any = new FormData();

    // Object.keys(jobValue).map((key: string) => {
    //   formData.append(key, jobValue[key]);
    // })

    // formData.append("jobTitle", jobTitle);
    // formData.append("jobDescription", jobDescription);
    // formData.append("employer", employer);
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("emailConfirm", emailConfirm);
    // formData.append("city", city);
    // formData.append("street", street);
    // formData.append("country", country);
    // formData.append("selectedCategory", selectedCategory);
    // formData.append("otherCategory", otherCategory);
    // formData.append("categoryConfirm", categoryConfirm);
    // formData.append("detailJobDescription", detailJobDescription);
    // formData.append("selectedJobType", selectedJobType || "");
    // formData.append("jobPayRate", jobPayRate);
    // formData.append("selectedYearOption", selectedYearOption);
    // formData.append("businessName", businessName);
    // formData.append("userStreet", userStreet);
    // formData.append("userCity", userCity);
    // formData.append("userCountry", userCountry);
    // formData.append("addressConfirm", addressConfirm);
    // formData.append("instagram", contactPreferences['instagram']);
    // formData.append("telephone", contactPreferences['telephone']);
    // formData.append("facebook", contactPreferences['facebook']);
    // formData.append("linkedin", contactPreferences['linkedin']);
    // formData.append("skype", contactPreferences['skype']);
    // formData.append("whatsApp", contactPreferences['whatsApp']);
    // formData.append("contactOther", contactPreferences['other']);
    // formData.append("contactEmail", contactPreferences['email']);
    // formData.append("logoImage", selectedLogo);
    formData.append("boolean", ["emailConfirm", "categoryConfirm", "addressConfirm"]);

    const applicantType = Object.keys(checkboxStates).filter(key => checkboxStates[key]);
    applicantType.forEach(type => formData.append("applicantType", type));

    selectedImages.forEach((file) => {
      formData.append("images", file);
    });

    dispatch(viewJob(jobValue))
    setIsModalOpen(true)

  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Create Job Post
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10 '>
        <div className='mt-[-150px] w-full'>
          <JobDetail
            jobValue={jobValue}
            bufferSetJobValue={(value: any) => setJobValue(value)}
          />
        </div>

        <JobLocation
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <JobCategory
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <OhterCategory
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <JobDescription
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <JobType
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <JobPay
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
         <ApplicantType
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        {/* <YearsExperience
          selectedYearOption={selectedYearOption}
          setSelectedYearOption={setSelectedYearOption}
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <JobImages
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <NameSection
          businessName={businessName}
          setBusinessName={setBusinessName}
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
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
          street={street}
          city={city}
          country={country}
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />

        <LogoImage
          selectedLogo={selectedLogo}
          setSelectedLogo={setSelectedLogo}
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        />
        <Contact
          contactPreferences={contactPreferences}
          setContactPreferences={setContactPreferences}
          jobValue={jobValue}
          bufferSetJobValue={(value: any) => setJobValue(value)}
        /> */}
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
              {/* <AdvancedEmployer
                selectedAdvancedEmployer={selectedAdvancedEmployer}
                setSelectedAdvancedEmployer={setSelectedAdvancedEmployer}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedYears
                selectedBusinessYears={selectedBusinessYears}
                setSelectedBusinessYears={setSelectedBusinessYears}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedInsurance
                selectedInsurance={selectedInsurance}
                setSelectedInsurance={setSelectedInsurance}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedAppRequirements
                appRequirements={appRequirements}
                setAppRequirements={setAppRequirements}
                selectedAppRequirement={selectedAppRequirement}
                setSelectedAppRequirement={setSelectedAppRequirement}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvacnedAplicant
                selectedAdvancedApplicant={selectedAdvancedApplicant}
                setSelectedAdvancedApplicant={setSelectedAdvancedApplicant}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedEmployPayment
                selectedEmployPayment={selectedEmployPayment}
                setSelectedEmployPayment={setSelectedEmployPayment}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedCurrency
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdvancedPayment
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <AdditionalJobDetail
                specification={specification}
                setSpecification={setSpecification}
                schedules={schedules}
                setSchedules={setSchedules}
                agreements={agreements}
                setAgreements={setAgreements}
                note={note}
                setNote={setNote}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              />

              <PaymentArea
                selectedPaymentMethod={selectedPaymentMethod}
                setSelectedPaymentMethod={setSelectedPaymentMethod}
                jobValue={jobValue}
                bufferSetJobValue={(value: any) => setJobValue(value)}
              /> */}

            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <input
            type="checkbox"
            id="terms"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-5 h-5 border-gray-400 cursor-pointer"
          />
          <label htmlFor="terms" className="cursor-pointer ml-2 text-[20px]">
            *  Accept FAIRDAY terms and Conditions
          </label>
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <Button
            text="VIEW JOB POST"
            onClick={viewJobButton}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
          <Button
            text="PUBLISH JOB AD"
            onClick={viewJobButton}
            className="bg-[#d7b135] text-white py-6 text-[20px] font-bold hover:bg-yellow-300 transition-all cursor-pointer hover:border-yellow-300 focus:outline-none rounded-xl"
          />
          {isModalOpen && <DraggableModal onClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
    </div>
  );
};

export default PostJob;
