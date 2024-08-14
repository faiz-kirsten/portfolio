import Heading from "../Heading";
import Skill from "../Resume/Skill";
import Accordian from "../Resume/Accordian";
import ResumeImg from "./ResumeImg";

// logos for skills
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { PiArrowBendUpLeftFill } from "react-icons/pi";
import { FaArrowTurnDown } from "react-icons/fa6";

import eduSvg from "../../assets/illustrations/edu.svg";
import workSvg from "../../assets/illustrations/work.svg";
import certificateSvg from "../../assets/illustrations/certificates.svg";

const responsive = {
    xxl: {
        // the naming can be any, depends on you.
        breakpoint: { max: 3000, min: 1537 },
        items: 8,
    },
    xl: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1536, min: 1281 },
        items: 7,
    },
    lg: {
        // the naming can be any, depends on you.
        breakpoint: { max: 1280, min: 1024 },
        items: 6,
    },
    md: {
        breakpoint: { max: 1024, min: 768 },
        items: 5,
    },
    sm: {
        breakpoint: { max: 768, min: 641 },
        items: 4,
    },
    base: {
        breakpoint: { max: 640, min: 0 },
        items: 3,
    },
};

const Resume = () => {
    return (
        <section className="container mx-auto  relative px-6 |  sm:px-10 ">
            <Heading heading="edu">Resume</Heading>
            <div className="grid gap-14 | lg:gap-20">
                <article className="relative ">
                    <div className="flex items-center gap-3 mb-4 ">
                        <div className="| font-inconsolata font-bold  text-lg | md:mb-0 md:-top-8  md:-right-8 md:absolute md:rotate-[20deg] md:text-xl">
                            Tech Stack
                        </div>

                        <FaArrowTurnDown className="text-xs md:hidden text-orange-600 font-bold translate-y-1" />
                    </div>
                    <PiArrowBendUpLeftFill className="| text-orange-600 hidden font-bold tracking-wide md:text-2xl mb-4 | md:mb-0 md:block md:-top-12 md:right-20 md:absolute md:-rotate-[45deg]" />
                    <div className="flex flex-wrap gap-3 | md:gap-5 | lg:pl-">
                        <Skill name="HTML">
                            <FaHtml5 />
                        </Skill>
                        <Skill name="JavaScript">
                            <IoLogoJavascript />
                        </Skill>
                        <Skill name="CSS">
                            <FaCss3Alt />
                        </Skill>
                        <Skill name="Java">
                            <FaJava />
                        </Skill>
                        <Skill name="MySQL">
                            <SiMysql />
                        </Skill>
                        <Skill name="MongoDB">
                            <SiMongodb />
                        </Skill>
                        <Skill name="React">
                            <FaReact />
                        </Skill>
                        <Skill name="Node.js">
                            <FaNode />
                        </Skill>
                        <Skill name="Python">
                            <FaPython />
                        </Skill>
                        <Skill name="Tailwind CSS">
                            <RiTailwindCssFill />
                        </Skill>
                        <Skill name="Postman">
                            <SiPostman />
                        </Skill>
                    </div>
                </article>

                <div className="flex justify-center  | md:block ">
                    <article className="max-w-[32rem] flex flex-col gap-3 | sm:gap-4 | md:max-w-none md:flex-row md:gap-6">
                        <ResumeImg image={eduSvg} title="Education" />
                        <div className="md:w-2/3">
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. "
                            />
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. "
                            />
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. "
                            />
                        </div>
                    </article>
                </div>
                <div className="flex justify-center | md:block">
                    <article className="max-w-[32rem] flex flex-col gap-3 | sm:gap-4  | md:max-w-none md:flex-row md:gap-6">
                        <ResumeImg image={workSvg} title="Experience" />
                        <div className="md:w-2/3">
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. "
                            />
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos."
                            />
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. "
                            />
                        </div>
                    </article>
                </div>
                <div className="flex justify-center | md:block">
                    <article className="max-w-[32rem] flex flex-col gap-3 | sm:gap-4  | md:max-w-none md:flex-row md:gap-6">
                        <ResumeImg
                            image={certificateSvg}
                            title="Certificates"
                        />
                        <div className="md:w-2/3">
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. "
                            />
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos."
                            />
                            <Accordian
                                title="Full Stack Web Developer"
                                dates="2022 - 2023"
                                institution="HyperionDev"
                                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum optio, impedit, veniam perferendis corporis, nobis laudantium itaque architecto non quos. "
                            />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Resume;
