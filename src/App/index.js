import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { FlyControls, OrbitControls } from "@react-three/drei";
import { DefaultXRControllers, VRCanvas } from "@react-three/xr";
import { useControl } from "react-three-gui";

import * as THREE from "three";


import {
  GlTransmissionFormat,
  Lighting,
  Suzanne,
  Pano,
  Tripod,
  Car,
} from "App/components";
import "./styles.css";


export default () => {

 const showAxesHelper = useControl("Axes Helper", {
    group: "Helpers",
    type: "boolean",
    value: true,
  });
  const showGridHelper = useControl("Grid Helper", {
    group: "Helpers",
    type: "boolean",
    value: true,
  });

  return (
    <Canvas>
      <group>
      {showAxesHelper && <axesHelper />}
        {showGridHelper && <gridHelper args={[10, 10, 0xffffff, 0x333333]} />}
      
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      <FlyControls dragToLook={true} />
      {false && <DefaultXRControllers />}
      </group>

      {true && <Lighting />}
      {false && <Tripod />}
      {true && (
        <Suspense fallback={null}>
          {/* <Suzanne /> */}
          {true && <Car />}
          {/* <GlTransmissionFormat /> */}
        </Suspense>
      )}
    </Canvas>
  );
};
