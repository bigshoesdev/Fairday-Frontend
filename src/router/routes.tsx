import { lazy } from "react";

const Error = lazy(() => import("src/components/Error"));

const Admin = lazy(() => import("src/admin"));

const Home = lazy(() => import("src/pages/home"));
const JobSearch = lazy(() => import("src/pages/jobSearch"));
const PostJob = lazy(() => import("src/pages/jobPost/Index"));
const VerifyEmail = lazy(() => import("src/pages/verifyEmail"));
const EmployerDetail = lazy(() => import("src/pages//employerDetail"));
const ContactUs = lazy(() => import("src/pages/contactUs"));
const UserProfile = lazy(() => import("src/pages/userProfile"));
const Terms = lazy(() => import("src/pages/Terms"));
const Policy = lazy(() => import("src/pages/Policy"));
const PublishAd = lazy(() => import("src/pages/publishAd"));
const JobDetail = lazy(() => import("src/pages/job-detail"));
const AdverBusiness = lazy(() => import("src/pages/advertiseBusiness/Index"));
const AdvertiseCheckout = lazy(() => import("src/pages/advertiseCheckout/Index"));
const AdverConfirmation = lazy(() => import("src/pages/advertiseConfirmation/Index"));
const SearchLocal = lazy(() => import("src/pages/searchLocal/index"));
const BusinessToolBox = lazy(() => import("src/pages/businessToolbox/index"));
const ProfileRegister = lazy(() => import("src/pages/profileRegister/Index"));
const Register = lazy(() => import("src/pages/Register"));
const Staff = lazy(() => import("src/pages/staff/index"));
const BusinessRegisterEmail = lazy(() => import("src/pages/businessRegisterEmail"));
const JobRegisterEmail = lazy(() => import("src/pages/jobRegisterEmail"));
const JobPerformance = lazy(() => import("src/pages/jobPerformance/index"));
const PostResume = lazy(() => import("src/pages/postResume/index"));
const ApplicantToolBox = lazy(() => import("src/pages/applicantToolBox/index"));
const HiredEmail = lazy(() => import("src/pages/applicantHiredEmail/index"));
const EmployerHiredEmail = lazy(() => import("src/pages/employerHiredEmail/index"));
const ApplicantSubmittedEmail = lazy(() => import("src/pages/applicantSubmittedEmail/index"));
const EmployerSubmittedEmail = lazy(() => import("src/pages/employerSubmittedEmail/index"));
const PublishJobEmail = lazy(() => import("src/pages/publishJobEmail/index"));
const PublishAdEmail = lazy(() => import("src/pages/publishAdEmail/index"));
const JobManagement = lazy(() => import("src/pages/jobManagement/Index"));
const JobProposal = lazy(() => import("src/pages/jobProposal/Index"));
const JobProfileRegister = lazy(() => import("src/pages/jobProfileRegister/Index"));
const BusinessProfileRegister = lazy(() => import("src/pages/businessProfileRegister/Index"));
const BusinessProfile = lazy(() => import("src/pages/businessProfile/index"));
const JobCategoryPage = lazy(() => import("src/pages/JobCategoryPage"));
const About = lazy(() => import("src/pages/About"));
const Login = lazy(() => import("src/pages/Login"));
const SignUp = lazy(() => import("src/pages/SignUp"));


const routes = [

  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login switchToRegister={undefined} closeModal={undefined}/>,
  },
  {
    path: "/register",
    element: <SignUp switchToLogin={undefined} closeModal={undefined}/>,
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
    element: <Terms />,
  },
  {
    path: "/policy",
    element: <Policy />,
  },
  {
    path: "/user/userprofile",
    element: <UserProfile />,
  },
  {
    path: "/publish_Ad",
    element: <PublishAd />
  },
  {
    path: "/job-detail",
    element: <JobDetail />
  },
  {
    path: "/employer-detail/:id",
    element: <EmployerDetail />,
  },
  {
    path: "/post-job",
    element: <PostJob />,
  },
  {
    path: "/advertise-business",
    element: <AdverBusiness />,
  },
  {
    path: "/advertise-checkout/:token",
    element: <AdvertiseCheckout />,
  },
  {
    path: "/advertise-confirmation",
    element: <AdverConfirmation />,
  },
  {
    path: "/search-local",
    element: <SearchLocal />,
  },
  {
    path: "/business-toolbox",
    element: <BusinessToolBox />,
  },
  {
    path: "/profile-register",
    element: <ProfileRegister />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/job-performance",
    element: <JobPerformance />,
  },
  {
    path: "/post-resume",
    element: <PostResume />,
  },
  {
    path: "/job-management",
    element: <JobManagement />,
  },
  {
    path: "/job-proposal",
    element: <JobProposal />,
  },
  {
    path: "/job-applicant-profile-registration",
    element: <JobProfileRegister />,
  },
  {
    path: "/business-applicant-profile-registration",
    element: <BusinessProfileRegister />,
  },
  {
    path: "/verify-email-address/:token",
    element: <VerifyEmail />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/applicant-toolbox",
    element: <ApplicantToolBox />,
  },
  {
    path: "/publish-job-email/:token",
    element: <PublishJobEmail />,
  },
  {
    path: "/publish-ad-email/:token",
    element: <PublishAdEmail />,
  },
  {
    path: "/business-register-email/:token",
    element: <BusinessRegisterEmail />,
  },
  {
    path: "/profile-register-email/:token",
    element: <JobRegisterEmail />,
  },
  {
    path: "/applicant-hired-email",
    element: <HiredEmail />,
  },
  {
    path: "/employer-hired-email",
    element: <EmployerHiredEmail />,
  },
  {
    path: "/applicant-submitted-email",
    element: <ApplicantSubmittedEmail />,
  },
  {
    path: "/employer-submitted-email",
    element: <EmployerSubmittedEmail />,
  },
  {
    path: "/business-profile",
    element: <BusinessProfile businessProfileData={undefined} />,
  },
  {
    path: "/job-category",
    element: <JobCategoryPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/staff",
    element: <Staff />,
  },
  {
    path: "*",
    element: <Error />,
    layout: "blank",
  },
];

export { routes };