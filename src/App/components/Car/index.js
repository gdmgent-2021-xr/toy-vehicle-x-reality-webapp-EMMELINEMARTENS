import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { animated, useSpring } from "react-spring/three";

import Car from "./toy.glb";



export default () => {
  const [clockwise, setClockwise] = useState(false);

  const cargltf = useGLTF(Car, true);
  const carRef = useRef();


  return (
    <>
    <group>
      <primitive ref={carRef} object={cargltf.scene}/>
    </group>

    </>
  );
};