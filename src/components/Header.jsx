import { useState } from "react";
import { LuArrowUp, LuX } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { LuHome } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { LuContact } from "react-icons/lu";
import ButtonLink from "./ButtonLink";

const Header = ({ scrollY }) => {
    const [showNavMenu, setShowMenu] = useState(false);

    const handleShowToTopBtn = () => {
        window.scroll(0, 0);
    };

    return (
        <header className="my-5 fixed bottom-0 w-full | sm:sticky sm:w-full sm:top-5 z-50 |">
            <nav className="mobile-nav | hidden max-w-2xl justify-between py-5 px-6 rounded-full  | sm:flex sm:mx-auto">
                <a className="font-montserrat text-xl font-semibold" href="/">
                    faizk.<span className="text-orange-500">dev</span>
                </a>
                <menu className="flex gap-6 items-center | lg:gap-8">
                    <ButtonLink href="#">Home</ButtonLink>
                    <ButtonLink href="#edu">Resume</ButtonLink>
                    <ButtonLink href="#projects">Projects</ButtonLink>
                    <ButtonLink href="#contact">Contact</ButtonLink>
                </menu>
            </nav>

            {/* Mobile nav */}
            <menu
                className={`| ${
                    showNavMenu
                        ? "mobile-nav | h-auto py-8"
                        : "h-0 overflow-hidden border-none"
                } max-w-80 px-4 mx-auto grid gap-10 rounded-t-[2rem] text-lg  font-inconsolata transition-all duration-300 | sm:hidden`}>
                <div className="flex gap-3 items-center">
                    <LuHome className="w-5 h-5 text-gray-600" />
                    <ButtonLink href="#" onClick={() => setShowMenu(false)}>
                        Home
                    </ButtonLink>
                </div>
                <div className="flex gap-3 items-center">
                    <LuGraduationCap className="w-5 h-5 text-gray-600" />
                    <ButtonLink href="#edu" onClick={() => setShowMenu(false)}>
                        Resume
                    </ButtonLink>
                </div>

                <div className="flex gap-3 items-center">
                    <LuLayoutGrid className="w-5 h-5 text-gray-600" />
                    <ButtonLink
                        href="#projects"
                        onClick={() => setShowMenu(false)}>
                        Projects
                    </ButtonLink>
                </div>
                <div className="flex gap-3 items-center">
                    <LuContact className="w-5 h-5 text-gray-600" />
                    <ButtonLink
                        href="#contact"
                        onClick={() => setShowMenu(false)}>
                        Contact
                    </ButtonLink>
                </div>
            </menu>

            <nav
                className={`mobile-nav | flex border justify-between max-w-80 mx-auto px-4 py-5 ${
                    showNavMenu ? "rounded-b-[2rem]" : "rounded-full"
                }  | sm:hidden`}>
                {!showNavMenu ? (
                    <>
                        <a href="/" className="">
                            <LuHome className="w-6 h-6" />
                        </a>
                        <a href="#edu" className="">
                            <LuGraduationCap className="w-6 h-6" />
                        </a>
                        <a href="#projects" className="">
                            <LuLayoutGrid className="w-6 h-6" />
                        </a>
                        <a href="#contact" className="">
                            <LuContact className="w-6 h-6" />
                        </a>
                        <LuArrowUp
                            className={`${
                                scrollY > 100 ? "block" : "hidden"
                            } w-6 h-6 transition-all`}
                            onClick={handleShowToTopBtn}></LuArrowUp>
                    </>
                ) : (
                    <a
                        className="font-montserrat h-6 text-xl font-semibold"
                        href="/">
                        faizk.<span className="text-orange-500">dev</span>
                    </a>
                )}

                {!showNavMenu ? (
                    <LuMenu
                        className="w-6 h-6 transition-all duration-300"
                        onClick={() => setShowMenu(true)}
                    />
                ) : (
                    <LuX
                        className="w-6 h-6 transition-all duration-300"
                        onClick={() => setShowMenu(false)}
                    />
                )}
            </nav>
        </header>
    );
};

export default Header;
