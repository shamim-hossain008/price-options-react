import "./App.css";
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import NavBar from "./components/NavBar/NavBar";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {
  return (
    <>
      <div>
        <NavBar />
        {/* <DaisyNav /> */}
        <PriceOptions />
      </div>
    </>
  );
}

export default App;
