import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { animated, useSpring } from "react-spring/three";
import{proxy, useProxy} from "valtio";

import Car from './toy.glb';






export default ({props, state, snap}) => {
//     const state = proxy({
//   current: null,
//   items: {
//     bodycolor:"#0C0C0C",
//     candylabcolor:"#E7E7E7",
//     lightstripered:"#E70016",
//     yellow:"#E7A305",
//     // darkgrey:"#ffffff",
//     lightred:"#E72345",
//     windowcolor:"#E7E7E7",
//     white:"#ffffff",
//   },
// });

const [hovered, setHover] = useState(null);

  // const cargltf = useGLTF(Car, true);
  const carRef = useRef()
  const { nodes, materials } = useGLTF(Car, true)

  // cargltf.scene.children[1].color.set("red");

  console.log(nodes);
  console.log(materials);

  // useState
  // const [hovered, setHover] = useState(null);
// const snap = useProxy(state);



  return (
    <>
<group ref={carRef} {...props} dispose={null}
onPointerOver={(e)=> (setHover(e.object.material.name))}
onPointerOut={(e) => setHover(null)}
>
    <primitive ref={carRef} object={nodes.Scene} />

 <mesh
        material={materials.windowcolor}
        geometry={nodes.window.geometry}
        position={[-0.05, 3.87, 0.47]}
        scale={[2.01, 1.21, 2.59]}
        material-color={snap.items.windowcolor}
      />

      <mesh
        material={materials.lightred}
        geometry={nodes.sirene.geometry}
        position={[-0.86, 5.24, 0.11]}
        scale={[0.73, -0.86, 0.65]}
        material-color={snap.items.lightred}
      />
      <group position={[-0.01, 1.79, 0.05]} scale={[7.62, 0.83, 2.91]}>
        <mesh material={materials.bodycolor} geometry={nodes.carbody_1_0.geometry}  material-color={snap.items.bodycolor}/>
        <mesh material={materials.lightstripered} geometry={nodes.carbody_2_1.geometry} material-color={snap.items.lightstripered} />
      </group>
      {/* <mesh
        material={materials.white}
        geometry={nodes.plakkaten.geometry}
        position={[-0.01, 1.83, 2.99]}
        rotation={[-3.13, 0, 0]}
        scale={[3.65, 0.72, 0.03]}
      /> */}
      <mesh
        material={materials.candylabcolor}
        geometry={nodes.candylab.geometry}
        position={[-5.4, 1.59, 3]}
        rotation={[-1.61, -0.25, 3.13]}
        scale={[0.48, 0.7, 0.48]}
        material-color={snap.items.candylabcolor}
      />
      <mesh
        material={materials.candylabcolor}
        geometry={nodes.candylab001.geometry}
        position={[-5.7, 1.59, -2.89]}
        rotation={[-1.52, 0.25, -0.05]}
        scale={[0.48, 0.7, 0.48]}
        material-color={snap.items.candylabcolor}
      />
      <mesh
        material={materials.candylabcolor}
        geometry={nodes.candylab002.geometry}
        position={[2.51, 1.6, -3.07]}
        rotation={[-1.52, 0.25, -0.05]}
        scale={[0.48, 0.7, 0.48]}
        material-color={snap.items.candylabcolor}
      />
      <mesh
        material={materials.candylabcolor}
        geometry={nodes.candylab003.geometry}
        position={[2.72, 1.66, 3.17]}
        rotation={[-1.61, -0.25, 3.13]}
        scale={[0.48, 0.7, 0.48]}
        material-color={snap.items.candylabcolor}
      />
      <mesh
        material={materials.candylabcolor}
        geometry={nodes.candylab004.geometry}
        position={[-5.62, 0.8, 3.26]}
        rotation={[1.3, 0.22, 0.05]}
        scale={[0.48, 0.7, 0.48]}
        material-color={snap.items.candylabcolor}
      />
      <mesh
        material={materials.candylabcolor}
        geometry={nodes.candylab005.geometry}
        position={[-5.47, 0.8, -3.14]}
        rotation={[1.85, -0.22, -3.06]}
        scale={[0.48, 0.7, 0.48]}
        material-color={snap.items.candylabcolor}
      />
      <mesh
        material={materials.candylabcolor}
        geometry={nodes.candylab006.geometry}
        position={[2.74, 0.81, -3.33]}
        rotation={[1.85, -0.22, -3.06]}
        scale={[0.48, 0.7, 0.48]}
        material-color={snap.items.candylabcolor}
      />
      <mesh
        material={materials.candylabcolor}
        geometry={nodes.candylab007.geometry}
        position={[2.5, 0.87, 3.43]}
        rotation={[1.3, 0.22, 0.05]}
        scale={[0.48, 0.7, 0.48]}
        material-color={snap.items.candylabcolor}
      />
     
      <mesh
        material={materials.yellow}
        geometry={nodes.shield.geometry}
        position={[0.22, 2.72, 2.91]}
        scale={[0.5, 0.5, 0.05]}
        material-color={snap.items.yellow}
      />
      {/* <mesh
        material={materials.darkgrey}
        geometry={nodes.wheels.geometry}
        position={[2.67, 1.2, 2.97]}
        rotation={[1.55, 0.43, -3.14]}
        scale={[0.79, 0.18, 0.79]}>
        <mesh material={materials.darkgrey} geometry={nodes.wheel.geometry} position={[9.39, 0.9, -4.26]} />
      </mesh> */}
    
    </group>
    </>
  )
};