import React from "react";
import Image from "next/image";

const StcLogo = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-8 lg:mb-0">
      <Image
        src="/images/stc-logo.png"
        alt="STC Logo"
        width={180}
        height={60}
        priority
      />
    </div>
  );
};

export default StcLogo;
