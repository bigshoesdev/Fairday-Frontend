import JobPreviews from "./jobPreview";
import EmailContent from "src/pages/jobRegisterEmail/emailContent";

const JobRegisterEmail = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <EmailContent />
      <JobPreviews />
    </div>
  );
};

export default JobRegisterEmail;
