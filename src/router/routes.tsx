import { lazy } from 'react';

const Error = lazy(() => import('src/components/Error'))
const ConstManager = lazy(() => import('src/admin/ConstManager'))
const Home = lazy(() => import('src/pages/home'))
const PostJob = lazy(() => import('src/pages/job_post/Index'))

const routes = [
    {
        path: '/admin/constmanager',
        element: <ConstManager />
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/post-job",
        element: <PostJob />,
    },
    {
        path: "*",
        element: <Error />,
        layout: 'blank',
    },
];

export { routes };