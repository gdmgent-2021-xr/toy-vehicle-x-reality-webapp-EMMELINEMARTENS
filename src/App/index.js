import React, { Suspense,useState } from "react";
import { Canvas } from "react-three-fiber";
import { FlyControls, OrbitControls } from "@react-three/drei";
import { DefaultXRControllers, VRCanvas } from "@react-three/xr";
import { useControl } from "react-three-gui";
import {proxy, useProxy} from 'valtio';


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
  position:{
    x: 0,
    y: 0,
    z: -5.5
  },
  score: 0,
});
function Picker (){

 
  return(
    <div className="main-color-container">
			<span className="colorPicker"><input id="body-color" type="color" value={state.items.bodycolor} onChange={(e)=>{state.items.bodycolor = e.target.value}}></input><br/>Body</span>
			<span className="colorPicker"><input id="shield-color" type="color" value={state.items.yellow} onChange={(e)=>{state.items.yellow = e.target.value}}></input><br/>Shield</span>
      <span className="colorPicker"><input id="window-color" type="color" value={state.items.windowcolor} onChange={(e)=>{state.items.windowcolor = e.target.value}}></input><br/>Window</span>
      <span className="colorPicker"><input id="sirene-color" type="color" value={state.items.lightred} onChange={(e)=>{state.items.lightred = e.target.value}}></input><br/>Sirene light</span>
      <span className="colorPicker"><input id="lightstripe-color" type="color" value={state.items.lightstripered} onChange={(e)=>{state.items.lightstripered = e.target.value}}></input><br/>Lightstripe</span>
      <span className="colorPicker"><input id="wheels-color" type="color" value={state.items.darkgrey} onChange={(e)=>{state.items.darkgrey = e.target.value}}></input><br/>Wheels</span>
    </div>
  )
}

function Intro(){
  return (
   <div className="intro" id="intro">
    <h2>We will catch some thiefs will you help me?</h2>
    <p>Use then your keyboard arrows to catch 15 thiefs</p>
    <p>You can also pimp your police car maybe some camouflage can help so they don't see you at all.</p>
    <p>For starting just use your keyboard arrows</p>
  </div>
  )
}

 function StartAgain(){
 state. score = 0;
  state.position.x = 0;
  state.position.y = 0;
  console.log(state.position.x);
};


function Showscore(){
  if(state.score == 15){
   
    return( <div className="TheEnd" >
                  <h2>Congratiolations you just catch 15 thiefs, WELL DONE!</h2>
                  <p>Are you in the mood to catch more Thiefs?</p> 
                  <p>Just click at the startbutton again to play again</p>
                  <button id="The_end" onClick={StartAgain}>Catch more thiefs</button>
            </div>
    );
  }
 return(
 <span className="score" id="score">THIEFS CATCHED: {state.score}</span>
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
    <Picker/>
     <Intro/>
     <Showscore/>
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
