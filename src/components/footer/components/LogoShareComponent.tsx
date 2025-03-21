import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ShareIcon from '@mui/icons-material/Share';
import MenuItem from "@mui/material/MenuItem";

const LogoShareComponent = () => {
    return (
        <div className="w-full flex flex-col justify-between items-start gap-4">
            <Box
                sx={{
                    minWidth: 150,
                    width: 180,
                    height: 40,
                    backgroundColor: "#425e72",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    paddingX: 2,
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "& .MuiSelect-icon": {
                        color: "white",
                    },
                }}
            >
                <ShareIcon sx={{ marginRight: 1, color: "white" }} />
                <FormControl fullWidth>
                    <Select
                        id="demo-simple-select"
                        displayEmpty
                        MenuProps={{ disableScrollLock: true }}
                        sx={{
                            color: "white",
                            "& .MuiSelect-select": {
                                paddingLeft: "0",
                                display: "flex",
                                alignItems: "center",
                            },
                        }}
                        renderValue={() => "SHARE"}
                    >
                        <MenuItem disabled value="">
                            SHARE
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <div className="flex">
                <img src="http://localhost:5173/src/assets/images/fb_header.png" className="opacity-50 hover:opacity-100 cursor-pointer transition-all"></img>
                <img src="http://localhost:5173/src/assets/images/ig_header.png" className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"></img>
                <img src="http://localhost:5173/src/assets/images/x_header.png" className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"></img>
                <img src="http://localhost:5173/src/assets/images/linkedin.png" className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"></img>
            </div>
        </div>
    );
};

export default LogoShareComponent;
