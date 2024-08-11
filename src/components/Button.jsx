const Button = ({ children, ...props }) => {
    return (
        <a
            className="font-montserrat rounded-full px-3 py-2 border border-dashed border-black  hover:border-solid hover:text-orange-500 hover:border-orange-500 transition-all duration-300"
            {...props}>
            {children}
        </a>
    );
};

export default Button;
