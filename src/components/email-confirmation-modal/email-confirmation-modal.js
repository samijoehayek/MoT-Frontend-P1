import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";

const EmailConfirmationModal = ({ email, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <CheckCircleIcon sx={{ color: "#4caf50", fontSize: 48 }} />
        <Typography variant="h5" component="span" sx={{ ml: 2 }}>
          Email Confirmation Sent
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          An email confirmation has been sent to {email}.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default EmailConfirmationModal;
