import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropsWithChildren, Suspense } from 'react';
import Notification from "src/components/common/Notification"
import Header from 'src/layouts/Header';
import Foother from 'src/layouts/Footer';
import { initializeAuth } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';
import { getessageBox } from 'src/store/systemSetting/messageBoxSlice';
import CircularProgress from '@mui/material/CircularProgress';


const DefaultLayout = ({ children }: PropsWithChildren) => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(initializeAuth());
        dispatch(getessageBox("message"));
    }, [dispatch]);

    return (
        <div>
            <Header />
            <div
                className='w-full flex justify-center'
            >
                <Suspense
                    fallback={
                        <div
                            className='w-full flex justify-center items-center'
                            style={{
                                minHeight: "calc(100vh - 90px)"
                            }}
                        >
                            <CircularProgress size="10rem" />
                        </div>
                    }
                >
                    {children}
                </Suspense>
            </div>
            <Foother />
            <Notification />
        </div>
    )
}

export default DefaultLayout;
