import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import Button from "../Button";

const Project = ({ project }) => {
    return (
        <div className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-3xl h-[34rem] flex flex-col hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] hover:-translate-y-2 transition-all duration-300 | md:h-[36rem] | lg:h-[38rem]">
            <img
                src="https://via.placeholder.com/600/56a8c2"
                alt=""
                className="w-full h-64 rounded-t-3xl object-cover"
            />

            <div className="px-6 py-7 flex justify-between flex-col flex-grow">
                <div className="grid gap-4 | lg:gap-6">
                    <div className="text-xl font-bold tracking-wide">
                        {project.name}
                    </div>

                    <div className="flex text-sm gap-1 flex-wrap lg:gap-2">
                        {project.technologies.map((technology, index) => (
                            <div
                                key={index}
                                className="font-inconsolata rounded-full transition-all duration-300 border  border-dashed border-black hover:border-solid hover:text-orange-500 hover:border-orange-500 px-2">
                                {technology}
                            </div>
                        ))}
                    </div>
                    <div className="font-inconsolata">
                        {project.short_description}
                    </div>
                </div>
                <div className="flex justify-between ">
                    <Button
                        variation="secondary"
                        href={project.live_demo_url}
                        target="_blank">
                        <div className="flex items-center gap-1">
                            <TbWorld className="lg:text-lg" />
                            <div className="lg:text-lg">Live Demo</div>
                        </div>
                    </Button>

                    <Button
                        href={project.github_url}
                        target="_blank"
                        variation="secondary">
                        <div className="flex items-center gap-1">
                            <FaGithub className="lg:text-lg" />
                            <div className="lg:text-lg">GitHub</div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Project;
