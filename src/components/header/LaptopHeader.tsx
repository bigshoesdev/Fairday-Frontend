import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/common/Button';
import layoutMenuList from 'src/mock/layoutMenuList.json';
import Login from 'src/pages/Login';
import SignUp from 'src/pages/SignUp';
import { AppDispatch } from 'src/store';
import { viewAppProfile } from 'src/store/user/appProfileSlice';
import { clearToken } from 'src/utlies/localStorage';
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

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
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

    const profileClick = () => {

        if (jobSeeker && business) {
            if (appProfileDetails[0]) {
                navigate('/user/userProfile')
            } else {
                navigate('/job-applicant-profile-registration')
            }
        } else if (jobSeeker) {
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
            <div className="flex justify-between items-center ">
                <div className="text-center border border-white-100 rounded-[5px] cursor-pointer p-1" onClick={toggleDrawer}>
                    <svg className="w-9 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>
                </div>

                <div
                    id="drawer-navigation"
                    ref={drawerRef}
                    className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                        } bg-white dark:bg-gray-800`}
                    aria-labelledby="drawer-navigation-label"
                >
                    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                        Menu
                    </h5>
                    <button
                        onClick={toggleDrawer}
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                    <div className="py-4 overflow-y-auto">
                        <ul className="space-y-2 font-medium">
                            {layoutMenuList.header.map((item, index) => (
                                <p onClick={() => navigate(item.link)} key={index} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                                    <span className="ms-3">{item.menu}</span>
                                </p>
                            ))}
                        </ul>
                    </div>
                </div>

                <img src="src/assets/images/logo.png" alt="Logo" className="w-[160px] xs:w-[210px] xs:h-[36px]  cursor-pointer" />
                {authSliceConfig.isAuthenticate ? (
                    <div className="relative" ref={dropdownRef}>
                        <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                            <img
                                src="https://fairdayjobs.com/src/assets/images/user1.png"
                                className="pl-5 pr-4 cursor-pointer"
                            />
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white text-white rounded-lg shadow-lg py-2 transition-all duration-300 animate-fade-in z-[50]">
                                <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={profileClick}>
                                    Profile
                                </a>
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

            </div>
            {activeModal && (
                <div onClick={handleBackgroundClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-[20px] shadow-md w-3/4">
                        {activeModal === 'login' && <Login closeModal={closeModal} switchToRegister={switchToRegister} />}
                        {activeModal === 'register' && <SignUp closeModal={closeModal} switchToLogin={switchToLogin} />}

                    </div>
                </div>
            )}
        </div>
    );
};

export default LaptopHeader;
