import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobCategoryByAlpha } from "src/store/user/jobSlice";
import { AppDispatch } from "src/store";
import Button from "src/components/common/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { TextField, InputAdornment } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WindowIcon from "@mui/icons-material/Window";

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();

  const [language, setLanguage] = React.useState("");
  const [radius, setRadius] = React.useState("");

  useEffect(() => {
    dispatch(getJobCategoryByAlpha({ category: "jobcategory" }));
  }, [dispatch]);

  const languageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  const radiusChange = (event: SelectChangeEvent) => {
    setRadius(event.target.value as string);
  };

  const buttonClick = () => {
    console.log("button clicked!!!");
  };

  return (
    <div className="w-full p-3 bg-primaryBlue">
      <div className="container hidden sm:flex sm:flex-row items-center justify-center   gap-x-5 gap-y-4">
        <Box
          sx={{
            minWidth: 120,
            width: 150,
            height: 50,
            backgroundColor: "#1470ef",
            borderRadius: "6px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
          }}
        >
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              }}
            >
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Age"
              onChange={languageChange}
              sx={{ color: "white" }}
            >
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>Spanish</MenuItem>
              <MenuItem value={30}>Chinese</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          variant="outlined"
          placeholder="Job Title, Keywords, or Company"
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
            flex: 1, // Adjust width as needed
          }}
        />

        <Box
          sx={{
            flex: 1,
            height: 56,
            backgroundColor: "#1470ef",
            borderRadius: "6px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
          }}
        >
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-focused": {
                  color: "rgba(255, 255, 255, 0.7)",
                },
              }}
            >
              <WindowIcon sx={{ marginRight: 1, verticalAlign: "middle" }} />
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Age"
              onChange={languageChange}
              sx={{ color: "white" }}
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
            flex: 1, // Adjust width as needed
          }}
        />

        <Box
          sx={{
            minWidth: 120,
            width: 150,
            height: 50,
            backgroundColor: "#1470ef",
            borderRadius: "6px",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
          }}
        >
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              }}
            >
              <RadioButtonCheckedIcon sx={{ marginRight: 1 }} />
              Radius
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={radius}
              label="Age"
              onChange={radiusChange}
              sx={{ color: "white" }}
            >
              <MenuItem value={10}>5km</MenuItem>
              <MenuItem value={20}>10km</MenuItem>
              <MenuItem value={30}>25km</MenuItem>
              <MenuItem value={40}>50km</MenuItem>
              <MenuItem value={50}>100km</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          text="FIND JOBS"
          onClick={buttonClick}
          className="bg-white font-bold text-blue-500 px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:text-white hover:border-white focus:outline-none rounded-[6px]"
        />
      </div>
    </div>
  );
}
