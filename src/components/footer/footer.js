import React from "react";
import SocialMedia from "../social-media/social-media";
import LegalLinks from "../legal-links/legal-links";
import StcLogo from "../stc-logo/stc-logo";
import FooterCopyright from "../footer-copyright/footer-copyright";

const Footer = () => {
  return (
    // Footer Component
    <div className="w-full flex flex-col bg-[#18191C]">
      {/* Footer links and Social Media */}
      <nav className="w-full flex flex-col py-8 px-20 lg:flex-row lg:justify-between">
        <StcLogo />
        <LegalLinks />
        <SocialMedia />
      </nav>
      {/* Footer white line used for separating content */}
      <div className="flex flex-row justify-center my-6">
        <div className="w-full border-t-1 border-white opacity-40 lg:w-5/6" />
      </div>
      {/* Footer Copyright Sentence */}
      <FooterCopyright />
    </div>
  );
};

export default Footer;
