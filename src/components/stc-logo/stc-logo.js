import React from "react";
import Image from "next/image";
import STCLogo from "../../../public/images/stc-logo.png";

const StcLogo = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-8 lg:mb-0">
      <Image
        src={STCLogo}
        alt="STC Logo"
        width={180}
        height={60}
        priority
      />
    </div>
  );
};

export default StcLogo;
