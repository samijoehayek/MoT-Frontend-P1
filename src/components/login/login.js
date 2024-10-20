"use client";
import React, { useState, useContext } from "react";
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
import GoogleRecaptcha from "../google-recaptcha/google-recaptcha";
import { AppContext } from "../../app/appContext";

const Login = ({ setMethod, setDuplicateEmailModal, setToken }) => {
  const [loginError, setLoginError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaSuccess, setRecaptchaSuccess] = useState();
  const [verificationFailed, setVerificationFailed] = useState();
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  const { english } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(255)
        .required(
          english
            ? "Username is required"
            : "اسم المستخدم أو البريد الالكتروني مطلوب"
        ),
      password: Yup.string()
        .max(255)
        .required(english ? "Password is required" : "كلمة المرور مطلوبة"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await login(values.username, values.password)
          .then((response) => {
            const token = response.token;
            console.log(response.user.has2FA);
            if (response.user.has2FA) {
              setMethod("2FAThird");
              setToken(token);
              // router.push("/dashboard");
            } else {
              localStorage.setItem("token", token);
              document.cookie = `token=${token}`;
              setMethod("2FA");
            }
          })
          .catch((error) => {
            setLoginError(true);
            if (error.response.status === 409) {
              setDuplicateEmailModal(true);
            }
            console.log("Login failed: ", error);
          });
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
          label={english ? "Username" : "اسم المستخدم أو البريد الالكتروني"}
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
          label={english ? "Password" : "كلمة المرور"}
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
            style={{
              fontFamily: "AlbertFontNormal",
              textAlign: english ? "" : "right",
            }}
          >
            {english ? "Wrong credentials" : "بيانات الاعتماد غير صحيحة"}
          </p>
        </div>
      ) : null}

      <div className="mt-4">
        <GoogleRecaptcha
          recaptchaSuccess={recaptchaSuccess}
          setRecaptchaSuccess={setRecaptchaSuccess}
          verificationFailed={verificationFailed}
          setVerificationFailed={setVerificationFailed}
        />
      </div>

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
              sx={{ color: "white", fontSize: 14, mt: "5px" }}
              style={{ fontFamily: "AlbertFontNormal" }}
            >
              {english ? "Remember me" : "تذكرنى"}
            </Typography>
          }
          labelPlacement="end"
          sx={{ alignItems: "flex-center", mt: "2px" }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#785FDC",
            cursor: "pointer",
            mt: "5px",
            textAlign: english ? "" : "right",
          }}
          style={{ fontFamily: "AlbertFontNormal" }}
          onClick={() => router.push("/forgot-password-email")}
        >
          {english ? "Forgot password?" : "نسيت كلمة المرور؟"}
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
            formik.values.username && formik.values.password && recaptchaSuccess
              ? "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important"
              : "#36373E !important",
          "&:hover": {
            background:
              formik.values.username &&
              formik.values.password &&
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
          !formik.values.username ||
          !formik.values.password ||
          !recaptchaSuccess
        }
        style={{
          fontFamily: "AlbertFontNormal",
          textAlign: english ? "" : "right",
        }}
      >
        {formik.values.username && formik.values.password ? (
          <p className="mt-1">
            {" "}
            {english ? "JOIN THE METAVERSE" : "تسجيل الدخول"}
          </p>
        ) : (
          <p className="mt-1"> {english ? "LOG IN" : "الدخول"}</p>
        )}
      </Button>

      <GoogleLogin />

      <div
        className={`flex items-center justify-center font-normal text-base text-white`}
        style={{
          fontFamily: "AlbertFontNormal",
          textAlign: english ? "" : "right",
        }}
        onClick={() => setMethod("signup")}
      >
        {english ? "Don't have an account?" : "ليس لديك حساب؟"}
        <b style={{ fontFamily: "AlbertFont" }}>
          &nbsp;<u>{english ? "SIGN UP HERE" : "سجل هنا"}</u>
        </b>
      </div>
    </form>
  );
};

export default Login;
