const ButtonLink = ({ children, ...props }) => {
    return (
        <a
            className="font-medium font-inconsolata hover:text-orange-600 transition-all duration-300"
            {...props}>
            {children}
        </a>
    );
};

export default ButtonLink;
