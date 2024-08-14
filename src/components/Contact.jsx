import { useState } from "react";
import Heading from "./Heading";

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";

const Contact = () => {
    const [mailCopied, setMailCopied] = useState(false);

    return (
        <section className="container mx-auto  px-10">
            <Heading heading="contact">Contact Me</Heading>
            <div className="font-montserrat ">
                <div className="text-lg font-bold mb-8 | md:text-xl | lg:mb-12 lg:text-2xl">
                    Looking forward to hearing from you!
                </div>
                <div className="flex flex-col gap-6 | md:flex-row md:gap-20 | lg:gap-36">
                    <div className="flex items-center gap-3">
                        <FaLocationDot className="text-xl text-orange-600 | lg:text-3xl" />
                        <div className="grid gap-1">
                            <div className="text-sm | lg:text-base">
                                Location
                            </div>
                            <div className="font-semibold | lg:text-lg">
                                Johannesburg, South Africa
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-xl text-orange-600 lg:text-3xl" />
                            <div className="grid gap-1">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm | lg:text-base">
                                        Mail
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a href="mailto:faizkirsten@gmail.com">
                                            <SiMinutemailer className="cursor-pointer hover:text-orange-600 | lg:text-xl " />
                                        </a>
                                        <div
                                            onClick={async () => {
                                                await navigator.clipboard.writeText(
                                                    "faizkirsten@gmail.com"
                                                );
                                                setMailCopied(
                                                    (prevCopied) => !prevCopied
                                                );
                                                setTimeout(() => {
                                                    setMailCopied(false);
                                                }, 2000);
                                            }}>
                                            {mailCopied ? (
                                                <LuCopyCheck className="cursor-pointer hover:text-orange-600 | lg:text-xl" />
                                            ) : (
                                                <LuCopy className="cursor-pointer hover:text-orange-600 | lg:text-xl" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="font-semibold | lg:text-lg">
                                    faizkirsten@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
