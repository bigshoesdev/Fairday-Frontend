import { useState } from 'react';
import Button from 'src/components/common/Button';
import TextInput from 'src/components/common/TextInput';
import Panel from 'src/components/common/Panel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Register = () => {

    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [comments, setComments] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const buttonClick = () => {
    };

    return (
        <div>
            <Panel classStyle={'flex flex-col py-12 px-6  w-[750px]'}>

                <div className='flex flex-col gap-3'>
                    <div className="flex justify-center gap-4">
                        <img src="src/assets/images/logo_symbol.png" />
                        <div className='flex flex-col'>
                            <span className="ml-4 text-black font-bold text-[25px]">
                                Welcome to Fairday Jobs !
                            </span>
                            <span className='ml-5'><span className='font-bold'>Local Jobs</span>  and Business Marketplace</span>
                        </div>
                    </div>

                    <span className="mt-6 text-center text-black text-[16px]">
                        Coming Soon in 2025 ... we are under construction!
                    </span>

                    <div className='mt-3 flex flex-row justify-center gap-5'>
                        <span className="text-center text-black text-[18px] font-bold">
                            Local Help Wanted
                        </span>
                        <span className="text-center text-black text-[18px] font-bold">
                            Coupons
                        </span>
                        <span className="text-center text-black text-[18px] font-bold">
                            Business Opportunities
                        </span>
                    </div>

                    <span className="mt-2 text-center text-black text-[16px]">
                        Early Register for 2025
                    </span>

                    <hr className="mt-5 border-gray-300" />

                    <div className='mt-5 flex-col flex gap-2'>
                        <span className='font-bold text-[15xpx]'>EMAIL*</span>
                        <TextInput
                            type="email"
                            label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style="w-full"
                        />

                    </div>
                    <div className='flex items-center justify-center'>
                        <Button
                            text="GET LOCAL NOW!"
                            onClick={buttonClick}
                            className="w-max py-4 mt-5 bg-primaryBlue text-white px-8 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none font-bold"
                        />
                    </div>
                </div>

                <hr className="mt-10 border-gray-300" />

                <div className='mt-10 gap-5 flex flex-col'>

                    <div className='flex-col flex gap-2'>
                        <span className='font-semibold text-[15xpx]'>NAME*</span>
                        <TextInput
                            type="email"
                            label="Email your name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style="w-full"
                        />
                    </div>

                    <div className='flex-col flex gap-2'>
                        <span className='font-semibold text-[15xpx]'>LOCATION</span>
                        <TextInput
                            type="email"
                            label="Enter Address"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style="w-full"
                        />
                    </div>

                    <div className='flex-col flex gap-2'>
                        <span className='font-semibold text-[15xpx]'>JOB CATEGORY</span>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel id="select-language-label">Choose Job Category</InputLabel>
                            <Select
                                labelId="select-language-label"
                                value={jobCategory}
                                onChange={(e) => setJobCategory(e.target.value)}
                                label="Select Language"  
                            >
                                <MenuItem value="English">English</MenuItem>
                                <MenuItem value="Spanish">Spanish</MenuItem>
                                <MenuItem value="Chinese">Chinese</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                    <div className='flex-col flex gap-2'>
                        <span className='font-semibold text-[15xpx]'>COMMENTS AND SUGGESTIONS</span>
                        <TextInput
                            type="email"
                            label="Email Message"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            style="w-full"
                        />
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center gap-10'>
                    <Button
                        text="GET ADVANCED LOCAL FOR FREE"
                        onClick={buttonClick}
                        className="w-max mt-5 bg-[#d97706] text-white px-8 py-4 hover:bg-[#f59e0b] transition-all cursor-pointer hover:border-[#f59e0b] focus:outline-none font-bold"
                    />
                    <span className='text-[20px]'>Jobs, Coupons, Local Discounts, Earning Opportunities</span>
                    <span className='text-[20px] text-center text-red-500 '>Thanks you for Joining Fairday Marketplace and Helping to Keep Local Businesses Strong and Local Businesses Strong and Local!</span>
                </div>
            </Panel>
        </div>
    );
};

export default Register;
