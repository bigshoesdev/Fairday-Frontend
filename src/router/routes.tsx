import { lazy } from "react";
const Error = lazy(() => import("src/components/Error"));
const ConstManager = lazy(() => import("src/admin/ConstManager"));
const Home = lazy(() => import("src/pages/home"));
const JobSearch = lazy(() => import("src/pages/jobSearch"));
const PostJob = lazy(() => import("src/pages/job_post/Index"));
const VerifyEmail = lazy(() => import("src/pages/verifyEmail"));

const routes = [
  {
    path: "/admin/constmanager",
    element: <ConstManager />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/job_search",
    element: <JobSearch />,
  },
  {
    path: "/verify_email_address",
    element: <VerifyEmail />,
  },
  {
    path: "/post_job",
    element: <PostJob />,
  },
  {
    path: "*",
    element: <Error />,
    layout: "blank",
  },
];

export { routes };
