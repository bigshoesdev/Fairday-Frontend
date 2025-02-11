import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { supportCreate, updateCurrentJobData } from "src/store/user/supportSlice";

import TextInput from "src/components/common/TextInput";
import Button from "src/components/common/Button";

const ContactUs = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { firstName, lastName, phoneNumber, email, message, loading } = useSelector((state: any) => state.supportConfig);

  const bufferChange = (key: string, value: string) => {
    const data = { key: key, value: value }
    dispatch(updateCurrentJobData(data))
  }
  const bufferSupportCreate = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      message: message,
      
    }
    dispatch(supportCreate(data))
  }

  return (
    <div className="w-full flex items-center flex-col bg-[#f7fbff]">
      <span className="mt-16 flex text-center title font-semibold mb-14">
        CONTACT US
      </span>
      <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 mb-5 w-full max-w-[1040px] px-5">
        <TextInput
          type="text"
          label="First Name*"
          value={firstName}
          onChange={(e) => bufferChange("firstName", e.target.value)}
          style="w-fullw-[400px]"
        />
        <TextInput
          type="text"
          label="Last Name"
          value={lastName}
          onChange={(e) => bufferChange("lastName", e.target.value)}
          style="w-full w-[400px]"
        />
        <TextInput
          type="text"
          label="Contact Phone Number"
          value={phoneNumber}
          onChange={(e) => bufferChange("phoneNumber", e.target.value)}
          style="w-full w-[400px]"
        />
        <TextInput
          type="email"
          label="Email Address*"
          value={email}
          onChange={(e) => bufferChange("email", e.target.value)}
          style="w-full w-[400px]"
        />
      </div>
      <div className="w-full max-w-[1040px] flex items-center justify-center px-5">
        <TextInput
          type="text"
          label="Message*"
          value={message}
          multiline={true}
          onChange={(e) => bufferChange("message", e.target.value)}
          style="w-full "
        />
      </div>

      <Button
        className="bg-primaryBlue text-white px-12 hover:bg-blue-400 transition-all cursor-pointer mb-8 hover:border-blue-400 mt-8 focus:outline-none"
        onClick={bufferSupportCreate}
        text="Send"
        disable={loading}
      />
     
    </div>
  );
};

export default ContactUs;
