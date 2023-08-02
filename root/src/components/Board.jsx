// react three fiber documentation: https://github.com/pmndrs/drei#accumulativeshadows
// https://codesandbox.io/s/environment-blur-and-transitions-forked-53lp2d?file=/src/App.js
// https://codesandbox.io/s/stage-presets-forked-cg9vqm?file=/src/App.js
// https://codesandbox.io/s/qxjoj?file=/src/App.js

import { useState, useTransition } from 'react'
import { Canvas } from "@react-three/fiber";
import {
  Stage,
  PresentationControls,
  MeshReflectorMaterial,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  ContactShadows,
  Backdrop
} from "@react-three/drei";
import Air from "../../Air";

const Env = () => {
  const [preset, setPreset] = useState('sunset');
  return <Environment preset={preset} background={false} />
};

const Board = () => {

  return (
    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [4, -1, 8], fov: 45 }}>
      <PresentationControls
        speed={1.5}
        global
        zoom={0.7}
        polar={[-0.1, Math.PI / 4]}
      >

        <Stage
          intensity={0.5}
          preset="rembrandt"
          shadows={{ type: 'accumulative', color: 'skyblue', colorBlend: 2, opacity: 1 }}
          adjustCamera={1}
          environment="city">

          <Env />

          <mesh castShadow receiveShadow>
            <Air />
          </mesh>
          <ContactShadows opacity={0.5} scale={1} blur={500} far={1} color="#000000" />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
};

export default Board;
