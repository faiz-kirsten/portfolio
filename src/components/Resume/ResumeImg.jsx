const ResumeImg = ({ title, image }) => {
    return (
        <div className="bg-gray-50 py-14 rounded-xl | md:w-96 md:max-h-64 | lg:w-[32rem] lg:max-h-none">
            <div className="flex items-center flex-col gap-4 | md:gap-4 | lg:gap-6">
                <div className="w-32">
                    <img src={image} alt="" className="w-full h-auto" />
                </div>
                <div className="text-2xl font-semibold tracking-wide font-montserrat">
                    {title}
                </div>
            </div>
        </div>
    );
};

export default ResumeImg;
