"use client";
import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { signup } from "@/axios";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import GoogleRecaptcha from "../google-recaptcha/google-recaptcha";

const Signup = ({ setMethod, setEmailConfirmationModal, setUserEmail, setDuplicateEmailModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [recaptchaSuccess, setRecaptchaSuccess] = useState(false);

  const formikSignup = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().max(255).required("Username is required"),
      email: Yup.string().email().max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await signup(values.username, values.email, values.password, values.tag)
          .then((response) => {
            const token = response.token;
            localStorage.setItem("token", token);
            document.cookie = `token=${token}`;
            setUserEmail(values.email);
          })
          .then(() => {
            // router.push("/dashboard");
            setEmailConfirmationModal(true);
          })
          .catch((error) => {
            if(error.response.status === 409) {
              setDuplicateEmailModal(true);
            }
            console.log("Login failed: ", error);
          });

        // await auth.signIn(values.username, values.password);
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <form noValidate onSubmit={formikSignup.handleSubmit} autoComplete="off">
      <Stack spacing={3} sx={{ mb: 2 }}>
        <TextField
          error={
            !!(formikSignup.touched.username && formikSignup.errors.username)
          }
          fullWidth
          helperText={
            formikSignup.touched.username && formikSignup.errors.username
          }
          label="Username"
          name="username"
          onBlur={formikSignup.handleBlur}
          onChange={formikSignup.handleChange}
          type="username"
          autoComplete="new-username"
          value={formikSignup.values.username}
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
              color: "white",
              fontFamily: "AlbertFontNormal",
            },
            "& .MuiFormHelperText-root": {
              color: "#FF5A5A !important",
              fontFamily: "AlbertFontNormal",
            },
          }}
        />
        <TextField
          error={!!(formikSignup.touched.email && formikSignup.errors.email)}
          fullWidth
          helperText={formikSignup.touched.email && formikSignup.errors.email}
          label="Email"
          name="email"
          onBlur={formikSignup.handleBlur}
          onChange={formikSignup.handleChange}
          type="email"
          value={formikSignup.values.email}
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
        <TextField
          error={
            !!(formikSignup.touched.password && formikSignup.errors.password)
          }
          fullWidth
          helperText={
            formikSignup.touched.password && formikSignup.errors.password
          }
          label="Password"
          name="password"
          onBlur={formikSignup.handleBlur}
          onChange={formikSignup.handleChange}
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          value={formikSignup.values.password}
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityIcon sx={{ color: "white" }} />
                  ) : (
                    <VisibilityOffIcon sx={{ color: "white" }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <TextField
                    error={
                      !!(formikSignup.touched.tag && formikSignup.errors.tag)
                    }
                    fullWidth
                    helperText={
                      formikSignup.touched.tag && formikSignup.errors.tag
                    }
                    label="Tag"
                    name="tag"
                    onBlur={formikSignup.handleBlur}
                    onChange={formikSignup.handleChange}
                    type="tag"
                    value={formikSignup.values.tag}
                  /> */}
      </Stack>
      {formikSignup.errors.submit && (
        <Typography color="error" sx={{ mt: 3 }} variant="body2">
          {formikSignup.errors.submit}
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={privacyPolicy}
              onClick={() => setPrivacyPolicy(!privacyPolicy)}
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
          }
          label={
            <Typography
              variant="body2"
              sx={{ color: "white" }}
              style={{ fontFamily: "AlbertFontNormal" }}
              className="mt-1"
            >
              I accept the{" "}
              <Link href="/privacy-policy" target="_blank">
                <b style={{ fontFamily: "AlbertFont" }}>
                  &nbsp;<u>Privacy Policy</u>
                </b>
              </Link>
            </Typography>
          }
        />
      </Box>
      <GoogleRecaptcha recaptchaSuccess={recaptchaSuccess} setRecaptchaSuccess={setRecaptchaSuccess}/>
      <Button
        fullWidth
        size="large"
        sx={{
          mt: 3,
          mb: 3,
          borderRadius: "100px",
          "&.glow": {
            boxShadow:
              "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
          },
          background:
            formikSignup.values.username &&
            formikSignup.values.password &&
            formikSignup.values.email &&
            !formikSignup.errors.email &&
            privacyPolicy &&
            recaptchaSuccess
              ? "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important"
              : "#36373E !important",
          "&:hover": {
            background:
              formikSignup.values.username &&
              formikSignup.values.password &&
              formikSignup.values.email &&
              !formikSignup.errors.email &&
              privacyPolicy &&
              recaptchaSuccess
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
        type="submit"
        variant="contained"
        disabled={
          !formikSignup.values.username ||
          !formikSignup.values.password ||
          !formikSignup.values.email ||
          formikSignup.errors.email ||
          !privacyPolicy ||
          !recaptchaSuccess
        }
        style={{ fontFamily: "AlbertFontNormal" }}
      >
        {formikSignup.values.username &&
        formikSignup.values.password &&
        formikSignup.values.email &&
        !formikSignup.errors.email &&
        privacyPolicy && recaptchaSuccess ? (
          <p className="mt-1">JOIN THE METAVERSE</p>
        ) : (
          <p className="mt-1">SIGN UP</p>
        )}
      </Button>
      <div
        className={`flex items-center justify-center font-normal text-base text-white`}
        style={{ fontFamily: "AlbertFontNormal" }}
        onClick={() => setMethod("login")}
      >
        Already have an account?
        <b style={{ fontFamily: "AlbertFont" }}>
          &nbsp;<u>LOG IN HERE</u>
        </b>
      </div>
    </form>
  );
};

export default Signup;
