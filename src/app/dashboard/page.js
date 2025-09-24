"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useMediaQuery } from "react-responsive";
import bg from "../../../public/images/webgl-loader2.jpg";
import { getUserSession, createUserSession } from "@/axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import ShoppingModal from "../../components/shopping-cart/shopping-cart";

const Dashboard = () => {
  // Existing states
  const [loadWebGL, setLoadWebGL] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [userSession, setUserSession] = useState({});

  // New shopping-related states
  const [showShoppingModal, setShowShoppingModal] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const router = useRouter();

  // Existing constants and styling...
  const sentences = [
    "Explore the space and meet others",
    "Engage in conversations through chat",
    "Interact with AI powered assistants",
    "View informational displays",
  ];

  const styling = {
    backgroundImage: `url(${bg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const sentenceStyling = {
    animation: "fadeInOut 4s linear infinite",
    fontSize: "1.5rem",
    fontFamily: "AlbertFontNormal",
  };

  const animationStyles = `@keyframes fadeInOut {
    0%, 100% {
        opacity: 0;
    }
    25%, 75% {
      opacity: 1;
    }
  }`;

  // Existing functions...
  const getUserSessions = () => {
    return getUserSession(localStorage.getItem("token"));
  };

  const createUserSessions = () => {
    return createUserSession(localStorage.getItem("token"));
  };

  const handleUnload = async () => {
    localStorage.setItem("isActive", false);
  };

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const handleWebGLLoad = (token, isActive) => {
    getUserSessions().then((res) => {
      if (res && Object.keys(res).length > 0) {
        if (isActive == "true") {
          router.push("/");
          setUserSession(res);
        } else {
          localStorage.setItem("isActive", false);
          setUserSession(res);
          setLoadWebGL(true);
        }
      } else {
        createUserSessions()
          .then((res) => {
            localStorage.setItem("isActive", false);
            setUserSession(res);
            setLoadWebGL(true);
          })
          .catch((err) => {
            console.log("Could not create session");
          });
      }
    });
  };

  function handleCaching(url) {
    if (
      url.match(/\.data/) ||
      url.match(/\.bundle/) ||
      url.match(/\.wasm/) ||
      url.match(/\.unityweb/) ||
      url.match(/\.gz/) ||
      url.match(/\.local/)
    ) {
      return "must-revalidate";
    }

    if (url.match(/\.mp4/) || url.match(/\.custom/)) {
      return "immutable";
    }

    return "no-store";
  }

  // // New shopping functions
  // const handleProductSelected = (productData) => {
  //   setSelectedProduct(productData);
  //   setShowShoppingModal(true);
  //   // Optionally pause or dim the Unity experience
  //   sendMessage("GameManager", "PauseExperience");
  // };

  // const handleAddToCart = (product) => {
  //   setCartItems((prev) => [...prev, { ...product, id: Date.now() }]);
  //   // Send confirmation back to Unity
  //   sendMessage("GameManager", "ProductAddedToCart", JSON.stringify(product));
  // };

  // const handleCloseModal = () => {
  //   setShowShoppingModal(false);
  //   setSelectedProduct(null);
  //   // Resume Unity experience
  //   sendMessage("GameManager", "ResumeExperience");
  // };

  // const handleCheckoutComplete = (paymentResult) => {
  //   if (paymentResult.success) {
  //     // Handle successful payment
  //     setCartItems([]);
  //     sendMessage(
  //       "GameManager",
  //       "PurchaseCompleted",
  //       JSON.stringify(paymentResult)
  //     );
  //   }
  //   handleCloseModal();
  // };

  // Hooks
  const isMobile = useMediaQuery({ query: "(max-width: 1025px)" });

  const {
    unityProvider,
    loadingProgression,
    isLoaded,
    sendMessage,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: isMobile
      ? "BuildMobile/Build/Build.loader.js"
      : "https://mt-webgl.sfo3.digitaloceanspaces.com/Build/Build.loader.js",
    dataUrl: isMobile
      ? "BuildMobile/Build/Build.data.unityweb"
      : "https://mt-webgl.sfo3.digitaloceanspaces.com/Build/Build.data.unityweb",
    frameworkUrl: isMobile
      ? "BuildMobile/Build/Build.framework.js.unityweb"
      : "https://mt-webgl.sfo3.digitaloceanspaces.com/Build/Build.framework.js.unityweb",
    codeUrl: isMobile
      ? "BuildMobile/Build/Build.wasm.unityweb"
      : "https://mt-webgl.sfo3.digitaloceanspaces.com/Build/Build.wasm.unityweb",
    streamingAssetsUrl: isMobile
      ? "BuildMobile/StreamingAssets"
      : "https://mt-webgl.sfo3.digitaloceanspaces.com/StreamingAssets",
    companyName: "CDS",
    productName: "MIC",
    productVersion: "0.1",
    cacheControl: handleCaching,
  });

  // // Unity event listeners for shopping
  // useEffect(() => {
  //   if (isLoaded) {
  //     // Listen for product selection from Unity
  //     addEventListener("ProductSelected", handleProductSelected);

  //     // Listen for cart icon clicks from Unity
  //     addEventListener("OpenCart", () => setShowShoppingModal(true));

  //     return () => {
  //       removeEventListener("ProductSelected", handleProductSelected);
  //       removeEventListener("OpenCart", () => setShowShoppingModal(true));
  //     };
  //   }
  // }, [isLoaded, addEventListener, removeEventListener]);

  // Existing useEffect...
  useEffect(() => {
    window.addEventListener("unload", handleUnload);
    window.addEventListener("beforeunload", handleBeforeUnload);
    const token = localStorage.getItem("token");
    const isActive = localStorage.getItem("isActive");
    if (token) {
      handleWebGLLoad(token, isActive);
    }

    const intervalId = setInterval(() => {
      setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("unload", handleUnload);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    loadWebGL && (
      <>
        <style>{animationStyles}</style>
        <Fragment>
          {!isLoaded && (
            <div className={"w-screen h-screen flex flex-col"} style={styling}>
              {/* Loading screen content - same as before */}
              <div className="w-full flex justify-center mt-8">
                <Image
                  src="/images/stc-logo.png"
                  alt="STC Logo"
                  width={240}
                  height={80}
                />
              </div>
              <div className="flex flex-grow flex-col justify-center items-center">
                <div
                  className={`mt-4 text-white text-center`}
                  style={sentenceStyling}
                >
                  {sentences.map((sentence, index) => (
                    <div
                      key={index}
                      className={
                        index === sentenceIndex ? sentenceStyling : "hidden"
                      }
                    >
                      {sentence}
                    </div>
                  ))}
                </div>
                <h1
                  className={`font-sans text-5xl font-bold text-white mb-16 mt-4 text-center`}
                  style={{ fontFamily: "AlbertFont" }}
                >
                  Saudi Tourism Metaverse Loading...
                </h1>
              </div>
              <div className="flex flex-col items-center my-16 mx-16">
                <div className="w-full flex flex-row justify-between text-white mb-2">
                  <span className="text-sm">Loading...</span>
                  <span className="text-sm">
                    {Math.round(loadingProgression * 100)}%
                  </span>
                </div>
                <div className="w-full rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-white"
                    style={{
                      width: `${loadingProgression * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Unity WebGL Canvas */}
          <Unity
            unityProvider={unityProvider}
            style={{
              visibility: isLoaded ? "visible" : "hidden",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />

          {/* Shopping Modal Overlay */}
          {/* {showShoppingModal && (
            <ShoppingModal
              isOpen={showShoppingModal}
              onClose={handleCloseModal}
              selectedProduct={selectedProduct}
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              onCheckoutComplete={handleCheckoutComplete}
            />
          )} */}
        </Fragment>
      </>
    )
  );
};

export default Dashboard;
