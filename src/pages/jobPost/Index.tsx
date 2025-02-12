import { useState } from 'react';
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
import { postJob } from 'src/store/user/jobSlice';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const PostJob = () => {

  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);

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

  //Job Image component Variable
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  //Logo Image component Variables
  const [selectedLogo, setSelectedLogo] = useState<File | null>(null);

  //Advanced Employer Descriptoin Component Variable
  const [selectedAdvancedEmployer, setSelectedAdvancedEmployer] = useState<string | null>(null);

  //Advanced Business Years Experience Component Variable
  const [selectedBusinessYears, setSelectedBusinessYears] = useState<string>('');

  //Insurance Coverage  Component Variable
  const [selectedInsurance, setSelectedInsurance] = useState<string | null>(null);

  //Applicant Verifications  Component Variable
  const [selectedAdvancedApplicant, setSelectedAdvancedApplicant] = useState<string | null>(null);

  //Currency Type  Component Variable
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  //Applicant Requirements Componet
  const [appRequirements, setAppRequirements] = useState<{ [key: string]: string }>({});
  const [selectedAppRequirement, setSelectedAppRequirement] = useState<string | null>(null);

  //Payment Method  Component Variable
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  //Employment Payment Component
  const [selectedEmployPayment, setSelectedEmployPayment] = useState<string | null>(null);

  //Additional Special Job Details Component
  const [specification, setSpecification] = useState<string | null>(null);
  const [schedules, setSchedules] = useState<string | null>(null);
  const [agreements, setAgreements] = useState<string | null>(null);
  const [note, setNote] = useState<string | null>(null);

  //payment area component
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('mastercard');

  const [isChecked, setIsChecked] = useState(false);


  //button click event
  const publishJob = () => {
    const formData: any = new FormData();
    formData.append("jobTitle", jobTitle);
    formData.append("jobDescription", jobDescription);
    formData.append("employer", employer);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("emailConfirm", emailConfirm);
    formData.append("city", city);
    formData.append("street", street);
    formData.append("country", country);
    formData.append("selectedCategory", selectedCategory);
    formData.append("otherCategory", otherCategory);
    formData.append("categoryConfirm", categoryConfirm);
    formData.append("detailJobDescription", detailJobDescription);
    formData.append("selectedJobType", selectedJobType || "");
    formData.append("jobPayRate", jobPayRate);
    formData.append("selectedYearOption", selectedYearOption);
    formData.append("businessName", businessName);
    formData.append("userStreet", userStreet);
    formData.append("userCity", userCity);
    formData.append("userCountry", userCountry);
    formData.append("addressConfirm", addressConfirm);
    formData.append("selectedOption", selectedOption);
    formData.append("instagram", instagram);
    formData.append("telephone", telephone);
    formData.append("facebook", facebook);
    formData.append("linkedin", linkedin);
    formData.append("skype", skype);
    formData.append("whatsApp", whatsApp);
    formData.append("contactOther", contactOther);
    formData.append("contactEmail", contactEmail);
    formData.append("logoImage", selectedLogo);

    formData.append("boolean", ["emailConfirm", "categoryConfirm", "addressConfirm"]);


    const applicantType = Object.keys(checkboxStates).filter(key => checkboxStates[key]);
    applicantType.forEach(type => formData.append("applicantType", type));

    selectedImages.forEach((file) => {
      formData.append("images", file);
    });

    dispatch(postJob(formData))

  };

  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#FAFAFA] pb-20 '>
      <div className='text-center font-bold text-[40px] text-white bg-[#526876] h-[355px] w-full pt-[100px]'>
        Create Job Post
      </div>
      <div className='bg-[#FAFAFA] flex flex-col container items-center justify-center max-w-[950px] gap-y-10 '>
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
        <JobCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
        <JobImages
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
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
        <LogoImage
          selectedLogo={selectedLogo}
          setSelectedLogo={setSelectedLogo}
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
            className={`left-0 w-full transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[5000px]" : "max-h-0"}`}
          >
            <div className="bg-gray py-10 flex flex-col gap-y-10 ">
              <AdvancedEmployer
                selectedAdvancedEmployer={selectedAdvancedEmployer}
                setSelectedAdvancedEmployer={setSelectedAdvancedEmployer}
              />

              <AdvancedYears
                selectedBusinessYears={selectedBusinessYears}
                setSelectedBusinessYears={setSelectedBusinessYears}
              />

              <AdvancedInsurance
                selectedInsurance={selectedInsurance}
                setSelectedInsurance={setSelectedInsurance}
              />

              <AdvancedAppRequirements
                appRequirements={appRequirements}
                setAppRequirements={setAppRequirements}
                selectedAppRequirement={selectedAppRequirement}
                setSelectedAppRequirement={setSelectedAppRequirement}
              />

              <AdvacnedAplicant
                selectedAdvancedApplicant={selectedAdvancedApplicant}
                setSelectedAdvancedApplicant={setSelectedAdvancedApplicant}
              />

              <AdvancedEmployPayment
                selectedEmployPayment={selectedEmployPayment}
                setSelectedEmployPayment={setSelectedEmployPayment}
              />

              <AdvancedCurrency
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
              />

              <AdvancedPayment
                selectedPayment={selectedPayment}
                setSelectedPayment={setSelectedPayment}
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
              />

              <PaymentArea
                selectedPaymentMethod={selectedPaymentMethod}
                setSelectedPaymentMethod={setSelectedPaymentMethod}
              />

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
            onClick={publishJob}
            className="bg-primaryBlue text-white py-6 text-[20px] font-bold hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none rounded-xl"
          />
          <Button
            text="PUBLISH JOB AD"
            onClick={publishJob}
            className="bg-[#d7b135] text-white py-6 text-[20px] font-bold hover:bg-yellow-300 transition-all cursor-pointer hover:border-yellow-300 focus:outline-none rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PostJob;
