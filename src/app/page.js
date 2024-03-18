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
} from "@mui/material";
import { useRouter } from "next/navigation";
import { signup, login } from "@/axios";
import GoogleLogin from "@/components/google-login/google-login";
import EmailConfirmationModal from "@/components/email-confirmation-modal/email-confirmation-modal";

export default function Home() {
  const [method, setMethod] = useState("login");
  const [loginError, setLoginError] = useState(false);
  const [emailConfirmationModal, setEmailConfirmationModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
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
    const verificationString = urlParams.get("token");
    if(verificationString){
      localStorage.setItem("token", token);
      document.cookie = `token=${token}`;
      router.push("/dashboard");
    }
  }, [])
  

  return (
    <>
      <Head>
        {method === "login" ? <title>Login</title> : <title>Sign Up</title>}
      </Head>
      <EmailConfirmationModal
        email={userEmail}
        open={emailConfirmationModal}
        onClose={() => {
          setEmailConfirmationModal(false);
        }}
      />

      <Box
        sx={{
          //   backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
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
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              {method === "login" ? (
                <Typography variant="h4" className="text-black">
                  Login
                </Typography>
              ) : (
                <Typography variant="h4" className="text-black">
                  Sign Up
                </Typography>
              )}
            </Stack>
            <Tabs sx={{ mb: 3 }} value={method}>
              <Tab
                label="Login"
                value="login"
                onClick={() => {
                  setMethod("login");
                }}
              />
              <Tab
                label="Sign Up"
                value="signup"
                onClick={() => {
                  setMethod("signup");
                }}
              />
            </Tabs>
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
                    autoComplete="off"
                    // autoFocus={true}
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
                    type="password"
                    value={formik.values.password}
                    // autoComplete="off"
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                {loginError ? (
                  <div>
                    <p className="text-red-500 text-sm mb-0">
                      Wrong credentials
                    </p>
                  </div>
                ) : null}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3, backgroundColor: "black !important" }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
                <Divider
                  sx={{
                    backgroundColor: "gray", // Set background color to black
                    height: "1px", // Set the height of the divider
                    margin: "16px 0", // Add margin top and bottom
                  }}
                />
                <GoogleLogin />

                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    If you dont have an account, please <b>sign up</b>
                  </div>
                </Alert>
              </form>
            )}
            {method === "signup" && (
              <form noValidate onSubmit={formikSignup.handleSubmit}>
                <Stack spacing={3}>
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
                    value={formikSignup.values.username}
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
                    type="password"
                    value={formikSignup.values.password}
                  />
                  <TextField
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
                  />
                </Stack>
                {formikSignup.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formikSignup.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3, backgroundColor: "black !important" }}
                  type="submit"
                  variant="contained"
                >
                  Sign Up
                </Button>
                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    If you already have an account, please <b>log in</b>
                  </div>
                </Alert>
              </form>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
}
