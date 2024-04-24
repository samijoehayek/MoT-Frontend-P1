"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useMediaQuery } from "react-responsive";
import bg from "../../../public/images/webgl-loader.jpg";
import Image from "next/image";

const Dashboard = () => {
  // const [loadWebGL, setLoadWebGL] = useState(false);
  // const [sentenceIndex, setSentenceIndex] = useState(0);

  // const sentences = [
  //   "Explore the space and meet others",
  //   "Engage in conversations through chat",
  //   "Interact with AI powered assistants",
  //   "View informational displays",
  // ];

  // const isMobile = useMediaQuery({ query: "(max-width: 1025px)" });

  // function handleCaching(url) {
  //   console.log("Entered handleCaching with url: ", url);
  //   // Caching enabled for .data and .bundle files.
  //   // Revalidate if file is up to date before loading from cache
  //   if (
  //     url.match(/\.data/) ||
  //     url.match(/\.bundle/) ||
  //     url.match(/\.wasm/) ||
  //     url.match(/\.unityweb/)
  //   ) {
  //     console.log("URL matched data or bundle: ", url)
  //     return "must-revalidate";
  //   }

  //   // Caching enabled for .mp4 and .custom files
  //   // Load file from cache without revalidation.
  //   if (url.match(/\.mp4/) || url.match(/\.custom/)) {
  //     return "immutable";
  //   }

  //   // Disable explicit caching for all other files.
  //   // Note: the default browser cache may cache them anyway.
  //   return "no-store";
  // }

  // const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
  //   loaderUrl: isMobile
  //     ? "BuildMobile/Build/Build.loader.js"
  //     : "Build/Build/Build.loader.js",
  //   dataUrl: isMobile
  //     ? "BuildMobile/Build/Build.data.unityweb"
  //     : "Build/Build/Build.data.unityweb",
  //   frameworkUrl: isMobile
  //     ? "BuildMobile/Build/Build.framework.js.unityweb"
  //     : "Build/Build/Build.framework.js.unityweb",
  //   codeUrl: isMobile
  //     ? "BuildMobile/Build/Build.wasm.unityweb"
  //     : "Build/Build/Build.wasm.unityweb",
  //   streamingAssetsUrl: isMobile
  //     ? "BuildMobile/StreamingAssets"
  //     : "Build/StreamingAssets",
  //   cacheControl: handleCaching,
  // });

  // const styling = {
  //   backgroundImage: `url(${bg.src})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  // };

  // const sentenceStyling = {
  //   animation: "fadeInOut 4s linear infinite",
  //   fontSize: "1.5rem",
  //   fontFamily: "AlbertFontNormal",
  // };

  // const animationStyles = `@keyframes fadeInOut {
  //   0%, 100% {
  //       opacity: 0;
  //   }
  //   25%, 75% {
  //     opacity: 1;
  //   }
  // }`;

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setLoadWebGL(true);
  //   }

  //   const intervalId = setInterval(() => {
  //     setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  //   }, 4000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    // loadWebGL && (
    //   <>
    //     <style>{animationStyles}</style>
    //     <Fragment>
    //       {!isLoaded && (
    //         <div
    //           className={"w-screen h-screen flex justify-center items-center"}
    //           style={styling}
    //         >
    //           <div className="w-3/4 flex flex-col items-center mb-16">
    //             <Image
    //               src="/images/stc-logo.png"
    //               alt="STC Logo"
    //               width={240}
    //               height={80}
    //             />
    //             <h1
    //               className={`font-sans text-5xl font-bold text-white mb-16 mt-24 text-center`}
    //               style={{ fontFamily: "AlbertFont" }}
    //             >
    //               Saudi Tourism Metaverse Loading...
    //             </h1>
    //             <div className="relative w-4/5 rounded-full overflow-hidden mb-2">
    //               <div
    //                 className="h-1 bg-white"
    //                 style={{ width: `${loadingProgression * 100}%` }}
    //               ></div>
    //             </div>
    //             <div className="flex justify-end text-white mt-2 mb-12">
    //               <span className="text-sm">
    //                 {Math.round(loadingProgression * 100)}%
    //               </span>
    //             </div>
    //             <div
    //               className={`mt-4 text-white text-center`}
    //               style={sentenceStyling}
    //             >
    //               {sentences.map((sentence, index) => (
    //                 <div
    //                   key={index}
    //                   className={
    //                     index === sentenceIndex ? sentenceStyling : "hidden"
    //                   }
    //                 >
    //                   {sentence}
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //       <Unity
    //         unityProvider={unityProvider}
    //         style={{
    //           visibility: isLoaded ? "visible" : "hidden",
    //           width: "100%",
    //           height: "100%",
    //           position: "absolute",
    //           top: 0,
    //           left: 0,
    //           right: 0,
    //           bottom: 0,
    //         }}
    //       />
    //     </Fragment>
    //   </>
    // )
    <div style={{ width: '100%', height: '800px' }}>
      <iframe
        title="Unity WebGL"
        src="Build/index.html"
        width="100%"
        height="100%"
        allowFullScreen
      />
    </div>
  );
};

export default Dashboard;
