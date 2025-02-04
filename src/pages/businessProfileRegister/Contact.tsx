import SmallTextInput from 'src/components/common/smallTextInput';
import RadioLabel from 'src/components/common/RadioLabel';
import Panel from 'src/components/common/Panel';


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
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
    <span className='font-bold text-[18px]'>Method of Contact</span>

        <div className="flex flex-col gap-4 pl-10">
          <div className="flex flex-row gap-4">
            <RadioLabel
              label="Telephone"
              checked={selectedOption === 'telephone'}
              onChange={() => handleOptionChange('telephone')}
              spanClass="min-w-[120px]"
            />
            <SmallTextInput
              type="text"
              label="Enter Your Telephone Number"
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
              label="Enter Your Email"
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
              label="Enter Your Facebook"
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
              label="Enter Your Instagram"
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
              label="Enter Your LinkedIn"
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
              label="Enter Your Skype"
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
              label="Enter Your WhatsApp"
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
              label="Text"
              value={contactOther}
              onChange={(e) => setContactOther(e.target.value)}
              style="left-7 w-1/2"
            />
          </div>
        </div>
      </Panel>
    </div>
  );
};

export default Contact;
