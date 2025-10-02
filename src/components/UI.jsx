import { useEffect, useState } from "react";

export const sections = ["intro", "titanium", "camera", "action-button"];

export const UI = ({ section, onSectionChange }) => {
   const [isInit, setIsInit] = useState(false);

   useEffect(() => {
      setTimeout(() => setIsInit(true), 1000);
   }, []);

   return (
      <main className="fixed inset-0 flex flex-col p-2 pointer-events-none sm:p-4">
         <div className="flex items-center justify-between flex-1 text-white">
            {/* LEFT BUTTON */}
            {/* <button
               className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full cursor-pointer pointer-events-auto hover:scale-105 hover:opacity-90 bg-white/20 backdrop-blur-md"
               onClick={() => onSectionChange(section === 0 ? sections.length - 1 : section - 1)}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="w-5 h-5"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
               </svg>
            </button> */}

            {/* MAIN SECTIONS */}
            <div className="relative flex-1 h-full">
               {/* INTRO SECTION */}
               <section
                  className={`absolute inset-4 flex flex-col justify-center text-center transition-opacity duration-800 ${
                     sections[section] === "intro" && isInit ? "" : "opacity-0"
                  }`}
               >
                  <img
                     src="./images/iphoneText.png"
                     alt="Description of the image"
                     className="
    object-contain mx-auto
    transform scale-[1.8]    /* 3x bigger on mobile (default) */
    sm:scale-100           /* back to normal from small screens and up */
    mt-[-400px] sm:mt-[-200px] md:mt-[-390px]
  "
                  />
               </section>

               {/* TITANIUM SECTION */}
               <section
                  className={`absolute inset-0 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 transition-opacity duration-1000 ${
                     sections[section] === "titanium" ? "" : "opacity-0"
                  }`}
               >
                  <div className="hidden md:flex relative -left-[180px] flex-col items-center pointer-events-none mb-6 md:mb-0">
                     <div
                        className="relative"
                        style={{ transform: "rotate(-90deg)", transformOrigin: "center center" }}
                     >
                        <h1
                           className="text-5xl sm:text-7xl md:text-[90px] font-black tracking-tight text-transparent bg-clip-text"
                           style={{
                              lineHeight: 1,
                              margin: 0,
                              letterSpacing: "-0.05em",
                              backgroundImage: "linear-gradient(90deg, #FF7A18, #FF4E00, #FF9C33)",
                           }}
                        >
                           iPhone 17
                        </h1>
                        <h1
                           className="text-7xl sm:text-9xl md:text-[190px] font-black tracking-tight text-transparent bg-clip-text absolute top-[60px] left-0"
                           style={{
                              lineHeight: 1,
                              margin: 0,
                              backgroundImage: "linear-gradient(90deg, #FF7A18, #FF4E00, #FF9C33)",
                           }}
                        >
                           MAX
                        </h1>
                     </div>
                  </div>
                  <div className="flex flex-col justify-end w-full h-full pb-6 text-left pointer-events-none sm:max-w-sm md:max-w-xs md:justify-center md:pb-0">
                     <div className="flex flex-col items-start gap-3 p-4 pointer-events-none bg-white/10 backdrop-blur-lg rounded-2xl">
                        <h2
                           className="mb-2 text-xl font-bold text-white sm:text-2xl"
                           style={{
                              backgroundImage: "linear-gradient(90deg, #FF7A18, #FF4E00, #FF9C33)",
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                           }}
                        >
                           Titanium Body
                        </h2>
                        <p className="text-sm leading-relaxed text-white sm:text-base">
                           The new iPhone 17 features a titanium frame, ultra-fast A17 chip, and
                           enhanced battery life. Sleek, durable, and powerful—designed for those
                           who demand the best.
                        </p>
                     </div>
                  </div>
               </section>

               {/* CAMERA SECTION */}
               <section
                  className={`absolute inset-0 flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 transition-opacity duration-1000 ${
                     sections[section] === "camera" ? "" : "opacity-0"
                  }`}
               >
                  <div className="flex flex-col justify-end w-full h-full pb-6 text-left pointer-events-none sm:max-w-sm md:max-w-xs md:justify-center md:pb-0">
                     <div className="flex flex-col items-start gap-3 p-4 pointer-events-none bg-white/10 backdrop-blur-lg rounded-2xl">
                        <h2
                           className="mb-2 text-xl font-bold text-transparent sm:text-2xl"
                           style={{
                              backgroundImage: "linear-gradient(90deg, #FF7A18, #FF4E00, #FF9C33)",
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                           }}
                        >
                           Professional Camera
                        </h2>
                        <p className="text-sm leading-relaxed text-white sm:text-base">
                           Capture your best life moments with the iPhone 17’s 48MP main camera.
                           Stunning detail, vibrant colors, and advanced low-light performance
                           ensure every shot is perfect.
                        </p>
                     </div>
                  </div>
                  <div className="relative right-0 flex-col items-center hidden pointer-events-none md:flex">
                     <div
                        className="relative"
                        style={{ transform: "rotate(-90deg)", transformOrigin: "center center" }}
                     >
                        <h1
                           className="text-5xl sm:text-7xl md:text-[90px] font-black tracking-tight text-transparent bg-clip-text"
                           style={{
                              lineHeight: 1,
                              margin: 0,
                              letterSpacing: "-0.05em",
                              backgroundImage: "linear-gradient(90deg, #FF7A18, #FF4E00, #FF9C33)",
                           }}
                        >
                           iPhone 17
                        </h1>
                        <h1
                           className="text-7xl sm:text-9xl md:text-[190px] font-black tracking-tight text-transparent bg-clip-text absolute top-[60px] left-0"
                           style={{
                              lineHeight: 1,
                              margin: 0,
                              backgroundImage: "linear-gradient(90deg, #FF7A18, #FF4E00, #FF9C33)",
                           }}
                        >
                           PRO
                        </h1>
                     </div>
                  </div>
               </section>

               {/* ACTION BUTTON SECTION */}
               <section
                  className={`absolute inset-0 flex flex-col sm:flex-row justify-end sm:justify-between items-center gap-4 px-4 sm:px-6 md:px-8 transition-opacity duration-1000 ${
                     sections[section] === "action-button" ? "" : "opacity-0"
                  }`}
               >
                  <div className="flex flex-col items-start w-full gap-3 p-4 pointer-events-none sm:w-72 md:w-80 bg-white/10 backdrop-blur-lg rounded-2xl">
                     <h2
                        className="mb-1 text-xl font-bold text-transparent sm:text-2xl"
                        style={{
                           backgroundImage: "linear-gradient(90deg, #FF7A18, #FF4E00, #FF9C33)",
                           WebkitBackgroundClip: "text",
                           color: "transparent",
                        }}
                     >
                        Action Button
                     </h2>
                     <p className="text-sm leading-relaxed text-stone-200">
                        The all-new Action button is a fast track to your favorite feature. Set your
                        preferred action and press to launch instantly.
                     </p>
                  </div>
                  <div className="flex-col items-start hidden w-full gap-3 p-4 pointer-events-none md:flex sm:w-72 md:w-80 bg-white/10 backdrop-blur-lg rounded-2xl">
                     <h2
                        className="mb-1 text-xl font-bold text-transparent sm:text-2xl"
                        style={{
                           backgroundImage: "linear-gradient(90deg, #FF7A18, #FF4E00, #FF9C33)",
                           WebkitBackgroundClip: "text",
                           color: "transparent",
                        }}
                     >
                        Professional Camera
                     </h2>
                     <p className="text-sm leading-relaxed text-stone-200">
                        Capture your best life moments with the iPhone 17’s 48MP main camera.
                        Stunning detail, vibrant colors, and advanced low-light performance.
                     </p>
                  </div>
               </section>
            </div>

            {/* RIGHT BUTTON */}
            {/* <button
               className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full cursor-pointer pointer-events-auto hover:scale-105 hover:opacity-90 bg-white/20 backdrop-blur-md"
               onClick={() => onSectionChange(section === sections.length - 1 ? 0 : section + 1)}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="white"
                  className="w-5 h-5"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
               </svg>
            </button> */}
         </div>

         {/* DOTS NAVIGATION */}
         <div className="flex items-center justify-center gap-2 mt-2">
            {sections.map((sectionItem, idx) => (
               <div
                  key={sectionItem}
                  className={`rounded-full w-3 h-3 flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition-opacity duration-200 pointer-events-auto ${
                     section === idx
                        ? "bg-stone-100 backdrop-blur-sm"
                        : "bg-white/30 backdrop-blur-sm"
                  }`}
                  onClick={() => onSectionChange(idx)}
               ></div>
            ))}
         </div>
      </main>
   );
};
