import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import {proxy, useProxy} from 'valtio';
import {
  Lighting,
  Car,
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
    <h2>We will caught some thiefs will you help me?</h2>
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
  state.position.z = -5.5;
};


function Showscore(){
  if(state.score === 15){
   
    return( <div className="TheEnd" >
                  <h2>Congratiolations you just caught 15 thiefs, WELL DONE!</h2>
                  <p>Are you in the mood to catch more Thiefs?</p> 
                  <p>Just click at the startbutton again to play again</p>
                  <button id="The_end" onClick={StartAgain}>Catch more thiefs</button>
            </div>
    );
  }
 return(
 <span className="score" id="score">THIEFS CAUGHTt: {state.score}</span>
 )
}


export default () => {
   const snap = useProxy(state);

  return (
    <>
    <Picker/>
     <Intro/>
     <Showscore/>
    <Canvas>
      {true && <Lighting />}
      {true && (
        <Suspense fallback={null}>
          <Background/>
          {true && <Car state={state}  snap={snap} />}
        </Suspense>
      )}
     
    </Canvas>
    </>
  );
};
