import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";

const FooterHero = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const router = useRouter();

  return (
    <div className="flex md:flex-row">
      <div className="w-full flex flex-col text-white">
        <div className="relative w-full h-screen">
          <Image
            src="/images/footer-bg.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className={"justify-end pb-12 absolute inset-0 flex flex-col items-center text-center mt-12 md:justify-center"}>
            <h2
              style={{
                fontFamily: "AlbertFont",
                fontSize: isMobile?"2.1rem":"4rem",
                lineHeight: "1.1",
                paddingBottom: "1rem",
              }}
            >
              Join MT Metaverse Now!
            </h2>
            <p
              style={{
                fontFamily: "AlbertFontNormal",
                fontSize: isMobile?"1rem":"1.15rem",
                lineHeight: "1.2",
                paddingTop: "1.5rem",
              }}
            >
              Meet others interested in Saudi Arabia, tourism and <br />{" "}
              emerging metaverse and AI technology by joining the <br />
              MT Metaverse now!
            </p>
            <Button
              sx={{
                mt: 6,
                mb: 3,
                borderRadius: "100px",
                width: isMobile?"65%":"17%",
                height: "3rem",
                paddingTop: "0.7rem",
                fontSize: "1rem",
                background:
                  "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important",

                "&:hover": {
                  background:
                    "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%)",
                },
                boxShadow:
                  "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
                "&.Mui-disabled": {
                  background: "#36373E",
                  color: "rgba(255, 255, 255, 0.5)",
                },
              }}
              type="submit"
              variant="contained"
              style={{ fontFamily: "AlbertFontNormal" }}
              onClick={() => {router.push('/dashboard')}}
            >
              JOIN THE METAVERSE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHero;
