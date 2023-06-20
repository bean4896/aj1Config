import { Canvas } from "@react-three/fiber";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">

      <Canvas>
      <color attach="background" args={['#d4d4d4']} />
      <fog attach="fog" args={['#101010', 10, 20]} />
        <Board />
      </Canvas>
  
      <footer>Built by keyi</footer>
    </div>
  );
}

export default App;
