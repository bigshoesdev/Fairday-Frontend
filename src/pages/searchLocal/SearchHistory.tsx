import DropPanel from 'src/components/common/DropPanel';

const SearchHistory = () => {

    return (
        <>
            <DropPanel
                header={
                    <div className='flex flex-col gap-2'>
                        <span className='text-[#1880F1] text-[22px] font-bold'>Past Search History</span>
                    </div>
                }
            >
                <div className='flex flex-col gap-4 p-6'>
                    <span>Restaurants</span>
                    <span>Handyman</span>
                    <span>Legal Servicies</span>
                    <span>Pet Servicies</span>
                </div>
            </DropPanel>
        </>

    )
}

export default SearchHistory