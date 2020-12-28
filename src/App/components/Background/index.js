import React,{useRef} from 'react';
import {useGLTF} from '@react-three/drei';
import Background from './bg.gltf';

export default() =>{

	const backgroundgltf = useGLTF(Background,true);
	const backgroundRef = useRef();

	return(
		<>
		<group scale={[0.55,0.55,0.55]} position={[0,-4,5]}>
			<primitive ref={backgroundRef} object={backgroundgltf.scene}/>
		</group>
		</>

	)
}
