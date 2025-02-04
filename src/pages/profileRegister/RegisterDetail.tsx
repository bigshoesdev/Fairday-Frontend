import React, { useState } from 'react';
import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RegisterDetail = ({
  name,
  setName,
  email,
  setEmail,
  emailConfirm,
  setEmailConfirm,
  otpConfirm,
  setOptConfirm,
  language,
  setLanguage
}) => {


  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>

        <TextInput
          name="employer"
          type="email"
          label="Enter Your Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style="w-full"
        />

        <TextInput
          name="email"
          type="email"
          label="Enter your email address*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style="w-full"
        />

        <FormControl variant="outlined" fullWidth>
          <InputLabel id="select-language-label">Select Language</InputLabel>
          <Select
            labelId="select-language-label"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            label="Select Language"
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
            <MenuItem value="Chinese">Chinese</MenuItem>
          </Select>
        </FormControl>
        
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="w-[25px] h-[25px] form-checkbox text-blue-600"
            checked={emailConfirm}
            onChange={() => setEmailConfirm((prev) => !prev)}
          />
          <div className='flex flex-col'>
            <span className="text-[14px] text-[#33495E]">Receive Special FAIRDAY JOBS Promotions, New Job Leads</span>
            <span className='text-[14px]'>Business Oppertunities and Advertising Discounts</span>
          </div>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="w-[25px] h-[25px] form-checkbox text-blue-600"
            checked={otpConfirm}
            onChange={() => setOptConfirm((prev) => !prev)}
          />
          <span className="text-[14px] text-[#33495E]">
            OPT Out</span>
        </label>

      </Panel>
    </div>
  );
};

export default RegisterDetail;
