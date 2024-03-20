"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Divider,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { signup, login } from "@/axios";
import localFont from "next/font/local";
import GoogleLogin from "@/components/google-login/google-login";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EmailConfirmationModal from "@/components/email-confirmation-modal/email-confirmation-modal";
import Link from "next/link";

const albertFont = localFont({
  src: "../../../public/FSAlbertArabic-Bold.ttf",
  display: "swap",
});

const albertFontNormal = localFont({
  src: "../../../public/FSAlbertArabic-Regular.ttf",
  display: "swap",
});

const Login = () => {
  const [method, setMethod] = useState("login");
  const [loginError, setLoginError] = useState(false);
  const [emailConfirmationModal, setEmailConfirmationModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const router = useRouter();

  function getUserLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser"));
      }
    });
  }

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

  const formikSignup = useFormik({
    initialValues: {
      username: "MTUser123",
      email: "mt@gmail.com",
      password: "Password123!",
      tag: "MTUser123",
    },
    validationSchema: Yup.object({
      username: Yup.string().max(255).required("Username is required"),
      email: Yup.string().email().max(255).required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
      tag: Yup.string().max(255).required("Tag is required"),
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      document.cookie = `token=${token}`;
      router.push("/dashboard");
    }
  }, []);
  return (
    <>
      <Head>Welcome Back!</Head>
      <EmailConfirmationModal
        email={userEmail}
        open={emailConfirmationModal}
        onClose={() => {
          setEmailConfirmationModal(false);
        }}
      />

      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div className="mb-16">
            <Image
              src="/images/stc-logo.png"
              alt="STC Logo"
              width={150}
              height={50}
            />
          </div>
          <div>
            <Stack spacing={1} sx={{ mb: 2 }}>
              <Typography
                variant="h4"
                className={`${albertFont.className} text-white text-4xl`}
              >
                Welcome Back!
              </Typography>
            </Stack>
            <Stack spacing={1} sx={{ mb: 5 }}>
              <Typography
                fontSize={13}
                className={`${albertFontNormal.className} text-white`}
              >
                Join the Metaverse and be part of the future
              </Typography>
            </Stack>

            {method === "login" && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
                autoComplete="off"
              >
                <Stack spacing={3}>
                  <TextField
                    error={
                      !!(formik.touched.username && formik.errors.username)
                    }
                    name="username"
                    fullWidth
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
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
                          borderColor: "white",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "red",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                          color: "white",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
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
                          borderColor: "white",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "red",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                          color: "white",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "white",
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
                      className={`${albertFontNormal.className} text-red-500 text-sm mb-0`}
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
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Remember me
                      </Typography>
                    }
                  />
                  <Typography
                    variant="body2"
                    sx={{ color: "#785FDC", cursor: "pointer" }}
                  >
                    Change password?
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
                    fontFamily: albertFontNormal.fontFamily,
                  }}
                  type="submit"
                  variant="contained"
                  disabled={!formik.values.username || !formik.values.password}
                >
                  {formik.values.username && formik.values.password
                    ? "JOIN THE METAVERSE"
                    : "LOG IN"}
                </Button>

                <GoogleLogin />

                <div
                  className={`${albertFontNormal.className} flex items-center justify-center font-normal text-base text-white`}
                  onClick={() => setMethod("signup")}
                >
                  Don't have an account?
                  <b className={`${albertFont.className}`}>
                    &nbsp;<u>SIGN UP HERE</u>
                  </b>
                </div>
              </form>
            )}
            {method === "signup" && (
              <form
                noValidate
                onSubmit={formikSignup.handleSubmit}
                autoComplete="off"
              >
                <Stack spacing={3} sx={{ mb: 2 }}>
                  <TextField
                    error={
                      !!(
                        formikSignup.touched.username &&
                        formikSignup.errors.username
                      )
                    }
                    fullWidth
                    helperText={
                      formikSignup.touched.username &&
                      formikSignup.errors.username
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
                          borderColor: "white",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "red",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                          color: "white",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    error={
                      !!(
                        formikSignup.touched.email && formikSignup.errors.email
                      )
                    }
                    fullWidth
                    helperText={
                      formikSignup.touched.email && formikSignup.errors.email
                    }
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
                          borderColor: "white",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "red",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                          color: "white",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    error={
                      !!(
                        formikSignup.touched.password &&
                        formikSignup.errors.password
                      )
                    }
                    fullWidth
                    helperText={
                      formikSignup.touched.password &&
                      formikSignup.errors.password
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
                          borderColor: "white",
                        },
                        "&.Mui-error fieldset": {
                          borderColor: "red",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "white",
                        "&.Mui-focused": {
                          color: "white",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                      "& .MuiFormHelperText-root": {
                        color: "white",
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
                      <Typography variant="body2" sx={{ color: "white" }}>
                        I accept the{" "}
                        <Link href="/privacy-policy" target="_blank">
                          <b className={`${albertFont.className}`}>
                            &nbsp;<u>Privacy Policy</u>
                          </b>
                        </Link>
                      </Typography>
                    }
                  />
                </Box>
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
                      privacyPolicy
                        ? "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%) !important"
                        : "#36373E !important",
                    "&:hover": {
                      background:
                        formikSignup.values.username &&
                        formikSignup.values.password &&
                        formikSignup.values.email &&
                        !formikSignup.errors.email &&
                        privacyPolicy
                          ? "linear-gradient(101.34deg, #785FDC 6.25%, #32D2A0 96.25%)"
                          : "#36373E",
                    },
                    boxShadow:
                      "0 0 20px rgba(120, 95, 220, 0.8), 0 0 30px rgba(50, 210, 160, 0.6)",
                    "&.Mui-disabled": {
                      background: "#36373E",
                      color: "rgba(255, 255, 255, 0.5)",
                    },
                    fontFamily: albertFontNormal.fontFamily,
                  }}
                  type="submit"
                  variant="contained"
                  disabled={
                    !formikSignup.values.username ||
                    !formikSignup.values.password ||
                    !formikSignup.values.email ||
                    formikSignup.errors.email ||
                    !privacyPolicy
                  }
                >
                  {formikSignup.values.username &&
                  formikSignup.values.password &&
                  formikSignup.values.email &&
                  !formikSignup.errors.email &&
                  privacyPolicy
                    ? "JOIN THE METAVERSE"
                    : "SIGN UP"}
                </Button>
                <div
                  className={`${albertFontNormal.className} flex items-center justify-center font-normal text-base text-white`}
                  onClick={() => setMethod("login")}
                >
                  Already have an account?
                  <b className={`${albertFont.className}`}>
                    &nbsp;<u>LOG IN HERE</u>
                  </b>
                </div>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Login;
