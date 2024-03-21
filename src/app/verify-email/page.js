"use client";
import { verifyEmail } from "@/axios";
import { useRouter } from "next/navigation";
import { Button, Typography, DialogContentText } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import BackgroundImage from "@/components/background-image/background-image";

const VerifyEmail = () => {
  const [emailVerified, setEmailVerified] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const verificationString = urlParams.get("verificationString");
    verifyEmail(verificationString)
      .then(() => {
        setEmailVerified(true);
      })
      .catch(() => {
        setEmailVerified(false);
      });
  }, []);

  return (
    emailVerified && (
      <div className="flex flex-col md:flex-row h-screen bg-[#1A1B22]">
          <div className="absolute top-0 left-0 mt-8 ml-8">
            <Image
              src="/images/stc-logo.png"
              alt="STC Logo"
              width={150}
              height={60}
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center px-8 min-h-screen md:min-h-0">
            <div className="flex flex-col items-start">
              <Image
                width={120}
                height={120}
                alt="check-icon"
                src="/images/checkicon2.svg"
                style={{ marginBottom: "16px" }}
              />
              <div>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: "#ffffff",
                    marginBottom: "22px",
                    marginTop: "16px",
                    fontSize: "1.8rem",
                  }}
                  style={{ fontFamily: "AlbertFont" }}
                >
                  Your account has been verified!
                </Typography>
                <DialogContentText
                  style={{ fontFamily: "AlbertFontNormal" }}
                  sx={{ color: "#ffffff", fontSize: "1.1rem" }}
                >
                  Your email is successfully verified.
                </DialogContentText>
                <Button
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    mb: 3,
                    borderRadius: "100px",
                    background:
                      "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important",
                    "&:hover": {
                      background:
                        "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%)",
                    },
                    "&.glow": {
                      boxShadow:
                        "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
                    },
                  }}
                  type="submit"
                  variant="contained"
                  onClick={() => router.push("/dashboard")}
                  style={{ fontFamily: "AlbertFont" }}
                  className={`glow`}
                >
                  JOIN THE METAVERSE
                </Button>
              </div>
            </div>
          </div>

        {/* Image Section */}
        <div className="w-1/2 relative overflow-hidden md:block hidden">
          <BackgroundImage imageName={"email-success-bg"} />
        </div>
      </div>
    )
  );
};

export default VerifyEmail;
