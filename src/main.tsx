import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';

// i18n (needs to be bundled)
import './i18n';
import "antd/dist/reset.css";

// Router
import { RouterProvider } from 'react-router-dom';
import router from './router/index';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

// Middleware

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense>
        <div className=''>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    </Suspense>
);