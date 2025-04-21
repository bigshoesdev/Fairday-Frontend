import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobCategoryByAlpha, getJobConstManage, updateCurrentJobData, getJobsByQuery } from "src/store/user/jobSlice";
import { AppDispatch } from "src/store";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
import WindowIcon from "@mui/icons-material/Window";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Button from "src/components/common/Button";

interface JobConfigState {
  jobCategoryList: Record<string, string[]>;
  jobConstManage: { category: string; string: string, _id: string }[];
}

interface RootState {
  jobConfig: JobConfigState;
}

export default function SearchBar() {

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [searchParams]: any = useSearchParams();

  useEffect(() => {
    dispatch(getJobConstManage());
    dispatch(getJobCategoryByAlpha({ category: "jobcategory" }));
  }, [dispatch]);

  const [loading, setLoading] = useState<boolean>(false);
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const paramsObject = Object.fromEntries(searchParams.entries());
    dispatch(getJobsByQuery(paramsObject))
  }, [])

  const jobConfig = useSelector((state: RootState) => state.jobConfig);
  const { keyword, category, location, radius, suggestions, jobType, applicantType, experienceYearsType, language }: any = jobConfig

  const groupedData = jobConfig?.jobCategoryList || {};

  const jobTypeData = jobConfig.jobConstManage.filter(item => item.category === "jobtype");
  const languageTypeData = jobConfig.jobConstManage.filter(item => item.category === "language");
  const radiusTypeData = jobConfig.jobConstManage.filter(item => item.category === "radius");
  const allCategories = Object.values(groupedData)
    .flat()
    .sort((a: any, b: any) => a.name.localeCompare(b.name));

  const handleSearchValues = (key: string, value: string) => {
    dispatch(updateCurrentJobData({ key: key, value: value }))
  }


  const buttonClick = () => {
    const timeStamp = Date.now().toString();

    const queryParams = new URLSearchParams({
      id: timeStamp,
      keyword: keyword,
      language: language || "",
      category: category || "",
      location: location || "",
      radius: radius || "",
      jobType: jobType || "",
      applicantType: applicantType || "",
      experienceYearsType: experienceYearsType || "",
    });

    navigate(`/job-search?${queryParams.toString()}`);
    dispatch(getJobsByQuery(queryParams))
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(location);
    }, 800);
    return () => clearTimeout(handler);
  }, [location]);

  useEffect(() => {
    if (!debouncedSearch) return;
    fetchLocations(debouncedSearch);
  }, [debouncedSearch]);

  const fetchLocations = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://nominatim.openstreetmap.org/search?format=json&q=${query}`
      );
      const data = await response.json();
      const locationResults = data.map((item: any) => item.display_name);
      dispatch(updateCurrentJobData({ key: 'suggestions', value: locationResults }))
    } catch (error) {
      console.error("Error fetching locations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-3 bg-primaryBlue border-b border-darkBlue border-b-[1px] shadow-xl">
      <div className="container grid gap-2 xl:gap-8 lg:gap-6 grid-cols-12">

        <div className="col-span-12 xl:col-span-2 lg:col-span-6">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Job Title, keywords, ..."
            value={keyword}
            onChange={(e) => handleSearchValues('keyword', e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
              style: { backgroundColor: "#1470ef", color: "white", borderRadius: "8px", },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#1470ef",
                borderRadius: "8px",
                border: "2px solid #1470ef",
                "& fieldset": { border: "none" },
                "&:hover": { backgroundColor: "#1470ef" },
                "&.Mui-focused": {
                  backgroundColor: "#1470ef",
                  border: "2px solid #1470ef !important",
                  boxShadow: "0 0 0 2px #1470ef",
                },
              },
              "& .MuiInputBase-input": {
                color: "white",
                "::placeholder": { color: "rgba(255, 255, 255, 0.7)", opacity: 1 },
                "&:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0px 1000px #1470ef inset !important",
                  WebkitTextFillColor: "white !important",
                  border: "none !important",
                  borderRadius: "8px !important",
                  outline: "none !important",
                  appearance: "none !important",
                  backgroundClip: "content-box !important",
                },
              },
            }}
          />
        </div>

        <div className="col-span-12 xl:col-span-2 lg:col-span-6">
          <Box
            sx={{
              minWidth: 120,
              backgroundColor: "#1470ef",
              borderRadius: "6px",
              border: "none",
            }}
          >
            <FormControl fullWidth>
              <InputLabel
                id="language-select-label"
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <span style={{ color: "white" }}>Language</span>
              </InputLabel>
              <Select
                labelId="language-select-label"
                value={language}
                onChange={(e) => handleSearchValues("language", e.target.value)}
                sx={{
                  color: "white",
                  "& fieldset": { border: "none" },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "& .MuiSvgIcon-root": { color: "white" },
                }}
                renderValue={(selected) => {
                  const selectedLanguage = languageTypeData.find(
                    (item) => item._id === selected
                  );
                  return selectedLanguage ? selectedLanguage.string : "Select Language";
                }}
              >
                <MenuItem value={""} className="h-[50px]">
                  All Languages
                </MenuItem>
                {languageTypeData.length > 0 ? (
                  languageTypeData.map((item, index) => (
                    <MenuItem key={index} value={item._id} className="h-[50px]">
                      <img
                        src={`https://fairdayjobs.com/src/assets/images/${item.string}.png`}
                        alt="icon"
                        style={{ width: 30, height: 20, marginRight: 8 }}
                      />
                      {item.string}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>No Language options available</MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>

        </div>

        <div className="col-span-12 xl:col-span-2 lg:col-span-6">
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
                <span style={{ color: "white" }}>Job Type</span>
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
                  All Type
                </MenuItem>
                {jobTypeData.length > 0 ? (
                  jobTypeData.map((cat: any, index) => (
                    <MenuItem key={index} value={cat._id}>
                      {cat.string}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>No results found</MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="col-span-6 xl:col-span-2 lg:col-span-6">
          <Autocomplete
            freeSolo
            options={suggestions}
            loading={loading}
            value={location}
            onInputChange={(_event: any, newValue: string | null) =>
              handleSearchValues("location", newValue)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Location"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon style={{ color: "white" }} />
                    </InputAdornment>
                  ),
                  endAdornment: loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null,
                  style: {
                    backgroundColor: "#1470ef",
                    color: "white",
                    borderRadius: "8px",
                    border: "none", // Removes input border
                  },
                }}
                sx={{
                  "& fieldset": { border: "none" }, // Ensures no border
                }}
              />
            )}
          />
        </div>

        <div className="col-span-6 xl:col-span-2 lg:col-span-6">
          <Box
            sx={{
              minWidth: 120,
              backgroundColor: "#1470ef",
              borderRadius: "6px",
              border: "none", // Removes box border
            }}
          >
            <FormControl fullWidth>
              <InputLabel
                id="radius-select-label"
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: 1, // Spacing between icon and text
                }}
              >
                <RadioButtonCheckedIcon sx={{ marginRight: 1, color: "white" }} />
                <span style={{ color: "white" }}>Radius</span>
              </InputLabel>
              <Select
                labelId="radius-select-label"
                value={radius}
                onChange={(e) => handleSearchValues("radius", e.target.value)}
                sx={{
                  color: "white",
                  "& fieldset": { border: "none" },
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  "& .MuiSvgIcon-root": { color: "white" },
                }}
              >

                <MenuItem value={""}>
                  Infinitely Radius
                </MenuItem>
                {radiusTypeData.length > 0 ? (
                  radiusTypeData.map((item, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.string}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>No radius options available</MenuItem>
                )}
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="col-span-12 xl:col-span-2 lg:col-span-6">
          <Button
            text="Earn Money"
            onClick={buttonClick}
            className="w-full h-full bg-white font-bold text-blue-500 px-8 hover:bg-primaryBlue transition-all cursor-pointer hover:text-white hover:border-white focus:outline-none rounded-[6px]"
          />
        </div>

      </div>
    </div>
  );
}


