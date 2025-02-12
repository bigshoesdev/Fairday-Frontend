import DropPanel from 'src/components/common/DropPanel';
import SmallTextInput from 'src/components/common/smallTextInput';
import RadioLabel from 'src/components/common/RadioLabel';

const Contact = ({
  selectedOption,
  telephone,
  facebook,
  instagram,
  linkedin,
  skype,
  whatsApp,
  contactOther,
  contactEmail,
  setSelectedOption,
  setTelephone,
  setFacebook,
  setInstagram,
  setLinkedIn,
  setSkype,
  setWhatsApp,
  setContactOther,
  setContactEmail

}) => {

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
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
          <RadioLabel
            label="Keep Contact info Private (Verified & Rated Applicants Only via masked email by FAIRDAY JOBS)"
            checked={selectedOption === 'private'}
            onChange={() => handleOptionChange('private')}
            labelClass="pr-[150px]"
          />
          <RadioLabel
            label="Publish the following Contact preferences with Job Post (Make Public for a broader range of applicant responses)"
            checked={selectedOption === 'public'}
            onChange={() => handleOptionChange('public')}
            labelClass="pr-[150px]"
          />

          <div className="flex flex-row gap-4">
            <RadioLabel
              label="Telephone"
              checked={selectedOption === 'telephone'}
              onChange={() => handleOptionChange('telephone')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <RadioLabel
              label="Email"
              checked={selectedOption === 'email'}
              onChange={() => handleOptionChange('email')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="email"
              label="Description text"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <RadioLabel
              label="Facebook"
              checked={selectedOption === 'facebook'}
              onChange={() => handleOptionChange('facebook')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={facebook}
              onChange={(e) => setFacebook(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <RadioLabel
              label="Instagram"
              checked={selectedOption === 'instagram'}
              onChange={() => handleOptionChange('instagram')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <RadioLabel
              label="LinkedIn"
              checked={selectedOption === 'linkedin'}
              onChange={() => handleOptionChange('linkedin')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={linkedin}
              onChange={(e) => setLinkedIn(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <RadioLabel
              label="Skype"
              checked={selectedOption === 'skype'}
              onChange={() => handleOptionChange('skype')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={skype}
              onChange={(e) => setSkype(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <RadioLabel
              label="WhatsApp"
              checked={selectedOption === 'whatsapp'}
              onChange={() => handleOptionChange('whatsapp')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={whatsApp}
              onChange={(e) => setWhatsApp(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>

          <div className="flex flex-row gap-4">
            <RadioLabel
              label="Other"
              checked={selectedOption === 'other'}
              onChange={() => handleOptionChange('other')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Description text"
              value={contactOther}
              onChange={(e) => setContactOther(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>
        </div>
      </DropPanel>
    </div>
  );
};

export default Contact;
