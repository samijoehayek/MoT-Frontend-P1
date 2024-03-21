import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { styled } from "@mui/system";
import localFont from "next/font/local";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: "rgba(163, 163, 163, 0.4)",
    backdropFilter: "blur(8px)",
    borderRadius: "60px",
    padding: theme.spacing(3),
    width: "420px",
    height: "320px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)'
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: 16,
  top: 16,
  backgroundColor: "rgba(163, 163, 163, 0.9)",
  borderRadius: "50%",
  padding: "8px",
  "&:hover": {
    backgroundColor: "rgba(163, 163, 163, 0.9)",
  },
}));

const EmailConfirmationModal = ({ email, open, onClose }) => {
  return (
    <StyledDialog open={open} onClose={onClose}>
      <CloseButton
        edge="end"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{
          position: "absolute",
          right: 40,
          top: 30,
        }}
      >
        <CloseIcon sx={{ color: "#ffffff" }} />
      </CloseButton>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Image
          width={40}
          height={40}
          alt="check-icon"
          src="/images/checkicon1.svg"
          style={{ marginBottom: "16px" }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ color: "#ffffff", marginBottom: "22px", marginTop: "16px", fontSize: '1.8rem'}}
          style={{ fontFamily: "AlbertFont" }}
        >
          Email Confirmation Sent!
        </Typography>
        <DialogContentText sx={{ color: "#ffffff", fontSize: '1.1rem'}} style={{ fontFamily: 'AlbertFontNormal'}}>
          An email confirmation has been sent to
        </DialogContentText>
        <Typography
          variant="body1"
          sx={{
            color: "rgba(50, 210, 160, 1)",
            borderRadius: "4px",
            fontSize: '1.1rem'
          }}
          style={{ fontFamily: "AlbertFontNormal" }}
        >
          {email}
        </Typography>
      </DialogContent>
    </StyledDialog>
  );
};

export default EmailConfirmationModal;
