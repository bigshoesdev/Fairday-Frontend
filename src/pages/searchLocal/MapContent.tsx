import Button from "src/components/common/Button";

const MapContent = () => {

    const buttonClick = () => {
    }

    return (
        <div className='bg-[url("http://localhost:5173/src/assets/images/global_map.png")] bg-cover h-[500px] relative'>
            <Button
                text="SAVED COUPONS"
                onClick={buttonClick}
                className="bg-tealGray text-white px-8 hover:bg-gray-500 transition-all cursor-pointer hover:border-gray-500 focus:outline-none absolute top-5 right-5"
            />
        </div>
    );
}

export default MapContent;
