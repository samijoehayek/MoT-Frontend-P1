import React from "react";
import { Snackbar, SnackbarContent, Typography } from "@mui/material";
import Image from "next/image";

const PasswordUpdatedSnackbar = ({ open, onClose }) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
    >
      <SnackbarContent
        message={
          <div className="flex items-center">
            <Image
              width={23}
              height={23}
              alt="check-icon"
              src="/images/checkicon1.svg"
              style={{ marginRight: "16px" }}
            />{" "}
            <Typography variant="body1">Your password was updated!</Typography>
          </div>
        }
        sx={{
          background:
            "linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)",
          border: "1.98px solid",
          borderImageSource:
            "linear-gradient(131.92deg, rgba(255, 255, 255, 0.2) 14.14%, rgba(0, 0, 0, 0) 47.67%, rgba(255, 255, 255, 0.2) 82.63%)",
          boxShadow:
            "0px 1.982710838317871px 47.585060119628906px -1.982710838317871px #0000002E",
          borderRadius: "100px",
          borderRight: "0px !important",
          borderLeft: "0px !important",
        }}
      />
    </Snackbar>
  );
};

export default PasswordUpdatedSnackbar;
