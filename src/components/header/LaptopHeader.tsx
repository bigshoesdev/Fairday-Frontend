import React, { useState, useEffect, useRef } from 'react';
import Button from 'src/components/common/Button';
import layoutMenuList from 'src/mock/layoutMenuList.json'


const DesktopHeader = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerRef = useRef(null);

    const buttonClick = () => {
        console.log('buttonClick');
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setIsDrawerOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="block header_change:hidden">
            <div className="flex justify-between items-center">
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
                            {/* <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <span className="ms-3">Dashboard</span>
                                </a>
                            </li> */}
                            {layoutMenuList.header.map((item, index) =>
                                <p
                                    key={index}
                                    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer'
                                >
                                    <span className='ms-3'>
                                    {item.menu}
                                    </span>
                                </p>
                            )}
                        </ul>
                    </div>
                </div>

                <img src="src/assets/images/logo.png" alt="Logo" className="w-[210px] h-[36px] border border-red-500 cursor-pointer" />

                <Button
                    text="LOGIN"
                    onClick={buttonClick}
                    className="bg-primaryBlue text-white px-6 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                />
            </div>
        </div>
    );
};

export default DesktopHeader;



