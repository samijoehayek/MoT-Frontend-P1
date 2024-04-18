import React, { useState, useContext } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgotPassword } from "@/axios";
import { AppContext } from '../../app/appContext';
import { useRouter } from "next/navigation";

const ForgotPasswordForm = ({ verificationString, setFailedPasswordChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const router = useRouter();
  const { setPasswordChangedBC } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string().max(255).required("Password is required"),
      confirmPassword: Yup.string()
        .max(255)
        .required("Confirm Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await forgotPassword(values.newPassword, verificationString)
          .then((response) => {
            console.log(response);
            setPasswordChangedBC(true);
            router.push("/")
          })
          .catch((error) => {
            console.log(1111)
            setFailedPasswordChange(true);
            setDisableButton(true);
            console.log("Change Password failed: ", error);
          });
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
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
          Let's update your password
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "rgba(255, 255, 255, 0.7)", mb: 3 }}
          style={{ fontFamily: "AlbertFontNormal" }}
        >
          Create a new password.
        </Typography>
        <Stack spacing={3}>
          <TextField
            error={!!(formik.touched.newPassword && formik.errors.newPassword)}
            fullWidth
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            label="New Password"
            name="newPassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword ? "text" : "password"}
            value={formik.values.email}
            autoComplete="new-password"
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
          <TextField
            error={
              !!(
                formik.touched.confirmPassword && formik.errors.confirmPassword
              )
            }
            fullWidth
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            label="Confirm Password"
            name="confirmPassword"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            type={showPassword ? "text" : "password"}
            value={formik.values.confirmPassword}
            autoComplete="new-confirm-password"
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
        </Stack>

        {formik.values.newPassword !== formik.values.confirmPassword ? (
          <div>
            <p
              className={`text-red-500 text-sm mb-0 mt-3`}
              style={{ fontFamily: "AlbertFontNormal" }}
            >
              Passwords do not match
            </p>
          </div>
        ) : null}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            mb: 3,
            borderRadius: "100px",
            background:
              formik.values.newPassword &&
              !formik.errors.newPassword &&
              formik.values.confirmPassword &&
              !formik.errors.confirmPassword &&
              formik.values.newPassword === formik.values.confirmPassword &&
              !disableButton
                ? "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important"
                : "#36373E !important",
            "&:hover": {
              background:
                formik.values.newPassword &&
                !formik.errors.newPassword &&
                formik.values.confirmPassword &&
                !formik.errors.confirmPassword &&
                formik.values.newPassword === formik.values.confirmPassword &&
                !disableButton
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
          disabled={
            !formik.values.newPassword ||
            formik.errors.newPassword ||
            !formik.values.confirmPassword ||
            formik.errors.confirmPassword ||
            formik.values.newPassword !== formik.values.confirmPassword ||
            disableButton
          }
          style={{ fontFamily: "AlbertFontNormal" }}
        >
          <div style={{ marginTop: "3px" }}>Reset Password</div>
        </Button>
      </form>
    </Box>
  );
};

export default ForgotPasswordForm;
