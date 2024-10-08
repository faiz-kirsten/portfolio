const Button = ({ variation, children, ...props }) => {
    let buttonStyles = "transition-all duration-300 cursor-pointer";

    if (variation === "primary") {
        buttonStyles +=
            " px-6 py-3 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:-translate-y-3 hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]";
    }
    if (variation === "secondary") {
        buttonStyles += " button |  relative z-10";
    }
    return (
        <a className={buttonStyles} {...props}>
            <div className="button-text">{children}</div>
            <div
                className={`${
                    variation === "secondary"
                        ? " button-div | absolute bottom-0 w-full h-1.5 bg-orange-600 opacity-75 -z-10 transition-all duration-300"
                        : ""
                }`}></div>
        </a>
    );
};

export default Button;
