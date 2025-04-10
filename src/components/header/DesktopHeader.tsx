import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import layoutMenuList from 'src/mock/layoutMenuList.json';
import SignUp from 'src/pages/SignUp';
import { useNavigate } from 'react-router-dom';
import Login from 'src/pages/Login';
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { clearToken } from 'src/utlies/localStorage';
import { logoutSuccess } from 'src/store/auth/authSlice';
import { viewBusinessProfile } from 'src/store/user/businessProfileSlice';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import CloseFullscreen from '@mui/icons-material/CloseFullscreen';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { removeMessageBox } from 'src/store/systemSetting/messageBoxSlice';
import { IoCloseCircleOutline } from "react-icons/io5";
import { GiAbstract064 } from "react-icons/gi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const DesktopHeader: React.FC = () => {
  const navigate = useNavigate();
  const authSliceConfig = useSelector((state: any) => state.authSliceConfig);
  const user = authSliceConfig.user;
  const userId = user?.sub;
  const jobSeeker = user?.jobSeeker;
  const business = user?.business

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(viewAppProfile({ userId: userId }));
    dispatch(viewBusinessProfile({ userId: userId }));
  }, [dispatch, authSliceConfig.isAuthenticate]);

  const applicantProfileConfig = useSelector((state: any) => state.appProfileConfig);
  const messageBoxConfig = useSelector((state: any) => state.messageBoxSliceConfig);
  const messageList = messageBoxConfig?.messageList

  const { appProfileDetails } = applicantProfileConfig;
  const avatar = appProfileDetails[0]?.selectedIdPic || "";
  const avatarPath = avatar.startsWith("./") ? avatar.slice(1) : avatar;

  const BusinessProfileConfig = useSelector((state: any) => state.BusinessProfileConfig);
  const { businessProfileDetails } = BusinessProfileConfig;

  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const bufferLink = authSliceConfig?.bufferLink;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeMessageClick = (index) => {
    dispatch(removeMessageBox("message", index))
  }

  useEffect(() => {
    if (bufferLink) {
      const formattedBufferLink = bufferLink.startsWith('/')
        ? bufferLink
        : `/${bufferLink}`;

      navigate(formattedBufferLink);
    }
  }, [bufferLink])

  const handleOpenModal = (modalType: 'login' | 'register') => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    console.log('3');

    setActiveModal(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const switchToRegister = () => {
    setActiveModal('register');
  };

  const switchToLogin = () => {
    setActiveModal('login');
  };

  const handleBackgroundClick = () => {
    closeModal();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const profileClick = (profileType) => {

    // if (jobSeeker && business) {
    //   if (appProfileDetails[0]) {
    //     navigate('/user/userProfile')
    //   } else {
    //     navigate('/job-applicant-profile-registration')
    //   }
    // }
    if (profileType === 0) {
      if (appProfileDetails[0]) {
        navigate('/user/userProfile')
      } else {
        navigate('/job-applicant-profile-registration')
      }
    } else {
      if (businessProfileDetails[0]) {
        navigate('/business-profile')
      } else {
        navigate('/business-applicant-profile-registration')
      }
    }
  }

  const signOutButton = () => {
    clearToken();
    dispatch(logoutSuccess());
    setIsDropdownOpen(false);
    navigate('/')
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }

  return (
    <div className="hidden header_change:block w-full container">
      <div className="flex justify-between items-center">
        <a href="http://localhost:5173/">
          <img
            src="http://localhost:5173/src/assets/images/logo.png"
            className="w-[210px] h-[36px] cursor-pointer"
          />
        </a>

        <div className="flex justify-start items-center z-[50]">
          {layoutMenuList.header.map((item, index) => (
            <p
              key={index}
              className="text-[15px] mb-0 px-5 text-primaryGray hover:text-white border-r-[1px] border-primaryGray cursor-pointer h-[18px] transition-all"
              onClick={() => navigate(item.link)}
            >
              {item.menu}
            </p>
          ))}
          <div className="ml-5">
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Messages">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{
                    outline: "none",
                    border: "none",
                    boxShadow: "none",
                    "&:focus": { outline: "none", border: "none", boxShadow: "none" },
                  }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Badge badgeContent={messageList.length} color="primary">
                    <MailIcon className='text-white cursor-pointer' />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
            {messageList.length > 0 &&
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      width: 280,
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      // mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                {messageList.map((item, index) =>
                  <MenuItem key={index}>
                    <div className='w-full flex  justify-between items-center '>
                      <div className='flex flex-row gap-2 items-center'>
                        {
                          Object.keys(item)?.[0] === "auth" && (
                            <MdMarkEmailUnread className="text-[18px]" />
                          )
                        }
                        {
                          Object.keys(item)?.[0] === "jobpost" && (
                            <GiAbstract064 className="text-[18px]" />
                          )
                        }
                        <p className='mb-0'>{Object.values(item)?.[0].length > 25 ? `${Object.values(item)?.[0].slice(0, 25)}...` : Object.values(item)?.[0]}</p>
                      </div>
                      <IoCloseCircleOutline onClick={() => removeMessageClick(index)} className='text-[20px]' />
                    </div>
                  </MenuItem>
                )}
              </Menu>
            }

          </div>
          {authSliceConfig.isAuthenticate ? (
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                {
                  avatar ? <img
                    src={`http://localhost:8000${avatarPath}`}
                    className="w-10 h-10 rounded-full object-cover ml-5 mr-4 "
                  /> : <FaUserCircle className='text-white text-[40px] ml-5 mr-4 cursor-pointer' />
                }

                <p className="text-white mb-0 px-1">{user?.name}</p>
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-white rounded-lg shadow-lg py-2 transition-all duration-300 animate-fade-in">
                  <a className="block px-4 py-2" >
                    Profiles
                  </a>
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer ml-4" onClick={() => profileClick(0)}>
                    Job Seeker
                  </a>

                  {
                    business &&
                    <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer ml-4" onClick={() => profileClick(1)}>
                      Business
                    </a>
                  }

                  <hr />
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/jobs')}>
                    Jobs
                  </a>
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/jobs')}>
                    Advertisement
                  </a>
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/alerts')}>
                    Alerts
                  </a>
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/settings')}>
                    Settings
                  </a>
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={signOutButton}>
                    Sign Out
                  </a>
                </div>
              )}
            </div>
          ) : (
            <>
              <p onClick={() => handleOpenModal('login')} className="text-[15px] px-5 mb-0 text-white font-bold hover:text-blue-300 border-r-[1px] border-primaryGray cursor-pointer transition-all">
                Login
              </p>
              <p onClick={() => handleOpenModal('register')} className="text-[15px] px-5 mb-0 text-white font-bold hover:text-blue-300 border-r-[1px] border-primaryGray cursor-pointer transition-all">
                Register
              </p>
            </>
          )}


          <img
            src="http://localhost:5173/src/assets/images/fb_header.png"
            className="ml-10 opacity-50 hover:opacity-100 cursor-pointer transition-all hidden xl:block"
          />
          <img
            src="http://localhost:5173/src/assets/images/ig_header.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all hidden xl:block"
          />
          <img
            src="http://localhost:5173/src/assets/images/x_header.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all hidden xl:block"
          />
          <img
            src="http://localhost:5173/src/assets/images/linkedin.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all hidden xl:block"
          />
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-[20px] shadow-md w-[600px]">
            <div
              className='w-full flex justify-end cursor-pointer'
              onClick={handleBackgroundClick}
            >
              <CloseFullscreen />
            </div>
            {activeModal === 'login' && <Login switchToRegister={switchToRegister} closeModal={closeModal} />}
            {activeModal === 'register' && <SignUp switchToLogin={switchToLogin} closeModal={closeModal} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopHeader;
