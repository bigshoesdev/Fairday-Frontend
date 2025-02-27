import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';
import Button from 'src/components/common/Button';

const JobDetail = ({
  jobValue,
  bufferSetJobValue,
  errorJobTitle,
  errorJobDescription,
  errorEmployer,
  errorName,
  errorEmail,

}) => {

  const buttonClick = () => {
    console.log('this is button clicked');
  };

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <TextInput
          type="email"
          name="jobTitle"
          label="Job title*"
          value={jobValue.jobTitle}
          style="w-full"
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          error={errorJobTitle}
        />

        <TextInput
          name="jobDescription"
          type="text"
          label="Brief Job Description of Slogan*"
          value={jobValue.jobDescription}
          rows={3}
          multiline={true}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          style="w-full"
          error={errorJobDescription}
        />

        <TextInput
          name="employer"
          type="email"
          label="Enter Employer Name*"
          value={jobValue.employer}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          error={errorEmployer}
          style="w-full"
        />

        <div className='flex justify-end hidden'>
          <Button
            text="UPLOAD IMAGE"
            onClick={buttonClick}
            className="bg-primaryBlue text-white px-8 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none font-semibold"
          />
        </div>

        <TextInput
          name="name"
          type="email"
          label="Enter Your Name (if different from above)*"
          value={jobValue.name}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          error={errorName}
          style="w-full"
        />

        <TextInput
          name="email"
          type="email"
          label="Enter Email*"
          value={jobValue.email}
          onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
          error={errorEmail}
          style="w-full"
        />

        <label className="flex items-center space-x-3">
          <input
            name="emailConfirm"
            type="checkbox"
            className="w-[18px] h-[18px] sm:w-[25px] sm:h-[25px] form-checkbox text-blue-600"
            checked={jobValue.emailConfirm}
            onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: !jobValue[e.target.name] })}
          />
          <span className="font-bold text-[15px] sm:text-[20px] text-[#33495E]">
            Email Confirmation Required for posting all jobs</span>
        </label>

      </Panel>
    </div>
  );
};

export default JobDetail;
