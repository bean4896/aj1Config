// react three fiber documentation: https://github.com/pmndrs/drei#accumulativeshadows
// https://codesandbox.io/s/environment-blur-and-transitions-forked-53lp2d?file=/src/App.js BasicSephere
// https://codesandbox.io/s/stage-presets-forked-cg9vqm?file=/src/App.js Robot
// https://codesandbox.io/s/qxjoj?file=/src/App.js  Shoe

import { Canvas } from "@react-three/fiber";
import {
  Stage,
  PresentationControls,
  Environment,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import Air from "../../Air";

const Env = () => {
  return <Environment preset='city' />
};

const Board = () => {

  return (
    <>
      <Canvas shadows dpr={[1, 1.5]} camera={{ position: [4, -1, 8], fov: 35 }}>
        {/* <PresentationControls
        speed={1.5}
        global
        zoom={0.7}
        polar={[-0.1, Math.PI / 4]}
      > */}
        <Stage
          intensity={0.5}
          preset="rembrandt"
          shadows={{ type: 'accumulative', color: '#f0f0f1', colorBlend: 2, opacity: 1 }}
          adjustCamera={1}
          environment={null}
        >

          {/* mesh */}
          <mesh castShadow receiveShadow>
            <Air />
          </mesh>

          {/* lighting */}
        </Stage>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} makeDefault />
        {/* </PresentationControls> */}
      </Canvas>
    </>
  );
};

export default Board;
