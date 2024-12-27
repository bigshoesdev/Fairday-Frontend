// src/components/SignUp.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { signupAPI } from '../store/authSlice';

// const baseURL = "http://localhost:8000/api/v1"

const SignUp: React.FC = () => {

	const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const { authSliceConfig } = useSelector((state: any) => state);

    useEffect(() => {

        if (authSliceConfig.isAuthenticate) {
            navigate('/admin/constmanager');
        }

    }, [authSliceConfig])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const data: any = {
            email: email,
            password: password,
            name: "rrr"
        }
        dispatch(signupAPI(data));
    };

    return (
        <div className="w-screen flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

                {
                    error && <div className="text-red-500 text-sm mb-4">
                        {error}</div>
                }

                <form onSubmit={handleSubmit}
                    className="space-y-4">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email"
                            value={email}
                            onChange={
                                (e) => setEmail(e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password"
                            value={password}
                            onChange={
                                (e) => setPassword(e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password" />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" id="confirmPassword"
                            value={confirmPassword}
                            onChange={
                                (e) => setConfirmPassword(e.target.value)
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password" />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
