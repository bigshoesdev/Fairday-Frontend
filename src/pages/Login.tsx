import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Panel from 'src/components/common/Panel';
import Button from 'src/components/common/Button';
import TextInput from 'src/components/common/TextInput';
import { loginAPI } from 'src/store/auth/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';

interface LoginProps {
  switchToRegister: () => void;
  closeModal: () => void;
}

const Login: React.FC<LoginProps> = ({ switchToRegister, closeModal }) => {

  const dispatch = useDispatch<AppDispatch>();

  const { authSliceConfig } = useSelector((state: any) => state);
  const user = authSliceConfig.user;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const buttonClick = () => {
    const data: any = {
      email: email,
      password: password,
      avaialble: ["email", "password"]
    }

    dispatch(loginAPI(data))
    if (authSliceConfig.isAuthenticate) {
      closeModal()
    }
  };

  return (
    <div>
      <Panel classStyle={'flex flex-col py-12 px-6 gap-y-7 z-[1000]'}>
        <div className="flex justify-center">
          <img src="src/assets/images/logo_symbol.png" className="w-12" />
          <span className="ml-4 text-black font-bold text-[22px]">
            Welcome to Fairday
          </span>
        </div>
        <hr className="border-gray-300" />
        <div>
          <p className="text-primaryBlue text-[22px] mb-0">
            Hire expert for any job, online
          </p>
          <p>
            Millions of small businesses use Man Power to turn their <br />
            ideas into reality.
          </p>
        </div>

        <TextInput
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style="w-full"
        />
        <TextInput
          type="password"
          label="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style="w-full"
        />

        <div className="flex justify-between items-center">
          <div className="font-semibold cursor-pointer">FORGOT PASSWORD?</div>
          <Button
            text="Next"
            onClick={buttonClick}
            className="bg-primaryBlue text-white px-8 hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none"
          />
        </div>

        <hr className="border-gray-300" />

        <div className="flex items-center justify-center">
          <p className="text-[18px]">You don't have an account? &nbsp;</p>
          <p
            className="text-[18px] text-primaryBlue cursor-pointer"
            onClick={switchToRegister}
          >
            Register
          </p>
        </div>
      </Panel>
    </div>
  );
};

export default Login;
