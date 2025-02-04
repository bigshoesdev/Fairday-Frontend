import TextInput from "src/components/common/TextInput";
import { useState } from "react";
import Button from "src/components/common/Button";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full flex items-center flex-col bg-[#f7fbff]">
      <span className="mt-16 flex text-center title font-semibold mb-14">
        CONTACT US
      </span>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 mb-5 w-full max-w-[1040px] px-5">
        <TextInput
          type="text"
          label="First Name*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style="w-full w-[400px]"
        />
        <TextInput
          type="text"
          label="Last Name*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style="w-full  w-[400px]"
        />
        <TextInput
          type="text"
          label="Contact No*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style="w-full  w-[400px]"
        />
        <TextInput
          type="email"
          label="Email Address*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style="w-full  w-[400px]"
        />
      </div>
      <div className="w-full max-w-[1040px] flex items-center justify-center px-5">
        <TextInput
          type="text"
          label="Message*"
          value={email}
          multiline={true}
          onChange={(e) => setEmail(e.target.value)}
          style="w-full "
        />
      </div>

      <Button
        className="bg-primaryBlue text-white px-12 hover:bg-blue-400 transition-all cursor-pointer mb-8 hover:border-blue-400 mt-8 focus:outline-none"
        onClick={() => console.log()}
        text="Send"
      />
     
    </div>
  );
};

export default ContactUs;
