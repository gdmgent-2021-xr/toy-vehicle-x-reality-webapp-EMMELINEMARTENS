import React, { useRef } from "react";

export default () => {
  const light = useRef();

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight intensity={2} position={[10,10,10]} ref={light} />
      <pointLight intensity={1.12} position={[0, 0, 0]}  />
    </>
  );
};
