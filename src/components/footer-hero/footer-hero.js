import React from "react";
import FooterBackgroundImage from "../footer-background-image/footer-background-image";
import FooterActions from "../footer-actions/footer-actions";

const FooterHero = () => {
  return (
    <div className="w-full h-screen relative flex flex-row">
      {/* Footer Background Image for the Hero section */}
      <FooterBackgroundImage />
      {/* Footer Actions - Going to the dashboard page */}
      <FooterActions />
    </div>
  );
};

export default FooterHero;
