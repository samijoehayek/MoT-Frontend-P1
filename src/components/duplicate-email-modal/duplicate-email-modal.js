import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import DangerousIcon from "@mui/icons-material/Dangerous";

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
    boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.3)",
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

const DuplicateEmailModal = ({ open, onClose }) => {
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
        <DangerousIcon
          sx={{
            right: 40,
            top: 30,
            color: "red",
          }}
        />
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
          This is either a dupicate email, username, or a gmail connected account!
        </Typography>
        <DialogContentText
          sx={{ color: "#ffffff", fontSize: "1.1rem" }}
          style={{ fontFamily: "AlbertFontNormal" }}
        >
          Try another email!
        </DialogContentText>
      </DialogContent>
    </StyledDialog>
  );
};

export default DuplicateEmailModal;
