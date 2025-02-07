import { lazy } from "react";

const Error = lazy(() => import("src/components/Error"));
const ConstManager = lazy(() => import("src/admin/ConstManager"));
const Home = lazy(() => import("src/pages/home"));
const JobSearch = lazy(() => import("src/pages/jobSearch"));
const PostJob = lazy(() => import("src/pages/jobPost/Index"));
const VerifyEmail = lazy(() => import("src/pages/verifyEmail"));
const EmployerDetail = lazy(() => import("src/pages//employerDetail"));
const ContactUs = lazy(() => import("src/pages/contactUs"));
const UserProfile = lazy(() => import("src/pages/userProfile"));
const Terms = lazy(() => import("src/pages/Terms"));
const Policy =lazy(() => import("src/pages/Policy"));
const PublishAd =lazy(() => import("src/pages/publishAd"));
const AdverBusiness =lazy(() => import("src/pages/advertiseBusiness/Index"));
const AdvertiseCheckout =lazy(() => import("src/pages/advertiseCheckout/Index"));
const AdverConfirmation =lazy(() => import("src/pages/advertiseConfirmation/Index"));
const SearchLocal =lazy(() => import("src/pages/searchLocal/index"));
const BusinessToolBox =lazy(() => import("src/pages/businessToolbox/index"));
const ProfileRegister =lazy(() => import("src/pages/profileRegister/Index"));
const Register =lazy(() => import("src/pages/Register"));
const Staff =lazy(() => import("src/pages/staff/index"));
const BusinessRegisterEmail = lazy(() => import("src/pages/businessRegisterEmail"));
const JobRegisterEmail = lazy(() => import("src/pages/jobRegisterEmail"));
const JobPerformance = lazy(() => import("src/pages/jobPerformance/index"));
const PostResume = lazy(() => import("src/pages/postResume/index"));
const ApplicantToolBox = lazy(() => import("src/pages/applicantToolBox/index"));
const HiredEmail = lazy(() => import("src/pages/applicantHiredEmail/index"));
const EmployerHiredEmail = lazy(() => import("src/pages/employerHiredEmail/index"));
const ApplicantSubmittedEmail = lazy(() => import("src/pages/applicantSubmittedEmail/index"));
const EmployerSubmittedEmail = lazy(() => import("src/pages/employerSubmittedEmail/index"));
const PublishAdEmail = lazy(() => import("src/pages/publishAdEmail/index"));
const JobManagement = lazy(() => import("src/pages/jobManagement/Index"));
const JobProfileRegister = lazy(() => import("src/pages/jobProfileRegister/Index"));
const BusinessProfileRegister = lazy(() => import("src/pages/businessProfileRegister/Index"));


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
    path: "/employer-detail",
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
    path: "/advertise-checkout",
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
    path: "/job-applicant-profile-registration",
    element: <JobProfileRegister />,
  },
  {
    path: "/business-applicant-profile-registration",
    element: <BusinessProfileRegister />,
  },

  

  {
    path: "/verify-email-address",
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
    path: "/publish-ad-email",
    element: <PublishAdEmail />,
  },
  {
    path: "/business-register-email",
    element: <BusinessRegisterEmail />,
  },
  {
    path: "/job-register-email",
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