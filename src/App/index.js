import React, { Suspense,useState } from "react";
import { Canvas } from "react-three-fiber";
import { FlyControls, OrbitControls } from "@react-three/drei";
import { DefaultXRControllers, VRCanvas } from "@react-three/xr";
import { useControl } from "react-three-gui";
import {proxy, useProxy} from 'valtio';
import {HexColorPicker} from 'react-colorful';

import * as THREE from "three";


import {
  GlTransmissionFormat,
  Lighting,
  Suzanne,
  Pano,
  Tripod,
  Car,
  Clouds,
  Background,
} from "App/components";
import "./styles.css";

  const state = proxy({
  current: null,
  items: {
    bodycolor:"#0C0C0C",
    candylabcolor:"#E7E7E7",
    lightstripered:"#E70016",
    yellow:"#E7A305",
    // darkgrey:"#ffffff",
    lightred:"#E72345",
    windowcolor:"#E7E7E7",
    white:"#ffffff",
  },
});
function Picker (snap){

 
  console.log(snap.items)
  return(
    <div className="main-color-container">
			<span className="colorPicker"><input id="body-color" type="color" value={state.items.bodycolor} onInput={(e)=>{state.items.bodycolor = e.target.value}}></input><br/>Body</span>
			<span className="colorPicker"><input id="shield-color" type="color" value={state.items.yellow} onInput={(e)=>{state.items.yellow = e.target.value}}></input><br/>Shield</span>
			<span className="colorPicker"><input id="text-color" type="color" value={state.items.candylabcolor} onInput={(e)=>{state.items.candylabcolor = e.target.value}}></input><br/>Text</span>
      <span className="colorPicker"><input id="window-color" type="color" value={state.items.windowcolor} onInput={(e)=>{state.items.windowcolor = e.target.value}}></input><br/>Window</span>
      <span className="colorPicker"><input id="sirene-color" type="color" value={state.items.lightred} onInput={(e)=>{state.items.lightred = e.target.value}}></input><br/>Sirene light</span>
      <span className="colorPicker"><input id="lightstripe-color" type="color" value={state.items.lightstripered} onInput={(e)=>{state.items.lightstripered = e.target.value}}></input><br/>Lightstripe</span>
    </div>
  )
}


export default () => {
   const snap = useProxy(state);

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
    <>
    <Picker snap={snap}/>
    
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
          <Background/>
          {/* <Clouds/> */}
          {/* <Suzanne /> */}
          {true && <Car state={state}  snap={snap} />}
          {/* <GlTransmissionFormat /> */}
        </Suspense>
      )}
    </Canvas>
    </>
  );
};
