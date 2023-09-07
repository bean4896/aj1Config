import "./App.css";
import Board from "./components/Board";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        <Board />
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
