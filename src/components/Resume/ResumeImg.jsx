const ResumeImg = ({ title, image }) => {
    return (
        <div className="bg-gray-50 py-14 rounded-xl | md:w-1/3 md:max-h-64 | lg:max-h-64">
            <div className="flex items-center flex-col gap-4 | md:gap-4 | lg:gap-6">
                <div className="">
                    <img src={image} alt="" className="w-32 h-24" />
                </div>
                <div className="text-2xl font-semibold tracking-wide font-montserrat">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default ResumeImg;
