import UnderConstruction from "./pages/UnderConstruction";

// components
import Header from "./components/Header";

const App = () => {
    const maintenance = false;
    if (maintenance) return <UnderConstruction />;

    return (
        <div className="relative | ">
            <Header />
            <main></main>
        </div>
    );
};

export default App;
