import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Accordian = ({ title, dates, institution, description }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div
            className=""
            onClick={() => setToggle((prevToggle) => !prevToggle)}>
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center font-montserrat gap-3">
                    <FaPlus
                        className={`transition-all duration-300 text-orange-500 cursor-pointer ${
                            toggle ? " rotate-45 " : " rotate-0 "
                        } `}
                    />
                    <div className="text-sm | sm:text-base">{title}</div>
                </div>
                <div className="font-montserrat text-sm | sm:text-base">
                    {dates}
                </div>
            </div>
            <div
                className={`transition-all duration-300 grid gap-3 ${
                    toggle
                        ? "h-auto border-dashed border-y py-3"
                        : "h-0 overflow-hidden border-dashed border-b"
                }`}>
                <div className="font-inconsolata">{description}</div>
                <div className="font-montserrat">{institution}</div>
            </div>
        </div>
    );
};

export default Accordian;
