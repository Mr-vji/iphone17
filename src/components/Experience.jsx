import { CameraControls, Environment, Gltf } from "@react-three/drei";
import { button, useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { sections } from "./UI";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const cameraPositions = {
   intro: [
      -0.006423123695522899, -0.23012733835879035, -0.36041227456798125, -0.006012619880157052,
      0.11738473412246442, -0.18072727002720176,
   ],
   titanium: [
      0.3191993409641744, -0.9987150417534938, -0.5660624506641209, -0.026280583294649648,
      0.031754690089931314, 0.06151109077556482,
   ],
   camera: [
      0.3551244257861175, 0.07731678487448321, -0.48397345880861653, 0.014509508072699743,
      0.3210104502764973, 0.011717080956443521,
   ],
   "action-button": [
      -0.88612937193474, -0.4964915367233699, 0.003459464080557469, -0.015160554557400105,
      0.16977404132378549, 0.0015889919991764756,
   ],
};

const cameraPositionsSmallScreen = {
   intro: [
      -0.013288528830551784, -1.1592257652211109, -0.9112447025263922, -0.011415964034274084,
      0.0573363240946399, -0.0915889494555973,
   ],
   titanium: [
      0.4608828250616353, -1.4213171428098006, -0.8234342967107898, -0.026280583294649648,
      0.031754690089931314, 0.06151109077556482,
   ],
   camera: [
      0.7492248764248108, -0.3235308784484048, -1.0543601162121445, -0.007665312138657565,
      0.21798781250054186, 0.04712806472410737,
   ],
   "action-button": [
      -1.405979244180538, -0.7795523630641518, 0.0013458664979177314, 0.03224126395838157,
      0.09149524481378002, -0.0017428219300376876,
   ],
};

const SMALL_SCREEN_THRESHOLD = 900;

export const Experience = ({ section }) => {
   const controls = useRef();
   const box = useRef();
   const sphere = useRef();

   const [introFinished, setIntroFinished] = useState(false);

   // ✅ track if small screen or not
   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= SMALL_SCREEN_THRESHOLD);

   // ✅ update on resize
   useEffect(() => {
      const handleResize = () => {
         setIsSmallScreen(window.innerWidth <= SMALL_SCREEN_THRESHOLD);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const intro = async () => {
      controls.current.setLookAt([0, 0, 0], 0, 0, 0, true);
      // controls.current.smoothTime = 0.5; // default is 0.25, higher = slower/smoother

      // await controls.current.dolly(3, true);
      // await controls.current.rotate(degToRad(45), degToRad(25), true);

      setIntroFinished(true);
      playTransition();
   };

   const playTransition = () => {
      if (isSmallScreen) {
         controls.current.setLookAt(...cameraPositionsSmallScreen[sections[section]], true);
      } else {
         controls.current.setLookAt(...cameraPositions[sections[section]], true);
      }
   };

   useControls("Helper", {
      getLookAt: button(() => {
         const position = controls.current.getPosition();
         const target = controls.current.getTarget();
         console.log([...position, ...target]);
      }),
      toJson: button(() => console.log(controls.current.toJSON())),
   });

   useEffect(() => {
      intro();
   }, []);

   useEffect(() => {
      if (!introFinished) {
         return;
      }
      playTransition();
   }, [section, isSmallScreen]); // ✅ also depend on isSmallScreen

   return (
      <>
         <CameraControls
            ref={controls}
            // disable all mouse buttons
            mouseButtons={{
               left: 0,
               middle: 0,
               right: 0,
               wheel: 0,
            }}
            // disable all touch gestures
            touches={{
               one: 0,
               two: 0,
               three: 0,
            }}
         />
         <mesh ref={box} visible={false}>
            <boxGeometry args={[0.5, 0.8, 0.2]} />
            <meshBasicMaterial color="mediumpurple" wireframe />
         </mesh>
         <mesh ref={sphere} visible={false}>
            <sphereGeometry args={[0.36, 64]} />
            <meshBasicMaterial color="hotpink" wireframe />
         </mesh>
         <Gltf
            position={[0, 0, 0]}
            src="models/iphone_17_own.glb"
            // "Apple iPhone 15 Pro Max Black" (https://skfb.ly/oLpPT) by polyman is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
         />
         <group rotation-y={Math.PI}>
            <Environment preset="warehouse" blur />
         </group>
      </>
   );
};
