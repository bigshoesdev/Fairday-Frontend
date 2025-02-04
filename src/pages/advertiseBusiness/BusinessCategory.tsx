import DropPanel from 'src/components/common/DropPanel';
import Button from 'src/components/common/Button';


const BusinessCategory = () => {

  const buttonClick = () => {
    console.log('This is button clicked!!');
  };

  return (
    <div className='w-full'>
      <DropPanel
        header={
        <div className='flex flex-col gap-2'>
          <span className='text-[#1880F1] text-[22px] font-bold'>Business Advertisement Category</span>
          <span className='text-black text-[17px] font-bold'>From Our list and <span className='text-[#1880F1]'>(Select up to 5 key Terms in the order of importane being first)</span></span>
          <Button
            text="Restaurant, Catering, Food Services"
            onClick={buttonClick}
            className="w-1/2 bg-primaryBlue p-2 font-bold text-white hover:bg-blue-400 transition-all cursor-pointer hover:border-blue-400 focus:outline-none "
          />
        </div>
      }
      >
        <p>Custom Panel Content 1</p>
        <p>Custom Panel Content 2</p>
        <p>Custom Panel Content 3</p>
      </DropPanel>
    </div>
  );
};

export default BusinessCategory;
