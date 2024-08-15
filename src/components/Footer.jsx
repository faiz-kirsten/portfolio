import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="footer |  mt-24 px-10 pb-24 pt-10 | md:px-6 ">
            <div className="container mx-auto py-6 grid gap-4">
                <div className="flex items-center justify-between | md:flex-col md:items-baseline md:gap-6">
                    <span className="">
                        <a
                            className="font-montserrat text-xl font-semibold"
                            href="/">
                            faizk.<span className="text-orange-600">dev</span>
                        </a>
                    </span>

                    <div className="flex gap-3">
                        <a
                            href="https://github.com/faiz-kirsten"
                            target="_blank">
                            <LuGithub className="h-6 w-6 text-gray-700  hover:text-orange-600 transition-all duration-300" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/faiz-kirsten/"
                            target="_blank">
                            <LuLinkedin className="h-6 w-6 text-gray-700  hover:text-orange-600 transition-all duration-300" />
                        </a>
                    </div>
                </div>
                <div className="font-montserrat text-sm">
                    All rights reserved &#169; 2024
                    <span className="font-bold text-gray-700">
                        {" "}
                        Faiz Kirsten
                    </span>{" "}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
