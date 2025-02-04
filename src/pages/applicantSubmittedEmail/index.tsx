import EmailContent from "src/pages/applicantSubmittedEmail/EmailContent";
import AdvertiseContent from "src/pages/applicantSubmittedEmail/AdvertiseContent";

const ApplicantSubmittedEmail = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <EmailContent />
      <AdvertiseContent />
    </div>
  );
};

export default ApplicantSubmittedEmail;
