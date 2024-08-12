import React from "react";

const Heading = ({ heading, children }) => {
    return (
        <h2 className="relative mb-16 font-montserrat | lg:mb-20" id={heading}>
            <div className="bordered-heading-text | text-4xl | sm:text-6xl">
                {children}
            </div>
            <div className="font-bold text-gray-700 text-xl absolute bottom-1/2 translate-y-2/4 | sm:text-2xl">
                {children}
            </div>
        </h2>
    );
};

export default Heading;
