import { useState } from "react";
import Heading from "../Heading";
import { FaGithub } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Project from "./Project";

const CATEGORIES = [
    { category: "Web Development" },
    { category: "Console Based Application" },
];

const PROJECTS = [
    {
        id: 1,
        name: "E-commerce Store",
        technologies: ["React", "Django", "CSS", "Tailwind CSS"],
        featured: true,
        short_description: "An online clothing store for a client",
        category: "Web Development",
        live_demo_url: "",
        github_url: "",
        image_urls: [""],
    },
    {
        id: 2,
        name: "Console-based-app",
        technologies: ["Java", "MySQL"],
        featured: false,
        short_description: "An online clothing store for a client",
        category: "Console Based Application",
        live_demo_url: "",
        github_url: "",
        image_urls: [""],
    },
    {
        id: 3,
        name: "Employee credential management app",
        technologies: ["React", "node.js", "MongoDB", "CSS", "Tailwind CSS"],
        featured: true,
        short_description: "An online clothing store for a client",
        category: "Web Development",
        live_demo_url: "",
        github_url: "",
        image_urls: [""],
    },
    {
        id: 4,
        name: "Project management app",
        technologies: ["React", "node.js", "MongoDB", "Tailwind CSS"],
        featured: true,
        short_description: "An online clothing store for a client",
        category: "Console Based Application",
        live_demo_url: "",
        github_url: "",
        image_urls: [""],
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("featured");
    let filteredProjects = PROJECTS.filter(
        (project) => project.category === filter
    );

    if (filter === "featured") {
        filteredProjects = PROJECTS.filter(
            (project) => project.featured === true
        );
    }

    if (filter === "all") {
        filteredProjects = PROJECTS;
    }

    return (
        <div className="px-10 font-montserrat ">
            <Heading heading="projects">Projects</Heading>

            <div className="mb-6 border-b border-dashed | lg:mb-12">
                <div className="hidden | lg:block ">
                    <div className=" flex items-center gap-10">
                        <div className="flex items-center">
                            <a
                                href=""
                                target="_blank"
                                className="github-projects | relative hover:text-orange-500">
                                <FaGithub className="github-logo | text-3xl" />
                                <BsBoxArrowUpRight className="github-arrow | absolute -top-1 -right-3 text-xs" />
                            </a>
                        </div>
                        <div className="flex gap-6">
                            <button
                                className={`border-b-2 transition-all duration-300 border-solid py-3 px-3  ${
                                    filter === "all"
                                        ? " font-semibold border-b-orange-500 "
                                        : "border-b-transparent font-thin"
                                }`}
                                onClick={() => setFilter("all")}>
                                All
                            </button>
                            <button
                                className={`border-b-2 transition-all duration-300 border-solid py-3 px-3 ${
                                    filter === "featured"
                                        ? "border-b-orange-500 font-semibold "
                                        : " font-thin border-b-transparent"
                                }`}
                                onClick={() => setFilter("featured")}>
                                Featured
                            </button>
                            {CATEGORIES.map((category, index) => (
                                <button
                                    className={`border-b-2 transition-all duration-300
                                  border-solid py-3 px-3  ${
                                      filter === category.category
                                          ? " font-semibold border-b-orange-500 "
                                          : " font-thin border-b-transparent"
                                  }`}
                                    key={index}
                                    onClick={() =>
                                        setFilter(category.category)
                                    }>
                                    {category.category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Mobile Filtering */}
                <div className="flex justify-center">
                    <div className="flex justify-between items-center py-4  | lg:hidden">
                        <div className="flex items-center gap-3 w-max  | ">
                            <div className="text-gray-700">Filter by</div>
                            <div className="relative">
                                <select
                                    name=""
                                    id=""
                                    onChange={(e) => setFilter(e.target.value)}
                                    value={filter}
                                    className="select-input | font-montserrat px-6 py-3 rounded-full appearance-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                                    <option value="all">All</option>
                                    <option value="featured">Featured</option>
                                    {CATEGORIES.map((category, index) => (
                                        <option
                                            className="w-max"
                                            key={index}
                                            value={category.category}>
                                            {category.category}
                                        </option>
                                    ))}
                                </select>
                                <RiArrowDownSFill className="absolute bottom-1/2 right-2 translate-y-1/2 text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center | md:block">
                <div className="transition-all duration-300 grid gap-8 max-w-96 | md:max-w-none md:grid-cols-2 md:gap-10 | lg:grid-cols-3 lg:gap-12">
                    {filteredProjects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
