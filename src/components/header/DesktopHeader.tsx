import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import layoutMenuList from 'src/mock/layoutMenuList.json';
import SignUp from 'src/pages/SignUp';
import { useNavigate } from 'react-router-dom';
import Login from 'src/pages/Login';

const DesktopHeader: React.FC = () => {
  const navigate = useNavigate();
  const authSliceConfig = useSelector((state: any) => state.authSliceConfig);
  const user = authSliceConfig.user;

  const [activeModal, setActiveModal] = useState<'login' | 'register' | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="hidden header_change:block w-full container">
      <div className="flex justify-between items-center">
        <a href="https://fairdayjobs.com/">
          <img
            src="https://fairdayjobs.com/src/assets/images/logo.png"
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

          {authSliceConfig.isAuthenticate ? (
            <div className="relative" ref={dropdownRef}>
              {/* Clickable avatar and name */}
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <img
                  src="https://fairdayjobs.com/src/assets/images/user1.png"
                  className="pl-5 pr-4 cursor-pointer"
                />
                <p className="text-white mb-0 px-1">{user?.name}</p>
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-white rounded-lg shadow-lg py-2 transition-all duration-300 animate-fade-in">
                  <a 
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer" 
                    onClick={() => navigate('/job-applicant-profile-registration')}
                  >
                    Profile
                  </a>
                  <a 
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => navigate('/jobs')}
                  >
                    Jobs
                  </a>
                  <a 
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => navigate('/alerts')}
                  >
                    Alerts
                  </a>
                  <a 
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => navigate('/settings')}
                  >
                    Settings
                  </a>
                  <a 
                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => navigate('/signout')}
                  >
                    Sign Out
                  </a>
                </div>
              )}
            </div>
          ) : (
            <>
              <p
                onClick={() => handleOpenModal('login')}
                className="text-[15px] px-5 mb-0 text-white font-bold hover:text-blue-300 border-r-[1px] border-primaryGray cursor-pointer transition-all"
              >
                Login
              </p>
              <p
                onClick={() => handleOpenModal('register')}
                className="text-[15px] px-5 mb-0 text-white font-bold hover:text-blue-300 border-r-[1px] border-primaryGray cursor-pointer transition-all"
              >
                Register
              </p>
            </>
          )}

          <img
            src="https://fairdayjobs.com/src/assets/images/fb_header.png"
            className="ml-10 opacity-50 hover:opacity-100 cursor-pointer transition-all"
          />
          <img
            src="https://fairdayjobs.com/src/assets/images/ig_header.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"
          />
          <img
            src="https://fairdayjobs.com/src/assets/images/x_header.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"
          />
          <img
            src="https://fairdayjobs.com/src/assets/images/linkedin.png"
            className="ml-5 opacity-50 hover:opacity-100 cursor-pointer transition-all"
          />
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          onClick={handleBackgroundClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-[20px] shadow-md w-[600px]">
            {activeModal === 'login' && <Login switchToRegister={switchToRegister} closeModal={closeModal} />}
            {activeModal === 'register' && <SignUp switchToLogin={switchToLogin} closeModal={closeModal} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopHeader;
