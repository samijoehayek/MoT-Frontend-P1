"use client";
import React, {useState} from "react";
import bg from "../../../public/images/forgot-password-bg1.png";
import Image from "next/image";
import { Button, Typography, Box, TextField } from "@mui/material";
import EmailConfirmationModal from "@/components/email-confirmation-modal/email-confirmation-modal";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendEmailPasswordChange } from "@/axios";

const ForgotPasswordEmail = () => {
  // States
  const [emailConfirmationModal, setEmailConfirmationModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Constants
  const bgStyling = {
    backgroundImage: `url(${bg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  // Hooks
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().max(255).required("Email is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await sendEmailPasswordChange(values.email)
          .then((response) => {
            setUserEmail(values.email);
            setEmailConfirmationModal(true);
          })
          .catch((error) => {
            console.log("Email is not Sent: ", error);
          });

      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <div
      className={"w-screen h-screen flex justify-center items-center"}
      style={bgStyling}
    >
      <EmailConfirmationModal
        email={userEmail}
        open={emailConfirmationModal}
        onClose={() => {
          setEmailConfirmationModal(false);
        }}
      /> 
      {/* Text Section */}
      <div className="relative md:block hidden flex justify-center items-center px-8 mb-20">
        <div className={`text-white`} style={{ fontFamily: "AlbertFont" }}>
          <h2 className="text-5xl mb-4">Discover Diriyah:</h2>
          <p className="text-5xl font-bold mb-4">
            Virtual Tour of Saudi Arabia's
          </p>
          <p className="text-5xl font-bold">Vibrant Marketplace!</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center px-8 min-h-screen md:min-h-0">
        <Box
          sx={{
            background: "#1A1B22F2",
            borderRadius: "32px",
            padding: "32px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            maxWidth: "700px",
            minHeight: "700px",
            opacity: "0.9",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Reset Password Form */}
          <form
            className="w-full max-w-[90%] mb-24"
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white", mb: 1 }}
              style={{ fontFamily: "AlbertFont" }}
            >
              Reset Password
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 3 }}
              style={{ fontFamily: "AlbertFontNormal" }}
            >
              Enter your email to change your password.
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography
                component="label"
                htmlFor="email"
                sx={{ display: "block", mb: 1, color: "white" }}
              >
                Email
              </Typography>
              <TextField
                error={
                  !!(formik.touched.email && formik.errors.email)
                }
                fullWidth
                helperText={
                  formik.touched.email && formik.errors.email
                }
                label="Email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                autoComplete="new-email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#785FDC",
                    },
                    "&.Mui-error fieldset": {
                      borderColor: "#FF5A5A !important",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                    opacity: 0.5,
                    fontFamily: "AlbertFontNormal",
                    "&.Mui-focused": {
                      opacity: 1,
                      color: "white",
                    },
                  },
                  "& .MuiInputBase-input": {
                    fontFamily: "AlbertFontNormal",
                    color: "white",
                  },
                  "& .MuiFormHelperText-root": {
                    fontFamily: "AlbertFontNormal",
                    color: "#FF5A5A !important",
                  },
                }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                mb: 3,
                borderRadius: "100px",
                "&.glow": {
                  boxShadow:
                    "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
                },
                background:
                  formik.values.email &&
                  !formik.errors.email
                    ? "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important"
                    : "#36373E !important",
                "&:hover": {
                  background:
                    formik.values.email && !formik.errors.email
                      ? "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%)"
                      : "#36373E",
                },
                boxShadow:
                  "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
                "&.Mui-disabled": {
                  background: "#36373E",
                  color: "rgba(255, 255, 255, 0.5)",
                },
              }}
              disabled={!formik.values.email || formik.errors.email}
              style={{ fontFamily: "AlbertFontNormal" }}
            >
              Reset Password
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default ForgotPasswordEmail;
