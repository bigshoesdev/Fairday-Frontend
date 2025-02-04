import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { Filters } from "../jobSearch";

export default function JobSearchBar({
  filters,
  onSearchChange,
}: {
  filters: Filters;
  onSearchChange: (newFilters: Partial<typeof filters>) => void;
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getJobCategoryByAlpha({ category: "jobcategory" }));
  }, [dispatch]);

  const languageChange = (event: SelectChangeEvent) => {
    onSearchChange({ language: event.target.value });
  };

  const radiusChange = (event: SelectChangeEvent) => {
    onSearchChange({ radius: Number(event.target.value) });
  };

  const handleJobTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange({ jobTitle: event.target.value });
  };

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    onSearchChange({ category: event.target.value });
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange({ location: event.target.value });
  };

  const buttonClick = () => {
    const queryParams = new URLSearchParams();

    // Add each filter to the query string if it has a value
    if (filters.language) queryParams.append("language", filters.language);
    if (filters.jobTitle) queryParams.append("jobTitle", filters.jobTitle);
    if (filters.category) queryParams.append("category", filters.category);
    if (filters.location) queryParams.append("location", filters.location);
    if (filters.radius) queryParams.append("radius", filters.radius.toString());
    if (filters.sortBy) queryParams.append("sortBy", filters.sortBy);
    if (filters.distance)
      queryParams.append("distance", filters.distance.toString());
    if (filters.salary) queryParams.append("salary", filters.salary.toString());
    if (filters.employmentType)
      queryParams.append("employmentType", filters.employmentType);
    if (filters.locationSelect)
      queryParams.append("locationSelect", filters.locationSelect);

    // Construct the full URL with query params
    const currentPath = window.location.pathname;

    // Build the new URL with the current path and updated query parameters
    const newUrl = `${currentPath}?${queryParams.toString()}`;

    // Use navigate to update the URL
    navigate(newUrl);
    // Navigate to the new URL (you can use window.location.href to update the browser URL)
    // This will reload the page with the new URL
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
              value={filters.language}
              label="Age"
              onChange={languageChange}
              sx={{ color: "white" }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          variant="outlined"
          value={filters.jobTitle}
          onChange={handleJobTitleChange}
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
              value={filters.category}
              label="Category"
              onChange={handleCategoryChange}
              sx={{ color: "white" }}
            >
              <MenuItem value="Tech">Tech</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          variant="outlined"
          placeholder="Location / Zip"
          value={filters.location}
          onChange={handleLocationChange}
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
              value={filters.radius.toString()}
              onChange={radiusChange}
              label="location"
              sx={{ color: "white" }}
            >
              <MenuItem value={5}>5km</MenuItem>
              <MenuItem value={10}>10km</MenuItem>
              <MenuItem value={25}>25km</MenuItem>
              <MenuItem value={50}>50km</MenuItem>
              <MenuItem value={100}>100km</MenuItem>
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
