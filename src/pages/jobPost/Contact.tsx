// import DropPanel from 'src/components/common/DropPanel';
// import SmallTextInput from 'src/components/common/smallTextInput';
// import RadioLabel from 'src/components/common/RadioLabel';
// import CheckboxLable from 'src/components/common/CheckboxLable';

// const Contact = ({
//   selectedOption,
//   telephone,
//   facebook,
//   instagram,
//   linkedin,
//   skype,
//   whatsApp,
//   contactOther,
//   contactEmail,
//   setSelectedOption,
//   setTelephone,
//   setFacebook,
//   setInstagram,
//   setLinkedIn,
//   setSkype,
//   setWhatsApp,
//   setContactOther,
//   setContactEmail

// }) => {

//   const handleOptionChange = (option: string) => {
//     setSelectedOption(option);
//   };


//   return (
//     <div className="w-full">
//       <DropPanel
//         header={
//           <div className="flex flex-col gap-2">
//             <span className="text-[#1880F1] text-[22px] font-bold">
//               Employer Preferred Method of Contact
//             </span>
//             <span className="text-black text-[22px]">
//               Keep Contact info Private (Verified and Rated Applicants only)
//             </span>
//           </div>
//         }
//       >
//         <div className="flex flex-col gap-4">
//           <RadioLabel
//             label="Keep Contact info Private (Verified & Rated Applicants Only via masked email by FAIRDAY JOBS)"
//             checked={selectedOption === 'private'}
//             onChange={() => handleOptionChange('private')}
//             labelClass="pr-[150px]"
//           />
//           <RadioLabel
//             label="Publish the following Contact preferences with Job Post (Make Public for a broader range of applicant responses)"
//             checked={selectedOption === 'public'}
//             onChange={() => handleOptionChange('public')}
//             labelClass="pr-[150px]"
//           />

//           <div className="flex flex-row gap-4">
//             <RadioLabel
//               label="Telephone"
//               checked={selectedOption === 'telephone'}
//               onChange={() => handleOptionChange('telephone')}
//               spanClass="min-w-[120px]"
//             />
//             <SmallTextInput
//               type="text"
//               label="Description text"
//               value={telephone}
//               onChange={(e) => setTelephone(e.target.value)}
//               style="left-7 w-1/2"
//             />
//           </div>

//           <div className="flex flex-row gap-4">
//             <RadioLabel
//               label="Email"
//               checked={selectedOption === 'email'}
//               onChange={() => handleOptionChange('email')}
//               spanClass="min-w-[120px]"
//             />
//             <SmallTextInput
//               type="email"
//               label="Description text"
//               value={contactEmail}
//               onChange={(e) => setContactEmail(e.target.value)}
//               style="left-7 w-1/2"
//             />
//           </div>

//           <div className="flex flex-row gap-4">
//             <RadioLabel
//               label="Facebook"
//               checked={selectedOption === 'facebook'}
//               onChange={() => handleOptionChange('facebook')}
//               spanClass="min-w-[120px]"
//             />
//             <SmallTextInput
//               type="text"
//               label="Description text"
//               value={facebook}
//               onChange={(e) => setFacebook(e.target.value)}
//               style="left-7 w-1/2"
//             />
//           </div>

//           <div className="flex flex-row gap-4">
//             <RadioLabel
//               label="Instagram"
//               checked={selectedOption === 'instagram'}
//               onChange={() => handleOptionChange('instagram')}
//               spanClass="min-w-[120px]"
//             />
//             <SmallTextInput
//               type="text"
//               label="Description text"
//               value={instagram}
//               onChange={(e) => setInstagram(e.target.value)}
//               style="left-7 w-1/2"
//             />
//           </div>

//           <div className="flex flex-row gap-4">
//             <RadioLabel
//               label="LinkedIn"
//               checked={selectedOption === 'linkedin'}
//               onChange={() => handleOptionChange('linkedin')}
//               spanClass="min-w-[120px]"
//             />
//             <SmallTextInput
//               type="text"
//               label="Description text"
//               value={linkedin}
//               onChange={(e) => setLinkedIn(e.target.value)}
//               style="left-7 w-1/2"
//             />
//           </div>

//           <div className="flex flex-row gap-4">
//             <RadioLabel
//               label="Skype"
//               checked={selectedOption === 'skype'}
//               onChange={() => handleOptionChange('skype')}
//               spanClass="min-w-[120px]"
//             />
//             <SmallTextInput
//               type="text"
//               label="Description text"
//               value={skype}
//               onChange={(e) => setSkype(e.target.value)}
//               style="left-7 w-1/2"
//             />
//           </div>

//           <div className="flex flex-row gap-4">
//             <RadioLabel
//               label="WhatsApp"
//               checked={selectedOption === 'whatsapp'}
//               onChange={() => handleOptionChange('whatsapp')}
//               spanClass="min-w-[120px]"
//             />
//             <SmallTextInput
//               type="text"
//               label="Description text"
//               value={whatsApp}
//               onChange={(e) => setWhatsApp(e.target.value)}
//               style="left-7 w-1/2"
//             />
//           </div>

//           <div className="flex flex-row gap-4">
//             <RadioLabel
//               label="Other"
//               checked={selectedOption === 'other'}
//               onChange={() => handleOptionChange('other')}
//               spanClass="min-w-[120px]"
//             />
//             <SmallTextInput
//               type="text"
//               label="Description text"
//               value={contactOther}
//               onChange={(e) => setContactOther(e.target.value)}
//               style="left-7 w-1/2"
//             />
//           </div>
//         </div>
//       </DropPanel>
//     </div>
//   );
// };

// export default Contact;
import DropPanel from 'src/components/common/DropPanel';
import SmallTextInput from 'src/components/common/smallTextInput';
import CheckboxLable from 'src/components/common/CheckboxLable';

const Contact = ({
  contactPreferences,
  setContactPreferences
}) => {

  const handleCheckboxChange = (option: string) => {
    setContactPreferences((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <div className="w-full">
      <DropPanel
        header={
          <div className="flex flex-col gap-2">
            <span className="text-[#1880F1] text-[22px] font-bold">
              Employer Preferred Method of Contact
            </span>
            <span className="text-black text-[22px]">
              Keep Contact info Private (Verified and Rated Applicants only)
            </span>
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          <CheckboxLable
            label="Keep Contact info Private (Verified & Rated Applicants Only via masked email by FAIRDAY JOBS)"
            checked={contactPreferences.private}
            onChange={() => handleCheckboxChange('private')}
            inputClass='!w-[20px] !h-[20px]'
          />
          <CheckboxLable
            label="Publish the following Contact preferences with Job Post (Make Public for a broader range of applicant responses)"
            checked={contactPreferences.public}
            onChange={() => handleCheckboxChange('public')}
            inputClass='!w-[26px] !h-[26px]'
          />

          <div className="flex flex-row gap-4">
            <CheckboxLable
              label="Telephone"
              checked={contactPreferences.telephone}
              onChange={() => handleCheckboxChange('telephone')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={contactPreferences.telephoneValue || ''}
              onChange={(e) => setContactPreferences((prev) => ({ ...prev, telephoneValue: e.target.value }))}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <CheckboxLable
              label="Email"
              checked={contactPreferences.email}
              onChange={() => handleCheckboxChange('email')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={contactPreferences.emailValue || ''}
              onChange={(e) => setContactPreferences((prev) => ({ ...prev, emailValue: e.target.value }))}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <CheckboxLable
              label="Facebook"
              checked={contactPreferences.facebook}
              onChange={() => handleCheckboxChange('facebook')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={contactPreferences.facebookValue || ''}
              onChange={(e) => setContactPreferences((prev) => ({ ...prev, facebookValue: e.target.value }))}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <CheckboxLable
              label="Instagram"
              checked={contactPreferences.instagram}
              onChange={() => handleCheckboxChange('instagram')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={contactPreferences.instagramValue || ''}
              onChange={(e) => setContactPreferences((prev) => ({ ...prev, instagramValue: e.target.value }))}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <CheckboxLable
              label="LinkedIn"
              checked={contactPreferences.linkedin}
              onChange={() => handleCheckboxChange('linkedin')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={contactPreferences.linkedinValue || ''}
              onChange={(e) => setContactPreferences((prev) => ({ ...prev, linkedinValue: e.target.value }))}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <CheckboxLable
              label="Skype"
              checked={contactPreferences.skype}
              onChange={() => handleCheckboxChange('skype')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={contactPreferences.skypeValue || ''}
              onChange={(e) => setContactPreferences((prev) => ({ ...prev, skypeValue: e.target.value }))}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <CheckboxLable
              label="WhatsApp"
              checked={contactPreferences.whatsapp}
              onChange={() => handleCheckboxChange('whatsapp')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={contactPreferences.whatsappValue || ''}
              onChange={(e) => setContactPreferences((prev) => ({ ...prev, whatsappValue: e.target.value }))}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <CheckboxLable
              label="Other"
              checked={contactPreferences.other}
              onChange={() => handleCheckboxChange('other')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={contactPreferences.otherValue || ''}
              onChange={(e) => setContactPreferences((prev) => ({ ...prev, otherValue: e.target.value }))}
              style="left-7 w-1/2"
            />
          </div>
        </div>
      </DropPanel>
    </div>
  );
};

export default Contact;
