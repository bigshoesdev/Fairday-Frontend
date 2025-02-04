import EmailContent from "src/pages/employerSubmittedEmail/EmailContent";
import AdvertiseContent from "src/pages/employerSubmittedEmail/AdvertiseContent";

const EmployerSubmittedEmail = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <EmailContent />
      <AdvertiseContent />
    </div>
  );
};

export default EmployerSubmittedEmail;
