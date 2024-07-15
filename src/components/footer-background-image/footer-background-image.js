import React from "react";
import Image from "next/image";
import FooterBgImage from "../../../public/images/footer-bg.png";

const FooterBackgroundImage = () => {
  return (
    <Image
      src={FooterBgImage}
      alt="Background"
      fill
      style={{ objectFit: "cover" }}
      quality={100}
      priority
    />
  );
};

export default FooterBackgroundImage;
