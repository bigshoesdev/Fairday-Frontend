import { useState } from 'react'
import Button from 'src/components/common/Button';
import { useSelector, useDispatch } from 'react-redux';
import { messageHandle } from "src/store/systemSetting/commonSlice";
import { updateCurrentJobData } from "src/store/user/jobSlice";
import { AppDispatch } from 'src/store';
import { useNavigate } from 'react-router-dom';
import WindowIcon from "@mui/icons-material/Window";
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    InputAdornment,
    CircularProgress,
    Autocomplete,
} from "@mui/material";

const HeroSection = () => {

    const nagivate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const [settingToggle, setSettingToggle] = useState(false)

    const authSliceConfig = useSelector((state: any) => state.authSliceConfig);
    const isAuthenticate = authSliceConfig.isAuthenticate;

    const jobConfig = useSelector((state: any) => state.jobConfig);
    const { keyword, category, location, radius, suggestions, jobType, applicantType, experienceYearsType, language }: any = jobConfig
    const groupedData = jobConfig?.jobCategoryList || {};


    const allCategories = Object.values(groupedData)
        .flat()
        .sort((a: any, b: any) => a.name.localeCompare(b.name));

    const handleSearchValues = (key: string, value: string) => dispatch(updateCurrentJobData({ key: key, value: value }))


    const postJobClick = () => {
        if (isAuthenticate) {
            nagivate('/post-job')
        } else {
            dispatch(messageHandle({ type: "error", message: "Please login!" }));
        }
    }

    const advertiseClick = () => {
        if (isAuthenticate) {
            nagivate('/advertise-business')
        } else {
            dispatch(messageHandle({ type: "error", message: "Please login!" }));
        }
    }

    const onClick = () => {
        return (
            console.log('this is click')
        )
    }

    return (
        <div className='text-gray-800'>
            <div className='hidden lg:block container'>

                <div className='w-full flex flex-col items-center py-10 lg:px-2 lg:px-10 bg-[url("http://localhost:5173/src/assets/images/hero.png")] bg-contain bg-center bg-no-repeat'>
                    <h1 className='text-black  sm:text-[20px] lg:text-[24px] font-bold text-center'>
                        FAIRDAY JOBS MARKETPLACE
                    </h1>
                    <div className='text-black flex justify-center sm:text-[20px] lg:text-[24px] font-bold flex gap-4'>
                        <span>• LIST JOBS</span>
                        <span className=''></span>
                        <span>• FIND JOBS</span>
                        <span></span>
                        <span>• TRADE JOBS</span>
                    </div>
                    <div className='mt-[85px] p-[5px] flex flex-row bg-[#172733] items-center rounded-[10px] '>
                        <Button
                            text="Post All Jobs Here!"
                            onClick={() => postJobClick()}
                            className='px-[20px] sm:text-[20px] lg:text-[24px] font-bold bg-[#172733] text-white px-8  transition-all cursor-pointer border-[#172733] hover:border-[#172733] focus:outline-none'
                        />
                        <a href="http://localhost:5173/job-search">
                            <Button
                                text="Search Jobs Earn $"
                                onClick={onClick}
                                className='px-[20px] sm:text-[20px] lg:text-[24px] font-bold bg-white text-black px-8 hover:bg-gray-400 transition-all cursor-pointer hover:border-gray-400 focus:outline-none'
                            />
                        </a>
                    </div>

                    <div className='mt-[50px] p-[5px] flex flex-row items-center rounded-[10px] '>
                        <Button
                            text="Shop Local Coupons & Contractor Discounts"
                            onClick={onClick}
                            className='sm:text-[20px] lg:text-[24px]  bg-[#172733] text-white px-5 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none'
                        />
                    </div>

                    <div className='flex justify-bewteen items-center gap-4'>

                        <Button
                            text="Applicant Tool Box"
                            onClick={() => nagivate('/applicant-toolbox')}
                            className='sm:text-[20px] lg:text-[24px] bg-primaryBlue text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none '
                        />

                        <div className='mt-10 flex flex-row justify-between gap-0 sm:text-[16px] lg:text-[20px] text-black font-bold'>
                            <div className='flex flex-col gap-[14px] sm:text-[12px] lg:text-[16px]'>
                                <span>* Corporate</span>
                                <span>* Farm</span>
                                <span>* Home</span>
                                <span>* Small Business</span>
                                <span>* For Trade or Barter</span>
                                <span>* Verified Hiring Tools</span>
                            </div>
                            <div className='flex flex-col gap-[14px] sm:text-[12px] lg:text-[16px]'>
                                <span>* Apply for Jobs Here</span>
                                <span>* Offer your services</span>
                                <span>* Part Time & Special Jobs</span>
                                <span>* Bid on Local Work</span>
                                <span>* Earn new clients</span>
                                <span>* Barter / Trade Services</span>
                            </div>
                        </div>

                        <Button
                            text="Business Tool Box"
                            onClick={() => nagivate('/business-toolbox')}
                            className='sm:text-[20px] lg:text-[24px] bg-primaryBlue text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none'
                        />
                    </div>

                    <div className='flex flex-col lg:flex-row mt-10 gap-[10px] w-full justify-center '>
                        <Button
                            text="Advertise your Business Here"
                            onClick={advertiseClick}
                            className='sm:text-[20px] lg:text-[24px] bg-yellow-500 text-white px-5 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBlue focus:outline-none'
                        />
                    </div>
                </div>
            </div>
            <div className='block lg:hidden container'>

                <div className='w-full h-[300px] bg-[url("http://localhost:5173/src/assets/images/hero.png")] bg-cover object-cover bg-center' />
                <h1 className='text-black text-[24px] font-bold text-center mt-4'>
                    FAIRDAY JOBS MARKETPLACE
                </h1>
                <div className='text-gray-500 text-[16px] flex justify-center font-bold flex gap-4'>
                    <span>• LIST JOBS</span>
                    <span className=''></span>
                    <span>• FIND JOBS</span>
                    <span></span>
                    <span>• TRADE JOBS</span>
                </div>
                <div className='w-full p-2 bg-[#1470ef] mt-8 rounded-md'>
                    <Box
                        sx={{
                            flex: 1,
                            height: 56,
                            backgroundColor: "#1470ef",
                            borderRadius: "6px",
                            border: "none",
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel
                                id="category-select-label"
                                sx={{
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    "&.Mui-focused": {
                                        color: "white",
                                    },
                                }}
                            >
                                <WindowIcon
                                    sx={{
                                        marginRight: 1,
                                        verticalAlign: "middle",
                                        color: category ? "white" : "rgba(255, 255, 255, 0.7)",
                                    }}
                                />
                                <span style={{ color: "white" }}>Category</span>
                            </InputLabel>
                            <Select
                                labelId="category-select-label"
                                value={category}
                                onChange={(e) => handleSearchValues("category", e.target.value)}
                                sx={{
                                    color: "white",
                                    border: "none",
                                    "& fieldset": { border: "none" },
                                    "& .MuiSvgIcon-root": { color: "white" },
                                }}
                            >
                                <MenuItem value={""}>
                                    All Categories
                                </MenuItem>
                                {allCategories.length > 0 ? (
                                    allCategories.map((cat: any, index) => (
                                        <MenuItem key={index} value={cat.id}>
                                            {cat.name}
                                        </MenuItem>
                                    ))
                                ) : (
                                    <MenuItem disabled>No results found</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className="flex justify-between items-center py-4">
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg font-bold text-sm hover:bg-yellow-400">
                        Search Local Jobs
                    </button>

                    <div className="flex items-center gap-2 text-blue-500 cursor-pointer" onClick={() => setSettingToggle(!settingToggle)}>
                        {!settingToggle ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        )}

                        <span className="text-blue-500 font-bold text-sm">Search Tools</span>
                    </div>

                </div>

                {!settingToggle &&
                    <div className='mt-6 flex flex-row justify-between gap-10 sm:text-[16px] lg:text-[20px] text-black font-bold'>
                        <div className='flex flex-col gap-[14px]'>
                            <span>* Corporate</span>
                            <span>* Farm</span>
                            <span>* Home</span>
                            <span>* Small Business</span>
                            <span>* For Trade or Barter</span>
                            <span>* Verified Hiring Tools</span>
                        </div>
                        <div className='flex flex-col gap-[14px]'>
                            <span>* Apply for Jobs Here</span>
                            <span>* Offer your services</span>
                            <span>* Part Time & Special Jobs</span>
                            <span>* Bid on Local Work</span>
                            <span>* Earn new clients</span>
                            <span>* Barter / Trade Services</span>
                        </div>
                    </div>
                }

                <div className='w-full mt-[50px] flex flex-row items-center rounded-[10px] '>
                    <Button
                        text="Shop Local Coupons & Contractor Discounts"
                        onClick={onClick}
                        className='w-full  sm:text-[20px] lg:text-[24px] bg-[#172733] text-white px-5 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none'
                    />
                </div>

                <div className='flex flex-col lg:flex-row mt-6 gap-[4px] w-full justify-center mb-0'>
                    <Button
                        text="Applicant Tool Box"
                        onClick={() => nagivate('/applicant-toolbox')}
                        className='sm:text-[20px] lg:text-[24px] bg-primaryBlue text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none '
                    />
                    <Button
                        text="Business Tool Box"
                        onClick={() => nagivate('/business-toolbox')}
                        className='sm:text-[20px] lg:text-[24px] bg-primaryBlue text-white px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBluefocus:outline-none'
                    />
                </div>

                <div className='flex flex-col lg:flex-row mt-6 gap-[10px] w-full justify-center mb-4'>
                    <Button
                        text="Advertise your Business Here"
                        onClick={advertiseClick}
                        className='sm:text-[20px] lg:text-[24px] bg-yellow-500 text-white px-5 hover:bg-primaryBlue transition-all cursor-pointer hover:border-primaryBlue focus:outline-none'
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection