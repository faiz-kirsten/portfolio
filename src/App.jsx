// components
import { useState } from "react";
import Header from "./components/Header";
import { LuArrowUp } from "react-icons/lu";
import Hero from "./components/Hero";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";

const App = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleShowToTopBtn = () => {
        window.scroll(0, 0);
    };

    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return (
        <div className="lines | relative">
            <Header scrollY={scrollY} />
            <main className="container mx-auto grid gap-24 mt-10 | lg:gap-36 lg:mt-24">
                <Hero />
                <Resume />
                <Projects />
            </main>

            <footer className="h-96"></footer>

            <div
                className={`back-to-top | ${
                    scrollY > 100 ? "hidden sm:fixed sm:flex z-50" : "hidden"
                }  bottom-24 right-6 rounded-full w-14 h-14 items-center justify-center | sm:bottom-12`}>
                <LuArrowUp
                    className="h-8 w-8 cursor-pointer"
                    onClick={handleShowToTopBtn}
                />
            </div>
        </div>
    );
};

export default App;
