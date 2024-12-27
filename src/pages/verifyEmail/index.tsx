import JobPreviews from "./jobPreview";
import VerifySpace from "./verifySpace";

const VerifyEmail = () => {
  return (
    <div className="w-full items-center flex-col bg-[#f7fbff]">
      <VerifySpace />
      <hr/>
      <JobPreviews />
    </div>
  );
};

export default VerifyEmail;
