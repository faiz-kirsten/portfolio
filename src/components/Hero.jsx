import React from "react";
import Heading from "./Heading";
import headshot from "../assets/headshot/headshot.jpg";
import { LuArrowDown } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import ButtonLink from "./ButtonLink";
import Button from "./Button";

import Typewriter from "typewriter-effect";

const Hero = () => {
    return (
        <section className="container mx-auto  px-10 grid gap-16 font-montserrat | lg:flex ">
            <article className="grid gap-10 | lg:w-2/3 lg:flex lg:flex-col">
                <a
                    className="font-montserrat text-xl font-semibold sm:hidden"
                    href="/">
                    faizk.<span className="text-orange-600">dev</span>
                </a>
                <div className=" text-3xl grid gap-3 | lg:gap-3">
                    <div className="tracking-wide font-semibold">
                        I'm Faiz Kirsten
                    </div>
                    <div className="tracking-wide font-montserrat font-bold">
                        <Typewriter
                            options={{
                                strings: ["Software Engineer", "Web Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <p className="text-gray-800 font-inconsolata">
                    Passionate and dedicated HyperionDev Full Stack Web
                    Developer graduate with experience in building web
                    applications, seeking a transformative opportunity to apply
                    theoretical knowledge and gain hands-on experience in
                    software development. Eager to secure a position in a
                    reputable organization to further develop my knowledge and
                    skills.
                </p>
                <div className="flex items-center gap-6 | lg:gap-7 ">
                    <Button variation="primary">View CV</Button>

                    <div className="flex gap-3">
                        <a href="">
                            <LuGithub className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-all duration-300" />
                        </a>
                        <a href="">
                            <LuLinkedin className="h-6 w-6 text-gray-600 hover:text-orange-600 transition-all duration-300" />
                        </a>
                    </div>
                </div>

                <a
                    href="#edu"
                    className="hidden gap-0.5 items-center text-xs text-gray-600 | lg:flex">
                    Scroll Down <LuArrowDown />
                </a>
            </article>
            <a
                href="#edu"
                className="flex gap-0.5 items-center text-xs text-gray-600 | lg:hidden">
                Scroll Down <LuArrowDown />
            </a>
            <div className="relative | flex items-center justify-center ">
                <img
                    src={headshot}
                    alt=""
                    className="w-2/3 rounded-tr-[5rem] "
                />
                <div className="img-pattern | absolute -bottom-12 left-6 w-48 h-5/6 -z-10 | lg:w-64"></div>
            </div>
        </section>
    );
};

export default Hero;
