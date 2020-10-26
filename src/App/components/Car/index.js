import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { animated, useSpring } from "react-spring/three";

import car from "./Martens_Emmeline_toy.glb";



export default () => {
  const [clockwise, setClockwise] = useState(false);

  const gltf = useGLTF(car, true);
  const {nodes, materials} = useGLTF(car,true)
  const carRef = useRef();
  // const speed = 0.025;
  const [toggle, setToggle] = useState(true);

  console.log(gltf);
    console.log("nodes:", nodes);
  console.log("materials:", materials);

  useFrame(() => {
    // logoRef.current.rotation.x += speed * (clockwise ? 1 : -1);
    // carRef.current.rotation.y += speed * (clockwise ? 1 : -1);
    // logoRef.current.rotation.z += speed * (clockwise ? 1 : -1);
    carRef.current.rotation.y = THREE.MathUtils.degToRad(-2)
    carRef.current.rotation.x = THREE.MathUtils.degToRad(90)
  });
  const { position } = useSpring({
    position: toggle ? [0, 0, 0] : getPosition(),
  });
  console.log(position);

  function getPosition() {
    return [(Math.random() * 2 - 1) * 4, (Math.random() * 2 - 1) * 4, 0];
  }


  return (
    <animated.primitive
      object={gltf.scene}
	  onClick={() => setClockwise(!clockwise)}
      position={[2.8,-12.5, -28]}
      ref={carRef}
      materials={nodes.materials}
    />
  );
};