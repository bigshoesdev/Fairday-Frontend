import Panel from 'src/components/common/Panel';

const PaymentArea = ({selectedPaymentMethod, setSelectedPaymentMethod }) => {

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
              name="payment"
              value="mastercard"
              checked={selectedPaymentMethod === 'mastercard'}
              onChange={() => setSelectedPaymentMethod('mastercard')}
              className="w-[15px] h-[15px] form-checkbox text-blue-600"
            />
            <img className='w-[80px]' src="src/assets/images/master-card.png" alt="MasterCard" />
          </label>

          <label className='flex items-center gap-2 cursor-pointer'>
            <input
              type="radio"
              name="payment"
              value="visa"
              checked={selectedPaymentMethod === 'visa'}
              onChange={() => setSelectedPaymentMethod('visa')}
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
