"use client";
import React, { useEffect, useState } from "react";
import qrCode from "qrcode";
import { authenticator } from "otplib";
import Image from "next/image";

const GoogleAuthenticator = () => {
  const [qrImage, setQrImage] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [secret, setSecret] = useState('');
  const [otp, setOtp] = useState('');
  const generateSecret = () => authenticator.generateSecret();
  const verifyOTP = (secret, otp) =>
    authenticator.verify({ secret, token: otp });

  const generateQRCode = async (secret) => {
    const otpauth = authenticator.keyuri("user", "service", secret);
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
    const secret = generateSecret();
    setSecret(secret);
    generateQRCode(secret);
  }, []);
  return (
    <>
      <div>
        <Image src={qrImage ? qrImage : ""} width={240} height={240}></Image>
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
