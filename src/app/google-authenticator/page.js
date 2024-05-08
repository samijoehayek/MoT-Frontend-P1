"use client";
import React, { useEffect, useState } from "react";
import qrCode from "qrcode";
import { authenticator } from "otplib";
import Image from "next/image";
import { getUserByJWT } from "@/axios";

const GoogleAuthenticator = () => {
  const [qrImage, setQrImage] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [secret, setSecret] = useState("");
  const [otp, setOtp] = useState("");

  const generateSecret = async () => authenticator.generateSecret();
  const verifyOTP = (secret, otp) =>
    authenticator.verify({ secret, token: otp });

  const getUser = () => {
    return getUserByJWT(localStorage.getItem("token"));
  };

  const generateQRCode = async (secret, username) => {
    const otpauth = authenticator.keyuri(username, "MT+Metaverse", secret);
    try {
      const qr = await qrCode.toDataURL(otpauth);
      setQrImage(qr);
      return qr;
    } catch {
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = verifyOTP(secret, otp);
    setIsValid(isValid);
  };

  useEffect(() => {
    generateSecret().then((secret) => {
      setSecret(secret);
      getUser().then((res) => {
        generateQRCode(secret, res.username);
      });
    });
  }, []);

  return (
    <>
      <div>
        {qrImage && (
          <Image src={qrImage} width={240} height={240} alt="QRCode"></Image>
        )}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <label>Enter OTP:</label>
          <button type="submit">Verify OTP</button>
        </form>
        {isValid ? <p>OTP is valid!</p> : <p>OTP is invalid.</p>}
      </div>
    </>
  );
};

export default GoogleAuthenticator;
