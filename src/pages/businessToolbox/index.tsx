import Content from "src/pages/businessToolbox/Content"

const BusinessToolBox = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="w-full bg-[#304b5e] text-center text-white py-20">
                <span className="text-[56px]">Business Toolbox</span>
                <div className="flex flex-row gap-3 justify-center text-[27px] mt-10">
                    <span>* Hire help & local Services</span>
                    <span>* Meet New Clients</span>
                    <span>* Make Deals</span>
                </div>
                <div className="flex flex-row gap-3 justify-center text-[27px] mt-3">
                    <span>* Manage Jobs</span>
                    <span>* Earn More $</span>
                </div>
            </div>

            <div className="w-full flex justify-center">
               <img src="src/assets/images/business_hero.png"></img>
            </div>

            <div className="bg-[#fafafa] w-full flex justify-center">
                <Content />
            </div>

        </div>
    )
}

export default BusinessToolBox