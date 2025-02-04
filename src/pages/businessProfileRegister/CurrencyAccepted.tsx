import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const CurrencyAccepted = ({ currencyAccepted, setCurrencyAccepted }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Currency accepted  </span>
          <TextInput
            type="email"
            name="currencyAccepted"
            label="Currency"
            value={currencyAccepted}
            onChange={(e) => setCurrencyAccepted(e.target.value)}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default CurrencyAccepted;
