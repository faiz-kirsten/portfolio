import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { TfiAlignRight } from "react-icons/tfi";
import { TfiHome } from "react-icons/tfi";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { TfiIdBadge } from "react-icons/tfi";

const Header = () => {
    const [showNavMenu, setShowMenu] = useState(false);

    return (
        <header className="my-5 fixed bottom-0 w-full | sm:static sm:w-auto">
            <nav className="mobile-nav | hidden max-w-2xl justify-between p-5 rounded-full | sm:flex sm:mx-3 | md:mx-auto">
                <a className="font-montserrat text-lg font-semibold" href="/">
                    faizk.<span className="text-orange-500">dev</span>
                </a>
                <menu className="flex gap-6 font-montserrat items-center | lg:gap-8">
                    <a href="#edu" className="font-medium">
                        Experience & Education
                    </a>
                    <a href="#projects" className="font-medium">
                        Projects
                    </a>
                    <a href="#contact" className="font-medium">
                        Contact
                    </a>
                </menu>
            </nav>

            {/* Mobile nav */}
            <menu
                className={`mobile-nav | ${
                    showNavMenu ? "h-full" : "h-0 hidden"
                } max-w-80 mx-auto grid gap-10 rounded-t-[2rem] text-xl py-8 px-4 font-montserrat transition-all duration-1000 | sm:hidden`}>
                <a
                    href="#edu"
                    className="font-medium"
                    onClick={() => setShowMenu(false)}>
                    Experience & Education
                </a>
                <a
                    href="#projects"
                    className="font-medium"
                    onClick={() => setShowMenu(false)}>
                    Projects
                </a>
                <a
                    href="#contact"
                    className="font-medium"
                    onClick={() => setShowMenu(false)}>
                    Contact
                </a>
            </menu>

            <nav
                className={`mobile-nav | flex border justify-between max-w-80 mx-auto p-5 ${
                    showNavMenu ? "rounded-b-[2rem]" : "rounded-full"
                }  | sm:hidden`}>
                {!showNavMenu ? (
                    <>
                        <a href="/" className="">
                            <TfiHome className="w-6 h-6" />
                        </a>
                        <a href="#edu" className="">
                            <TfiIdBadge className="w-6 h-6" />
                        </a>
                        <a href="#projects" className="">
                            <TfiLayoutGrid2 className="w-6 h-6" />
                        </a>
                        <a href="#contact" className="">
                            <TfiUser className="w-6 h-6" />
                        </a>
                    </>
                ) : (
                    <a
                        className="font-montserrat h-6 text-base font-semibold"
                        href="/">
                        faizk.<span className="text-orange-500">dev</span>
                    </a>
                )}
                {!showNavMenu ? (
                    <TfiAlignRight
                        className="w-6 h-6 transition-all"
                        onClick={() => setShowMenu(true)}
                    />
                ) : (
                    <TfiClose
                        className="w-6 h-6 transition-all"
                        onClick={() => setShowMenu(false)}
                    />
                )}
            </nav>
        </header>
    );
};

export default Header;
