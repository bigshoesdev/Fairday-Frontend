import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PropsWithChildren, Suspense } from 'react';
import Notification from "src/components/common/Notification"
import Header from 'src/layouts/Header';
import Foother from 'src/layouts/Footer';
import { initializeAuth } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(initializeAuth()); 
      }, [dispatch]);

    return (
        <div>
            <Header />
            <div className='w-full flex justify-center'>
                <Suspense>
                    {children}
                </Suspense>
            </div>
            <Foother />
            <Notification />
        </div>
    )
}

export default DefaultLayout;
