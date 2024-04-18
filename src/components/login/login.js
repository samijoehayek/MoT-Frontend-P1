"use client";
import React, { useState } from "react";
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
import { useRouter } from "next/navigation";
import { login } from "@/axios";
import GoogleLogin from "@/components/google-login/google-login";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = ({ setMethod }) => {
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      username: Yup.string().max(255).required("Username is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await login(values.username, values.password)
          .then((response) => {
            const token = response.token;
            localStorage.setItem("token", token);
            document.cookie = `token=${token}`;
          })
          .then(() => {
            router.push("/dashboard");
          })
          .catch((error) => {
            setLoginError(true);
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
    <form noValidate onSubmit={formik.handleSubmit} autoComplete="off">
      <Stack spacing={3}>
        <TextField
          error={!!(formik.touched.username && formik.errors.username)}
          name="username"
          fullWidth
          helperText={formik.touched.username && formik.errors.username}
          label="Username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
          autoComplete="new-username"
          type="username"
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
                color: "white",
                opacity: 1,
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
          error={!!(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label="Password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type={showPassword ? "text" : "password"}
          value={formik.values.password}
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
              fontFamily: "AlbertFontNormal",
              opacity: 0.5,
              "&.Mui-focused": {
                color: "white",
                opacity: 1,
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
      </Stack>
      {formik.errors.submit && (
        <Typography color="error" sx={{ mt: 3 }} variant="body2">
          {formik.errors.submit}
        </Typography>
      )}
      {loginError ? (
        <div>
          <p
            className={`text-red-500 text-sm mb-0 mt-3`}
            style={{ fontFamily: "AlbertFontNormal" }}
          >
            Wrong credentials
          </p>
        </div>
      ) : null}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onClick={() => setRememberMe(!rememberMe)}
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
              sx={{ color: "white", fontSize: 14, mt: "5px"}}
              style={{ fontFamily: "AlbertFontNormal" }}
            >
              Remember me
            </Typography>
          }
          labelPlacement="end"
          sx={{ alignItems: "flex-center", mt: "2px" }}
        />
        <Typography
          variant="body2"
          sx={{ color: "#785FDC", cursor: "pointer", mt: "5px" }}
          style={{ fontFamily: "AlbertFontNormal" }}
          onClick={() => router.push("/forgot-password-email")}
        >
          Forgot password?
        </Typography>
      </Box>
      <Button
        fullWidth
        size="large"
        sx={{
          mt: 3,
          mb: 3,
          borderRadius: "100px",
          background:
            formik.values.username && formik.values.password
              ? "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important"
              : "#36373E !important",
          "&:hover": {
            background:
              formik.values.username && formik.values.password
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
        disabled={!formik.values.username || !formik.values.password}
        style={{ fontFamily: "AlbertFontNormal" }}
      >
        {formik.values.username && formik.values.password
          ? <p className="mt-1">JOIN THE METAVERSE</p>
          : <p className="mt-1">LOG IN</p>}
      </Button>

      <GoogleLogin />

      <div
        className={`flex items-center justify-center font-normal text-base text-white`}
        style={{ fontFamily: "AlbertFontNormal" }}
        onClick={() => setMethod("signup")}
      >
        Don't have an account?
        <b style={{ fontFamily: "AlbertFont" }}>
          &nbsp;<u>SIGN UP HERE</u>
        </b>
      </div>
    </form>
  );
};

export default Login;
