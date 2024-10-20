import { useState } from "react";
import Heading from "../Heading";
import { FaGithub } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Project from "./Project";

const CATEGORIES = [
    { category: "Web Development" },
    { category: "Console Based" },
];

const PROJECTS = [
    {
        id: 1,
        name: "Ghosted Clothing Brand Website + Admin Dashboard",
        technologies: ["React", "Tailwind CSS", "Firebase"],
        short_description:
            "Building a dynamic and responsive e-commerce platform for a clothing business and an Admin dashboard to manage product listings.",
        live_demo_url: "https://ghosted-za.netlify.app/",
        github_url: "",
        category: "Web Development",
        featured: true,
    },

    {
        id: 2,
        name: "Employee Credential Manager",
        technologies: [
            "React",
            "Tailwind CSS",
            "MongoDB",
            "Node.js",
            "Express.js",
        ],
        short_description:
            "Developed a web application using the MERN stack (MongoDB, Express, React, Node.js) designed to securely manage employee credentials.",
        live_demo_url: "https://credguard.netlify.app/",
        github_url:
            "https://github.com/faiz-kirsten/user-credential-manager-frontend",
        thumbnail: "https://via.placeholder.com/600/56a8c2",
        category: "Web Development",
        featured: true,
    },

    {
        id: 3,
        name: "Hangman Clone",
        technologies: ["React", "Tailwind CSS"],
        short_description:
            "A hangman clone which leverages AI to generate a new word each time the user clicks play.",
        live_demo_url: "https://hangman-clone.netlify.app/",
        github_url: "https://github.com/faiz-kirsten/local-link ",
        thumbnail: "https://via.placeholder.com/600/56a8c2",
    },
];

const calculateProjectCount = (filteredCategory, projects) => {
    if (filteredCategory === "featured") {
        return projects.filter((project) => project.featured === true).length;
    }

    if (filteredCategory === "all") {
        return projects.length;
    }
    const filteredCategoryCount = projects.filter(
        (category) => category.category === filteredCategory
    );

    return filteredCategoryCount.length;
};

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
        <section className="container mx-auto px-10 font-montserrat ">
            <Heading heading="projects">Projects</Heading>

            <div className="mb-6 border-b border-dashed | lg:mb-12">
                <div className="hidden | lg:block ">
                    <div className=" flex items-center justify-between">
                        <div className="flex gap-6">
                            <div className="relative">
                                <button
                                    className={`border-b-2 transition-all duration-300 border-solid py-3 px-3  ${
                                        filter === "all"
                                            ? " font-semibold border-b-orange-600 "
                                            : "border-b-transparent font-thin"
                                    }`}
                                    onClick={() => setFilter("all")}>
                                    All
                                </button>
                                <div className="text-xs absolute top-0 right-0">
                                    {calculateProjectCount("all", PROJECTS)}
                                </div>
                            </div>
                            <div className="relative">
                                <button
                                    className={`border-b-2 transition-all duration-300 border-solid py-3 px-3 ${
                                        filter === "featured"
                                            ? "border-b-orange-600 font-semibold "
                                            : " font-thin border-b-transparent"
                                    }`}
                                    onClick={() => setFilter("featured")}>
                                    Featured
                                </button>
                                <div className="text-xs absolute top-0 right-0">
                                    {calculateProjectCount(
                                        "featured",
                                        PROJECTS
                                    )}
                                </div>
                            </div>

                            {CATEGORIES.map((category, index) => (
                                <div key={index} className="relative">
                                    <button
                                        className={`border-b-2 transition-all duration-300
                                  border-solid py-3 px-3  ${
                                      filter === category.category
                                          ? " font-semibold border-b-orange-600 "
                                          : " font-thin border-b-transparent"
                                  }`}
                                        onClick={() =>
                                            setFilter(category.category)
                                        }>
                                        {category.category}
                                    </button>
                                    <div className="text-xs absolute top-0 right-0">
                                        {calculateProjectCount(
                                            category.category,
                                            PROJECTS
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <a
                                href="https://github.com/faiz-kirsten"
                                target="_blank"
                                className="github-projects | relative ">
                                <FaGithub className="github-logo text-lg | md:text-2xl hover:text-orange-900 transition-all" />

                                <BsBoxArrowUpRight className="github-arrow | absolute -top-0 -right-2 text-[0.50rem]" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Mobile Filtering */}
                <div className="flex justify-center | md:justify-start | lg:hidden">
                    <div className="flex justify-between items-center py-4 | lg:hidden">
                        <div className="flex items-center gap-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pl-3 rounded-md | md:w-auto">
                            <label
                                className="text-gray-700"
                                htmlFor="categoryFilter">
                                Filter by
                            </label>
                            <div className="relative flex-1">
                                <select
                                    name="categoryFilter"
                                    id="categoryFilter"
                                    onChange={(e) => setFilter(e.target.value)}
                                    value={filter}
                                    className="select-input | bg-transparent font-montserrat px-6 py-3  appearance-none  w-full | md:px-6 md:w-64">
                                    <option value="all">
                                        All (
                                        {calculateProjectCount("all", PROJECTS)}
                                        )
                                    </option>
                                    <option value="featured">
                                        Featured (
                                        {calculateProjectCount(
                                            "featured",
                                            PROJECTS
                                        )}
                                        )
                                    </option>
                                    {CATEGORIES.map((category, index) => (
                                        <option
                                            className=""
                                            key={index}
                                            value={category.category}>
                                            {category.category} (
                                            {calculateProjectCount(
                                                category.category,
                                                PROJECTS
                                            )}
                                            )
                                        </option>
                                    ))}
                                </select>
                                <RiArrowDownSFill className="absolute bottom-1/2 right-2 translate-y-1/2 text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {filteredProjects.length > 0 ? (
                <div className="flex justify-center | md:block">
                    <div className="transition-all duration-300 grid gap-8  |  md:w-auto md:grid-cols-2 md:gap-10 | xl:grid-cols-3 lg:gap-12 ">
                        {filteredProjects.map((project) => (
                            <Project key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="grid place-content-center ">
                    <div className="text-lg md:text-xl">
                        No projects available for filter: {filter}.
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
