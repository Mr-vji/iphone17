import { OrbitControls } from "@react-three/drei";
import React from "react";
import { MeshNormalMaterial } from "three";

function Vijay() {
   return (
      <>
         <OrbitControls enableZoom={false} />
         <mesh>
            <boxGeometry />
            <meshNormalMaterial />
         </mesh>
      </>
   );
}

export default Vijay;
