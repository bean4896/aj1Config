import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

const Shoe = (props) => {
  const { nodes, materials } = useGLTF("../models/Airjordan.gltf");

  const XieshenTextureProps = useTexture({
    map: "../textures/xieshen/xieshen_red.jpg",
    roughnessMap: "../textures/xieshen/xieshen_roughness.jpeg",
  });

  const XiemianTextureProps = useTexture({
    map: "../textures/xiemian/xiemian_red.jpg",
  });

  XiemianTextureProps.map.repeat.set(0.1 ,0.1);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.xieTou.geometry}
        material={materials["Material #92.001"]}
        position={[-0.015, 0.076, -0.002]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.287}
      />
      <mesh
        geometry={nodes.xieShen.geometry}
        material={materials["Material.002"]}
        position={[-0.014, 0.067, -0.002]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.287}
      />
      <mesh
        geometry={nodes.xieMian.geometry}
        position={[0, 0.073, -0.001]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.287}
        // material={materials["Material #93.001"]}
      >
        <meshStandardMaterial {...XiemianTextureProps} />
        </mesh>
      <mesh
        geometry={nodes.xieDi.geometry}
        material={materials["baked_Part1_mtl.001"]}
        position={[0.014, 0.015, -0.004]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.287}
      />
    </group>
  );
};


useGLTF.preload("../models/Airjordan.gltf");
export default Shoe;
