import React,{useRef} from 'react';
import {useGLTF} from '@react-three/drei';
import Background from './bg.gltf';
import Buildings from './buildings.gltf';
import * as THREE from 'three';

export default() =>{

	const backgroundgltf = useGLTF(Background,true);
	const buildingsgltf = useGLTF(Buildings,true);
	const backgroundRef = useRef();
	const buildingRef = useRef();

	return(
		<>
		<group scale={[0.55,0.55,0.55]} position={[0,-4,5]}>
			<primitive ref={backgroundRef} object={backgroundgltf.scene}  />
			
		</group>
		<primitive ref={buildingRef} object={buildingsgltf.scene}  scale={[1.25,1.25,1.25]}  position={[1.5,-3,-12]} rotation={[THREE.MathUtils.degToRad(180), THREE.MathUtils.degToRad(-90), THREE.MathUtils.degToRad(180)]}/>
		</>

	)
}
