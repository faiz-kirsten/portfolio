const Skill = ({ name, children }) => {
    return (
        <div className="skill | flex gap-2 items-center font-inconsolata rounded-full px-6 py-3 transition-all duration-300 border  border-dashed border-black hover:border-solid hover:text-orange-500 hover:border-orange-500 | lg:gap-3">
            <div className="skill_logo | text-lg| md:text-xl">{children}</div>
            <div className="skill_name |  text-gray-700 text-sm | sm:text-base">
                {name}
            </div>
        </div>
    );
};

export default Skill;
