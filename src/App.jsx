// components
import { useState } from "react";
import Header from "./components/Header";
import { LuArrowUp } from "react-icons/lu";
import Hero from "./components/Hero";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleShowToTopBtn = () => {
        window.scroll(0, 0);
    };

    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return (
        <div className="lines | relative">
            <Header scrollY={scrollY} />
            <main className="grid gap-24 mt-10 | lg:gap-36 lg:mt-24">
                <Hero />
                <div className="lg: resume-wrapper | bg-transparent pt-10 | lg:pt-24 | ">
                    <Resume />
                </div>
                <Projects />
                <Contact />
            </main>

            <Footer className="h-96"></Footer>

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
