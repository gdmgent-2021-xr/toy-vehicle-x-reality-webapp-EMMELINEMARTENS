import React, {useRef} from 'react';
import Clouds from './clouds.gltf';
import {useGLTF} from '@react-three/drei';

export default () => {

	const Cloudgltf = useGLTF(Clouds, true);
	const cloudRef = useRef();
	return(
		<group>
			<primitive ref={cloudRef} object={Cloudgltf.scene}/>
		</group>
	)
}