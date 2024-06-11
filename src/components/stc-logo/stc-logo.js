import React from "react";
import Image from "next/image";

const StcLogo = () => {
  return (
    <div className="flex flex-col justify-center">
      <Image
        src="/images/stc-logo.png"
        alt="STC Logo"
        width={180}
        height={60}
      />
    </div>
  );
};

export default StcLogo;
