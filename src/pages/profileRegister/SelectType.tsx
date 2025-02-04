import React, { useState } from "react";
import Panel from "src/components/common/Panel";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      fontSize: "20px", // Set text size to 20px
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const SelectType = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string>("Option");
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: string) => {
    setSelectedOption(option); // Update selected option
    handleClose();
  };

  const buttonWidth = anchorEl?.offsetWidth;

  return (
    <div className="w-full">
      <Panel classStyle={"flex flex-col p-12 bg-primaryBlue rounded-2xl gap-5 shadow"}>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
          style={{
            justifyContent: "space-between", // Space between text and icon
            textTransform: "none", // Prevent uppercase text transformation
            padding: "16px",
            backgroundColor: "white",
            color: "black",
            border: "1px solid rgb(243, 244, 246)",
            fontSize: "20px",
          }}
          sx={{
            "&:focus": {
              outline: "none", // Remove button outline on focus
            },
          }}
        >
          <span>{selectedOption}</span>
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              minWidth: buttonWidth,
            },
          }}
        >
          <MenuItem onClick={() => handleMenuItemClick("Edit")} disableRipple>
            Commerical Employer
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Duplicate")} disableRipple>
            Home or Farm Hiring
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("Archive")} disableRipple>
            Personal Hiring
          </MenuItem>
        </StyledMenu>
      </Panel>
    </div>
  );
};

export default SelectType;
