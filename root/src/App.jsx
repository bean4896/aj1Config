import "./App.css";
// import Board from "./components/Board";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./context/Customization";
import LoadingSpinner from './components/LoadingSpinner';
import React, { Suspense } from 'react';
const Board = React.lazy(() => import('./components/Board'));

function App() {

  return (
    <CustomizationProvider>
      <div className="App">

        <Suspense fallback={<LoadingSpinner />}>
          {/* {isModelLoading ? (
            <LoadingSpinner />
          ) : ( */}
            <Board /> 
          {/* )} */}
        </Suspense>


        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;
