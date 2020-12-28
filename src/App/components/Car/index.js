import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF, PointerLockControls } from "@react-three/drei";
import * as THREE from 'three';
import { a, useSpring } from "react-spring/three";
import{proxy, useProxy} from "valtio";

// keyboardcontrols 
import {KeyboardControls} from 'App/utils';
import {useControl} from 'react-three-gui';

// import Car model
import Car from './toy.glb';

export default ({props, state, snap}) => {
  const [hovered, setHover] = useState(null);

  // const cargltf = useGLTF(Car, true);
  const carRef = useRef();
  const frontwheelsRef = useRef();
  const backwheelsRef = useRef();
  const { nodes, materials } = useGLTF(Car, true)


const Ref = (ref) => {
useFrame(()=> {
ref.current.rotation.y += 0.04;
})
}


// Keyboardcontrollers


let d;
document.addEventListener('keydown', direction);
   //which direction
function Checkinput(){
if( d === "LEFT") carRef.current.position.x -= 1;
if (d === "UP") carRef.current.position.y += 1;
if( d==="RIGHT") carRef.current.position.x += 1;
if( d==="DOWN") carRef.current.position.y -= 1;
}

function direction(event) {
	if (event.keyCode === 37){
  d = "LEFT";
Checkinput();
}else if(event.keyCode === 38){
  d = "UP";
  Checkinput();
	} else if (event.keyCode === 39){
  d = "RIGHT";
  Checkinput();
	} else if (event.keyCode === 40 ){
  d = "DOWN";
  Checkinput();
}
}









  // useState
  // const [hovered, setHover] = useState(null);
// const snap = useProxy(state);
Ref(frontwheelsRef);
Ref(backwheelsRef);


  return (
    <>
<group ref={carRef} {...props} dispose={null} 
scale={[0.4,0.4,0.4]}
position={[-9,-3.9,-5.5]}
onPointerOver={(e)=> (setHover(e.object.material.name))}
onPointerOut={(e) => setHover(null)}
onkeydown={(e)=> direction}
>
    {/* <primitive ref={carRef} object={nodes.Scene} /> */}

 <mesh
        material={materials.windowcolor}
        geometry={nodes.window.geometry}
        position={[-0.05, 3.87, 0.47]}
        scale={[2.01, 1.21, 2.59]}
        material-color={snap.items.windowcolor}
      />
      <mesh
        material={materials.lightgrey}
        geometry={nodes.sireneeiland.geometry}
        position={[-0.85, 5.16, 0.12]}
        scale={[0.78, -0.51, 0.73]}
      />

      <mesh
        material={materials.lightred}
        geometry={nodes.sirene.geometry}
        position={[-0.86, 5.24, 0.11]}
        scale={[0.73, -0.86, 0.65]}
        material-color={snap.items.lightred}
      />
      <mesh
        material={materials.white}
        geometry={nodes.plakkaten.geometry}
        position={[-0.01, 1.83, 2.99]}
        rotation={[-3.13, 0, 0]}
        scale={[3.65, 0.72, 0.03]}
      />
      <group position={[-0.01, 1.79, 0.05]} scale={[7.62, 0.83, 2.91]}>
        <mesh material={materials.bodycolor} geometry={nodes.carbody_1_0.geometry}  material-color={snap.items.bodycolor}/>
        <mesh material={materials.lightstripered} geometry={nodes.carbody_2_1.geometry} material-color={snap.items.lightstripered} />
      </group>

      
        <a.mesh
        ref={frontwheelsRef}
        material={materials.darkgrey}
        geometry={nodes.wheels.geometry}
        position={[2.67, 1.2, 2.97]}
        rotation={[1.55, 0.43, -3.14]}
        scale={[0.79, 0.18, 0.79]}
        material-color={snap.items.darkgrey}
       />
        
        <a.mesh
        ref={backwheelsRef}
        material={materials.darkgrey}
        geometry={nodes.wheel.geometry}
        position={[-5.5, 1.2, 2.8]}
        rotation={[1.55, 0.43, -3.14]}
        scale={[0.79, 0.18, 0.79]}
        material-color={snap.items.darkgrey}
       
        />

      <mesh
        material={materials.yellow}
        geometry={nodes.shield.geometry}
        position={[0.22, 2.72, 2.91]}
        scale={[0.5, 0.5, 0.05]}
        material-color={snap.items.yellow}
      />
      
        <mesh
        material={nodes.wheelplate.material}
        geometry={nodes.wheelplate.geometry}
        position={[-5.54, 1.19, 3]}
        rotation={[-1.58, 0.15, -0.03]}
        scale={[0.39, 0.02, 0.39]}
      />
      <mesh
        material={nodes.wheelplate001.material}
        geometry={nodes.wheelplate001.geometry}
        position={[2.64, 1.22, 3.15]}
        rotation={[-1.58, 0.15, -0.03]}
        scale={[0.39, 0.02, 0.39]}
      />
      <mesh
        material={materials.wheelplatecolor}
        geometry={nodes.littlewheelplate1.geometry}
        position={[-5.52, 1.19, 3.04]}
        rotation={[-1.58, 0.15, -0.03]}
        scale={[0.13, 0.01, 0.13]}
      />
      <mesh
        material={materials.wheelplatecolor}
        geometry={nodes.littlewheelplate2.geometry}
        position={[2.64, 1.25, 3.23]}
        rotation={[-1.58, 0.15, -0.03]}
        scale={[0.13, 0.01, 0.13]}
      />
      
    </group>
    </>
  )
};