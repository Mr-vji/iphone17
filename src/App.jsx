import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { UI, sections } from "./components/UI";
import { Loader } from "@react-three/drei";

function App() {
   const [section, setSection] = useState(0);

   // Scroll-based navigation
   useEffect(() => {
      let scrollTimeout;
      let startY = 0;
      let accumulatedDelta = 0; // accumulate scroll amount
      const SCROLL_THRESHOLD = 100; // how much scroll to move one section

      const handleScroll = (e) => {
         e.preventDefault();
         if (scrollTimeout) return;

         accumulatedDelta += e.deltaY;

         if (Math.abs(accumulatedDelta) >= SCROLL_THRESHOLD) {
            if (accumulatedDelta > 0) {
               // scroll down → next section
               setSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
            } else {
               // scroll up → previous section
               setSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
            }
            accumulatedDelta = 0; // reset after moving section

            scrollTimeout = setTimeout(() => {
               scrollTimeout = null;
            }, 1000); // friction time
         }
      };

      const handleTouchStart = (e) => {
         startY = e.touches[0].clientY;
      };

      const handleTouchEnd = (e) => {
         if (scrollTimeout) return;

         const endY = e.changedTouches[0].clientY;
         const delta = startY - endY;

         if (Math.abs(delta) > 50) {
            if (delta > 0) {
               // swipe up → next section
               setSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
            } else {
               // swipe down → previous section
               setSection((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
            }

            scrollTimeout = setTimeout(() => {
               scrollTimeout = null;
            }, 1000);
         }
      };

      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, { passive: false });
      window.addEventListener("touchend", handleTouchEnd, { passive: false });

      return () => {
         window.removeEventListener("wheel", handleScroll);
         window.removeEventListener("touchstart", handleTouchStart);
         window.removeEventListener("touchend", handleTouchEnd);
      };
   }, []);

   return (
      <>
         <Leva hidden />
         <Loader />
         <Canvas
            camera={{
               position: [0, 0, 0],
               fov: 30,
            }}
         >
            <color attach="background" args={["black"]} />
            <Experience section={section} />
         </Canvas>
         <UI section={section} onSectionChange={setSection} />
      </>
   );
}

export default App;
