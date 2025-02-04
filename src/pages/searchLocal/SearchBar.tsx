import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobCategoryByAlpha } from 'src/store/user/jobSlice';
import { AppDispatch } from 'src/store';
import Button from 'src/components/common/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from "@mui/icons-material/Language";
import WindowIcon from '@mui/icons-material/Window';


export default function SearchBar() {

    const dispatch = useDispatch<AppDispatch>();

    const [language, setLanguage] = React.useState('');
    const [radius, setRadius] = React.useState('');

    useEffect(() => {
        dispatch(getJobCategoryByAlpha({ category: 'jobcategory' }));
    }, [dispatch]);

    const languageChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    const radiusChange = (event: SelectChangeEvent) => {
        setRadius(event.target.value as string);
    };

    const buttonClick = () => {
        console.log('button clicked!!!')
    }

    return (
        <div className='w-full p-10 bg-primaryBlue hidden sm:flex sm:flex-col items-center justify-center gap-x-20 gap-y-4 '>
            <span className='text-white text-[40px] font-bold text-center'>
                SEARCH LOCAL DISCOUNTS & SERVICES COUPONS
            </span>
            <div className='container grid grid-cols-3 gap-10'>

                <TextField
                    variant="outlined"
                    placeholder="Search Local Discount & Services Coupons"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{ color: "white" }} />
                            </InputAdornment>
                        ),
                        style: {
                            backgroundColor: "#1470ef", // Blue background
                            color: "white",
                            borderRadius: "8px",
                        },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { border: "none" }, // Remove border
                            "&:hover fieldset": { border: "none" },
                            "&.Mui-focused fieldset": { border: "none" },
                        },
                        "& .MuiInputBase-input": {
                            color: "white",
                            "::placeholder": {
                                color: "rgba(255, 255, 255, 0.7)", // Placeholder color
                                opacity: 1, // Ensure visibility
                            },
                        },
                        height: 50,
                        flex: 1 // Adjust width as needed
                    }}
                />

                <Box sx={{
                    flex: 1,
                    height: 56,
                    backgroundColor: '#1470ef',
                    borderRadius: '6px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiSelect-icon': {
                        color: 'white',
                    },
                }}>
                    <FormControl fullWidth>
                        <InputLabel
                            id="demo-simple-select-label" sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-focused': {
                                    color: "rgba(255, 255, 255, 0.7)",
                                },
                            }}>
                                <WindowIcon sx={{ marginRight: 1, verticalAlign: "middle" }} />
                            Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={language}
                            label="Age"
                            onChange={languageChange}
                            sx={{ color: 'white' }}
                        >
                            <MenuItem value={10}>English</MenuItem>
                            <MenuItem value={20}>Spanish</MenuItem>
                            <MenuItem value={30}>Chinese</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <TextField
                    variant="outlined"
                    placeholder="Location / Zip"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnIcon style={{ color: "white" }} />
                            </InputAdornment>
                        ),
                        style: {
                            backgroundColor: "#1470ef", // Blue background
                            color: "white",
                            borderRadius: "8px",
                        },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { border: "none" }, // Remove border
                            "&:hover fieldset": { border: "none" },
                            "&.Mui-focused fieldset": { border: "none" },
                        },
                        "& .MuiInputBase-input": {
                            color: "white",
                            "::placeholder": {
                                color: "rgba(255, 255, 255, 0.7)", // Placeholder color
                                opacity: 1, // Ensure visibility
                            },
                        },
                        height: 50,
                        flex: 1 // Adjust width as needed
                    }}
                />

                <Box sx={{
                    flex: 1,
                    height: 56,
                    backgroundColor: '#1470ef',
                    borderRadius: '6px',
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiSelect-icon': {
                        color: 'white',
                    },
                }}>
                    <FormControl fullWidth>
                        <InputLabel
                            id="demo-simple-select-label" sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                '&.Mui-focused': {
                                    color: "rgba(255, 255, 255, 0.7)",
                                },
                            }}>
                                <LanguageIcon sx={{ marginRight: 1, verticalAlign: "middle" }} />

                            Language
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={language}
                            label="Age"
                            onChange={languageChange}
                            sx={{ color: 'white' }}
                        >
                            <MenuItem value={10}>English</MenuItem>
                            <MenuItem value={20}>Spanish</MenuItem>
                            <MenuItem value={30}>Chinese</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Button
                    text="SEARCH"
                    onClick={buttonClick}
                    className="bg-white w-[200px] font-bold text-blue-500 px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:text-white hover:border-white focus:outline-none rounded-[6px]"
                />
            </div>




        </div>

    );
}