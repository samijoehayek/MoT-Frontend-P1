import React from "react";
import Image from "next/image";

const FooterBackgroundImage = () => {
  return (
    <Image
      src="/images/footer-bg.png"
      alt="Background"
      fill
      style={{ objectFit: "cover" }}
      quality={100}
      priority
    />
  );
};

export default FooterBackgroundImage;
