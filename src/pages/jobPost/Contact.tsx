import DropPanel from 'src/components/common/DropPanel';
import SmallTextInput from 'src/components/common/smallTextInput';
import CheckboxLable from 'src/components/common/CheckboxLable';

const Contact = ({ jobValue, bufferSetJobValue }) => {
  const handleCheckboxChange = (option: string) => {
    bufferSetJobValue({
      ...jobValue,
      contactPreferences: {
        ...jobValue.contactPreferences,
        [option]: !jobValue.contactPreferences[option],
      },
    });
  };

  const handleTextInputChange = (option: string, value: string) => {
    bufferSetJobValue({
      ...jobValue,
      contactPreferences: {
        ...jobValue.contactPreferences,
        [option]: value,
      },
    });
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
            checked={jobValue.contactPreferences.private}
            onChange={() => handleCheckboxChange('private')}
            inputClass="!w-[20px] !h-[20px]"
          />
          <CheckboxLable
            label="Publish the following Contact preferences with Job Post (Make Public for a broader range of applicant responses)"
            checked={jobValue.contactPreferences.public}
            onChange={() => handleCheckboxChange('public')}
            inputClass="!w-[26px] !h-[26px]"
          />

          {[
            { label: 'Telephone', key: 'telephone', valueKey: 'telephoneValue' },
            { label: 'Email', key: 'email', valueKey: 'emailValue' },
            { label: 'Facebook', key: 'facebook', valueKey: 'facebookValue' },
            { label: 'Instagram', key: 'instagram', valueKey: 'instagramValue' },
            { label: 'LinkedIn', key: 'linkedin', valueKey: 'linkedinValue' },
            { label: 'Skype', key: 'skype', valueKey: 'skypeValue' },
            { label: 'WhatsApp', key: 'whatsapp', valueKey: 'whatsappValue' },
            { label: 'Other', key: 'other', valueKey: 'otherValue' },
          ].map(({ label, key, valueKey }) => (
            <div className="flex flex-row gap-4" key={key}>
              <CheckboxLable
                label={label}
                checked={jobValue.contactPreferences[key]}
                onChange={() => handleCheckboxChange(key)}
                spanClass="min-w-[120px]"
              />
              <SmallTextInput
                type="text"
                label="Description text"
                value={jobValue.contactPreferences[valueKey] || ''}
                onChange={(e) => handleTextInputChange(valueKey, e.target.value)}
                style="left-7 w-1/2"
              />
            </div>
          ))}
        </div>
      </DropPanel>
    </div>
  );
};

export default Contact;
