import JobPreviews from "./jobPreview";
import EmailContent from "src/pages/businessRegisterEmail/emailContent";

const BusinessRegisterEmail = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <EmailContent />
      <JobPreviews />
    </div>
  );
};

export default BusinessRegisterEmail;
