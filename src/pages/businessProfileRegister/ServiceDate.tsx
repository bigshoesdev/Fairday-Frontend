import Panel from 'src/components/common/Panel';
import TextInput from 'src/components/common/TextInput';

const ServiceDate = ({ coupon, setCoupon, expirationDate, setExpirationDate }) => {

  return (
    <div className='w-full'>
      <Panel classStyle={'flex flex-col p-7 bg-white rounded-2xl gap-5 shadow'}>
        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Current Service Promotion (Discount Coupon) </span>
          <TextInput
            type="email"
            name="coupon"
            label="Coupon"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            style="w-full"
          />
        </div>

        <div className='flex flex-col'>
          <span className='font-bold mb-3'>Expiration Date </span>
          <TextInput
            type="email"
            name="expirationDate"
            label="MM-DD-YYYY"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            style="w-full"
          />
        </div>
      </Panel>
    </div>
  );
};

export default ServiceDate;
