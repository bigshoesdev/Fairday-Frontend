import { lazy } from "react";
const Error = lazy(() => import("src/components/Error"));
const ConstManager = lazy(() => import("src/admin/ConstManager"));
const Home = lazy(() => import("src/pages/home"));
const JobSearch = lazy(() => import("src/pages/jobSearch"));
const PostJob = lazy(() => import("src/pages/job_post/Index"));
const VerifyEmail = lazy(() => import("src/pages/verifyEmail"));
const EmployerDetail = lazy(() => import("src/pages//employerDetail"));
const ContactUs = lazy(() => import("src/pages/contactUs"));
const UserProfile = lazy(() => import("src/pages/userProfile"));
const Terms = lazy(() => import("src/pages/Terms"));
const Policy =lazy(() => import("src/pages/Policy"));
const PublishAd =lazy(() => import("src/pages/publishAd"));

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
    path: "/job-search",
    element: <JobSearch />,
  },
  {
    path: "/terms",
    element: <Terms/>, 
  },
  {
    path: "/policy",
    element: <Policy/>,
  },
  {
    path: "/user/userprofile",
    element: <UserProfile />,
  },
  {
    path: "/publish_Ad",
    element: <PublishAd/>
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/verify-email-address",
    element: <VerifyEmail />,
  },
  {
    path: "/employer-detail",
    element: <EmployerDetail />,
  },
  {
    path: "/post-job",
    element: <PostJob />,
  },
  {
    path: "*",
    element: <Error />,
    layout: "blank",
  },
];

export { routes };
