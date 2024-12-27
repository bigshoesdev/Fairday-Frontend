import React, { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';
import Button from 'src/components/common/Button';

const JobDetail = () => {

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [employer, setEmploye] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState(false);

  const buttonClick = () => {
    console.log('this is button clicked');
  };

  const handleEmailConfirmChange = () => {
    setEmailConfirm((prev) => {
      const newState = !prev;
      return newState;
    });
  };


  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <TextInput
          type="email"
          label="Job title*"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style="w-full"
        />

        <TextInput
          type="email"
          label="Brief Job Description of Slogan*"
          value={jobDescription}
          rows={3}
          multiline={true}
          onChange={(e) => setJobDescription(e.target.value)}
          style="w-full"
        />

        <TextInput
          type="email"
          label="Enter Employer Name*"
          value={employer}
          onChange={(e) => setEmploye(e.target.value)}
          style="w-full"
        />

        <div className='flex justify-end'>
          <Button
            text="UPLOAD IMAGE"
            onClick={buttonClick}
            className="bg-primaryBlue text-white px-8 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none font-semibold"
          />
        </div>

        <TextInput
          type="email"
          label="Enter Your Name (if different from above)*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style="w-full"
        />

        <TextInput
          type="email"
          label="Enter Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style="w-full"
        />

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="w-[25px] h-[25px] form-checkbox text-blue-600"
            checked={emailConfirm}
            onChange={handleEmailConfirmChange}
          />
          <span className="font-bold text-[20px] text-[#33495E]">
            Email Confirmation Required for posting all jobs</span>
        </label>

      </Panel>
    </div>
  );
};

export default JobDetail;
