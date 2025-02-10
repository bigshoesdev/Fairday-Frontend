
const Banner = () => {
    return (
        <div className="flex flex-col items-center p-10 container">
            <div className="overflow-hidden">
                <img 
                    src="src/assets/images/home_banner1.png" 
                    className="hidden xs:block transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
                />
            </div>
            <div className="overflow-hidden">
                <img 
                    src="src/assets/images/home_banner2.png" 
                    className="hidden xs:block transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default Banner;
