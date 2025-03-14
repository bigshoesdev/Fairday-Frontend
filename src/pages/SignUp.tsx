import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Panel from 'src/components/common/Panel';
import Button from 'src/components/common/Button';
import TextInput from 'src/components/common/TextInput';
import { signupAPI } from 'src/store/auth/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { useNavigate } from "react-router-dom";

interface SignUpProps {
    switchToLogin: () => void;
    closeModal: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ switchToLogin, closeModal }) => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { authSliceConfig } = useSelector((state: any) => state);
    const user = authSliceConfig.user;
    const loading = authSliceConfig.loading;

    const bufferLink = authSliceConfig?.bufferLink;

    useEffect(() => {

        if (bufferLink) {
            navigate(bufferLink)
        }
    }, [bufferLink])

    const [email, setEmail] = useState('');
    const [name, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setConfirmPassword] = useState('');
    const [jobSeeker, setJobSeeker] = useState(false);
    const [business, setBusiness] = useState(false);
    const [discountShopper, setDiscountShopper] = useState(false);

    const handleJobSeekerChange = () => {
        setJobSeeker((prev) => {
            const newState = !prev;
            return newState;
        });
    };


    const handleBusinessChange = () => {
        setBusiness((prev) => {
            const newState = !prev;
            return newState;
        });
    };

    const handleDiscountShopperChange = () => {
        setDiscountShopper((prev) => {
            const newState = !prev;
            return newState;
        });
    };

    const buttonClick = async () => {
        const data: any = {
            name: name,
            email: email,
            password: password,
            password1: password1,
            jobSeeker: jobSeeker,
            business: business,
            localDiscount: discountShopper,
            avaialble: ["name", "email", "password", "password1"]
        }

        let result = await dispatch(signupAPI(data))
        if (result) {
            closeModal();
        }
    };

    return (
        <div>
            <Panel classStyle={'flex flex-col py-4 sm:py-12 px-1 sm:px-6'}>

                <div className='flex flex-col gap-3'>
                    <div className="flex justify-center items-center">
                        <img src="src/assets/images/logo_symbol.png" className="w-10 h-10 sm:w-12" />
                        <span className="ml-4 text-black font-bold text-[16px] sm:text-[22px]">
                            Welcome to Fairday
                        </span>
                    </div>
                    <span className="text-center text-black font-bold text-[15px] sm:text-[20px]">
                        Local Business Marketplace
                    </span>
                    <hr className="border-gray-300" />
                </div>

                <div className='flex flex-col gap-3 mt-3'>
                    <div className="flex flex-col items-center">
                        <span className="text-red-500 font-bold text-[15px] sm:text-[20px]">
                            Get Updates!
                        </span>
                        <div className="w-full mt-3 text-[12px] sm:text-[16px] text-black flex justify-start items-center space-x-0 md:space-x-4 flex-wrap md:flex-nowrap">
                            <label className="w-full sm:inline space-x-1">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-600"
                                    checked={jobSeeker}
                                    onChange={handleJobSeekerChange}
                                />
                                <span className="font-bold text-center">Job Seeker</span>
                            </label>
                            <label className="w-full sm:inline space-x-1">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-600"
                                    checked={business}
                                    onChange={handleBusinessChange}
                                />
                                <span className="font-bold text-center">Business</span>
                            </label>
                            <label className="w-full sm:inline space-x-1">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-600"
                                    checked={discountShopper}
                                    onChange={handleDiscountShopperChange}
                                />
                                <span className="font-bold text-center">Local Discount Shopper</span>
                            </label>
                        </div>
                    </div>
                    <hr className="border-gray-300" />
                </div>

                <div className='mt-3 gap-2 sm:gap-6 flex flex-col'>
                    <TextInput
                        type="email"
                        label="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style="w-full"
                    />
                    <TextInput
                        type="text"
                        label="User Name"
                        value={name}
                        onChange={(e) => setUserName(e.target.value)}
                        style="w-full"
                    />
                    <TextInput
                        type="password"
                        label="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style="w-full"
                    />
                    <TextInput
                        type="password"
                        label="Confirm your password"
                        value={password1}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style="w-full"
                    />

                    <div className="flex justify-between items-center text-[12px] sm:text-[18px]">
                        <div className="font-semibold cursor-pointer">FORGOT PASSWORD?</div>
                        <Button
                            loading={loading}
                            text="Next"
                            onClick={buttonClick}
                            className="bg-primaryBlue text-white px-8 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
                        />
                    </div>
                </div>

                <hr className="mt-3 border-gray-300" />

                <div className="mt-3 flex items-center justify-center text-[12px] sm:text-[18px]">
                    <p className="">You already have an account? &nbsp;</p>
                    <p
                        className="text-primaryBlue cursor-pointer"
                        onClick={switchToLogin}
                    >
                        Login
                    </p>
                </div>
            </Panel>
        </div>
    );
};

export default SignUp;
