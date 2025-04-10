import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button';
import layoutMenuList from 'src/mock/layoutMenuList.json';
import Login from 'src/pages/Login';
import SignUp from 'src/pages/SignUp';
import { FaUserCircle } from "react-icons/fa";
import { AppDispatch } from 'src/store';
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { clearToken } from 'src/utlies/localStorage';
import CloseFullscreen from '@mui/icons-material/CloseFullscreen';
import { logoutSuccess } from 'src/store/auth/authSlice';
import { viewBusinessProfile } from 'src/store/user/businessProfileSlice';


const LaptopHeader = () => {

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
    const { appProfileDetails } = applicantProfileConfig;
    const avatar = appProfileDetails[0]?.selectedIdPic || "";
    const avatarPath = avatar.startsWith("./") ? avatar.slice(1) : avatar;

    const BusinessProfileConfig = useSelector((state: any) => state.BusinessProfileConfig);
    const { businessProfileDetails } = BusinessProfileConfig;

    const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const bufferLink = authSliceConfig?.bufferLink;

    const drawerRef = useRef(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        if (bufferLink) {
            const formattedBufferLink = bufferLink.startsWith('/')
                ? bufferLink
                : `/${bufferLink}`;

            navigate(formattedBufferLink);
        }
    }, [bufferLink])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOpenModal = (modalType: 'login' | 'register') => {
        setActiveModal(modalType);
    };

    const closeModal = () => {
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
        <div className="block header_change:hidden">
            <div className="flex justify-center items-center ">
                <div className="text-center border border-white-100 rounded-[5px] cursor-pointer p-1" onClick={toggleDrawer}>
                    <svg className="w-9 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>
                </div>

                <div
                    id="drawer-navigation"
                    ref={drawerRef}
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                        } bg-[#304b5e] border-r-[1px] border-blue-500 dark:bg-gray-800`}
                    aria-labelledby="drawer-navigation-label"
                >
                    {/* <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                        Menu
                    </h5> */}
                    <a href="http://localhost:5173/" className='flex justify-center '>
                        <img
                            src="http://localhost:5173/src/assets/images/logo_symbol.png"
                            className="w-[128px] h-[102px] cursor-pointer"
                        />
                    </a>
                    <button
                        onClick={toggleDrawer}
                        type="button"
                        className="hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>
                    <div className="py-4  z-[1000]">
                        <ul className="space-y-2 font-medium">
                            <li className='mb-8 mt-4 flex justify-between items-center flex-wrap w-full'>
                                <img
                                    src="http://localhost:5173/src/assets/images/fb_header.png"
                                    className="opacity-50 hover:opacity-100 cursor-pointer transition-all"
                                />
                                <img
                                    src="http://localhost:5173/src/assets/images/ig_header.png"
                                    className="opacity-50 hover:opacity-100 cursor-pointer transition-all"
                                />
                                <img
                                    src="http://localhost:5173/src/assets/images/x_header.png"
                                    className="opacity-50 hover:opacity-100 cursor-pointer transition-all"
                                />
                                <img
                                    src="http://localhost:5173/src/assets/images/linkedin.png"
                                    className="opacity-50 hover:opacity-100 cursor-pointer transition-all"
                                />
                            </li>

                            {layoutMenuList.header.map((item, index) => (
                                <p onClick={() => navigate(item.link)} key={index} className="flex items-center py-2 text-white rounded-lg hover:text-blue-500 transition-all  group cursor-pointer">
                                    <span>{item.menu}</span>
                                </p>
                            ))}

                            <li>
                                {authSliceConfig.isAuthenticate ? (
                                    <div className="relative" ref={dropdownRef}>
                                        <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                                            {
                                                avatar ? <img
                                                    src={`http://localhost:8000${avatarPath}`}
                                                    className="w-10 h-10 rounded-full object-cover mr-4 "
                                                /> : <FaUserCircle className='text-white text-[40px] mr-4 cursor-pointer' />
                                            }

                                            <p className="text-white mb-0 px-1">{user?.name}</p>

                                        </div>

                                        {isDropdownOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white text-white rounded-lg shadow-lg py-2 transition-all duration-300 animate-fade-in z-[50]">
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
                                        < Button
                                            text="LOGIN"
                                            onClick={() => handleOpenModal('login')}
                                            className="bg-primaryBlue text-white px-2 xs:px-4 md:px-6 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                                        />
                                    </>
                                )}
                            </li>



                        </ul>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <img src="http://localhost:5173/src/assets/images/logo.png" alt="Logo" className="w-[160px] xs:w-[210px] xs:h-[36px]  cursor-pointer " />
                </div>

            </div>
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-[20px] shadow-md w-3/4">
                        <div
                            className='w-full flex justify-end cursor-pointer'
                            onClick={handleBackgroundClick}
                        >
                            <CloseFullscreen />
                        </div>
                        {activeModal === 'login' && <Login closeModal={closeModal} switchToRegister={switchToRegister} />}
                        {activeModal === 'register' && <SignUp closeModal={closeModal} switchToLogin={switchToLogin} />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LaptopHeader;
