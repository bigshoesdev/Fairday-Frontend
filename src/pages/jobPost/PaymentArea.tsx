import Panel from 'src/components/common/Panel';

const PaymentArea = ({ jobValue, bufferSetJobValue }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold text-[26px]'>Payment Area</span>
          <span>Select Your Payment Method</span>
        </div>
        <div className='flex flex-row gap-20'>
          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              type="radio"
              name="selectedPaymentMethod"
              value="mastercard"
              checked={jobValue.selectedPaymentMethod === 'mastercard'}
              onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
              className="w-[15px] h-[15px] form-checkbox text-blue-600"
            />
            <img className='w-[80px]' src="src/assets/images/master-card.png" alt="MasterCard" />
          </label>

          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              type="radio"
              name="selectedPaymentMethod"
              value="visa"
              checked={jobValue.selectedPaymentMethod === 'visa'}
              onChange={(e) => bufferSetJobValue({ ...jobValue, [e.target.name]: e.target.value })}
              className="w-[15px] h-[15px] form-checkbox text-blue-600"
            />
            <img className='w-[80px]' src="src/assets/images/visa.png" alt="Visa" />
          </label>
        </div>
      </Panel>
    </div>
  );
};

export default PaymentArea;
