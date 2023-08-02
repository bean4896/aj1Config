/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Air.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Air = (props) => {
  const { nodes, materials } = useGLTF('../models/Air.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.008, 0.769, 0.665]} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh castShadow receiveShadow geometry={nodes.nikelogo.geometry} material={materials['mat_nikelogo.001']} position={[67.236, -66.482, 76.905]} />
        <mesh castShadow receiveShadow  geometry={nodes.top.geometry} material={materials['mat_top.001']} position={[-1.935, 10.163, -138.758]} />
        <mesh castShadow receiveShadow geometry={nodes.xieBang.geometry} material={materials['mat_xieBang.001']} position={[0.78, 45.375, -26.845]} />
        <mesh castShadow receiveShadow geometry={nodes.xiedai.geometry} material={materials['mat_xiedai.001']} position={[-5.082, 88.095, -78.736]} />
        <group position={[0.78, 45.375, -26.842]}>
          <mesh castShadow receiveShadow geometry={nodes.Mesh045.geometry} material={materials['mat_xiedi1.001']} />
          <mesh castShadow receiveShadow geometry={nodes.Mesh045_1.geometry} material={materials['mat_xiedi2.001']} />
        </group>
        <mesh castShadow receiveShadow geometry={nodes.xiemian.geometry} material={materials['mat_xiemian.001']} position={[48.369, 30.527, -50.576]} />
        <mesh castShadow receiveShadow geometry={nodes.xieShe.geometry} material={materials['mat_xieshe.001']} position={[0.78, 45.375, -40.846]} />
        <mesh castShadow receiveShadow geometry={nodes.xieTi.geometry} material={materials['mat_xieTi.001']} position={[-0.569, -66.464, 76.905]} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.line.geometry} material={materials.Lines} position={[-0.002, 0.731, 0.771]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('../models/Air.gltf')
export default Air;