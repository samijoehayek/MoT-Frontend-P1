"use client";
import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const FooterJoinTheMetaverse = () => {
    const router = useRouter();

  return (
    <Button
      className="w-[65%] lg:w-[22%] font-[AlbertFontNormal]"
      sx={{
        mt: 6,
        mb: 3,
        borderRadius: "100px",
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
      onClick={() => {
        router.push("/dashboard");
      }}
    >
      JOIN THE METAVERSE
    </Button>
  );
};

export default FooterJoinTheMetaverse;
