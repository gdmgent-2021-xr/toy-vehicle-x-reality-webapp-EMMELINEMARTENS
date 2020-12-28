import React, { Suspense,useState } from "react";
import { Canvas } from "react-three-fiber";
import { FlyControls, OrbitControls } from "@react-three/drei";
import { DefaultXRControllers, VRCanvas } from "@react-three/xr";
import { useControl } from "react-three-gui";
import {proxy, useProxy} from 'valtio';
import {HexColorPicker} from 'react-colorful';

import * as THREE from "three";


import {
  Lighting,
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
    lightstripered:"#E70016",
    yellow:"#E7A305",
    darkgrey:"#121212",
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
      <span className="colorPicker"><input id="window-color" type="color" value={state.items.windowcolor} onInput={(e)=>{state.items.windowcolor = e.target.value}}></input><br/>Window</span>
      <span className="colorPicker"><input id="sirene-color" type="color" value={state.items.lightred} onInput={(e)=>{state.items.lightred = e.target.value}}></input><br/>Sirene light</span>
      <span className="colorPicker"><input id="lightstripe-color" type="color" value={state.items.lightstripered} onInput={(e)=>{state.items.lightstripered = e.target.value}}></input><br/>Lightstripe</span>
      <span className="colorPicker"><input id="wheels-color" type="color" value={state.items.darkgrey} onInput={(e)=>{state.items.darkgrey = e.target.value}}></input><br/>Wheels</span>
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
      {true && (
        <Suspense fallback={null}>
          <Background/>
          {/* <Clouds/> */}
          {true && <Car state={state}  snap={snap} />}
        </Suspense>
      )}
    </Canvas>
    </>
  );
};
