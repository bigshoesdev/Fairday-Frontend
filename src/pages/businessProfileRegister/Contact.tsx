import SmallTextInput from 'src/components/common/smallTextInput';
import Panel from 'src/components/common/Panel';
import CheckboxLable from 'src/components/common/CheckboxLable';

const Contact = ({
  businessProfileValue, bufferSetBusinessProfileValue
}) => {

  const handleCheckboxChange = (option: string) => {
    bufferSetBusinessProfileValue({
      ...businessProfileValue,
      contactPreferences: {
        ...businessProfileValue.contactPreferences,
        [option]: !businessProfileValue.contactPreferences[option],
      },
    });
  };

  const handleTextInputChange = (option: string, value: string) => {
    bufferSetBusinessProfileValue({
      ...businessProfileValue,
      contactPreferences: {
        ...businessProfileValue.contactPreferences,
        [option]: value,
      },
    });
  };


  return (
    <div className="w-full">
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <span className='font-bold text-[18px]'>Method of Contact</span>

        <div className="flex flex-col gap-4 pl-2 sm:pl-10">
          {[
            { label: 'Telephone', key: 'telephone', valueKey: 'telephoneValue' },
            { label: 'Email', key: 'contactEmail', valueKey: 'emailValue' },
            { label: 'Facebook', key: 'facebook', valueKey: 'facebookValue' },
            { label: 'Instagram', key: 'instagram', valueKey: 'instagramValue' },
            { label: 'LinkedIn', key: 'linkedin', valueKey: 'linkedinValue' },
            { label: 'Skype', key: 'skype', valueKey: 'skypeValue' },
            { label: 'WhatsApp', key: 'whatsapp', valueKey: 'whatsappValue' },
            { label: 'Other', key: 'other', valueKey: 'otherValue' },
          ].map(({ label, key, valueKey }) => (
            <div className="flex flex-row gap-2 sm:gap-4" key={key}>
              <CheckboxLable
                label={label}
                checked={businessProfileValue.contactPreferences[key]}
                onChange={() => handleCheckboxChange(key)}
                spanClass="min-w-[120px]"
              />
              <SmallTextInput
                type="text"
                label="Description text"
                value={businessProfileValue.contactPreferences[valueKey] || ''}
                onChange={(e) => handleTextInputChange(valueKey, e.target.value)}
                style="left-7 w-1/2"
              />
            </div>
          ))}

        </div>
      </Panel>
    </div>
  );
};

export default Contact;
