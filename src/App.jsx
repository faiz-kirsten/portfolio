import UnderConstruction from "./pages/UnderConstruction";

const App = () => {
    const maintenance = true;
    if (maintenance) return <UnderConstruction />;

    return <div></div>;
};

export default App;
