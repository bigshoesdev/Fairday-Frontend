import layoutMenuList from 'src/mock/layoutMenuList.json'

const CategoryComponent = () => {
    return (
        <div className="w-full flex justify-between items-start">

            {layoutMenuList.footer.map((item, index) =>
                <div
                    key={index}
                    className=''
                >
                    <p className="mb-0 font-bold text-white text-[19px] mb-6">
                        {item.title}
                    </p>

                    {item.list.map((each, order) =>
                        <p
                            key={order}
                            className="text-[16px] text-primaryGray cursor-pointer hover:text-white mb-3 transition-all"
                        >
                            {each.menu}
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoryComponent;