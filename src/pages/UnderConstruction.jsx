import githubSvg from "../assets/icons/socials/github.svg";
import linkedInSvg from "../assets/icons/socials/linkedin.svg";

const UnderConstruction = () => {
    return (
        <div className="container mx-auto my-3 px-2 grid gap-8 font-syne | md:px-3">
            <header className=" hover:cursor-pointer | sm:text-lg ">
                <a href="/" className="logo | flex items-center gap-1">
                    <h1 className="font-bold tracking-wide">Faiz Kirsten</h1>
                    <div className="w-16 h-0.5 bg-gray-700 rounded-lg transition-all duration-300"></div>
                </a>
            </header>
            <main className="grid gap-5 | md:">
                <div className="text-xl font-semibold | md:">
                    My Portfolio Website Is Under Construction...
                </div>
                <div className="flex gap-2">
                    <a href="https://github.com/faiz-kirsten" target="_blank">
                        <img
                            src={githubSvg}
                            alt=""
                            className="icon | border border-gray-800 p-1 rounded-lg h-10 transition-all duration-150  hover:scale-110"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/faiz-kirsten"
                        target="_blank">
                        <img
                            src={linkedInSvg}
                            alt=""
                            className="icon | border border-gray-800 p-1 rounded-lg h-10 transition-all duration-150 hover:scale-110 hover:border-"
                        />
                    </a>
                </div>
            </main>
        </div>
    );
};

export default UnderConstruction;
