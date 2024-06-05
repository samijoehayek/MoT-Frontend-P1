import React from "react";
import Image from "next/image";

const VideoRecorder = () => {
  return (
    <div className="absolute z-10" style={{ left: "-3%" }}>
      <Image
        src="/images/video-portal-full.png"
        alt="Background"
        width={1150}
        height={600}
        quality={100}
      />
    </div>
  );
};

export default VideoRecorder;