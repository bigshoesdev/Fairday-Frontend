import { PropsWithChildren, Suspense } from 'react';

import Notification from "src/components/common/Notification"
import Header from 'src/layouts/Header';
import Foother from 'src/layouts/Footer';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    
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
