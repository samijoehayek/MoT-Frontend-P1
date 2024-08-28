import React, { useState, useRef, useEffect } from "react";

const TwoFactorInput = ({ setCode, code, otpFailed }) => {
  const inputRefs = useRef([]);
  console.log(otpFailed);
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex items-center space-x-5">
      {code.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={`w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-md focus:outline-none ${
            otpFailed ? "focus:border-red-500 border-red-500" : "focus:border-blue-500 border-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default TwoFactorInput;
