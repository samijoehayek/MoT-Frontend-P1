'use client';

import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [passwordChangedBC, setPasswordChangedBC] = useState(false);
  const [english, setEnglish] = useState(true);

  return (
    <AppContext.Provider value={{ passwordChangedBC, setPasswordChangedBC, english, setEnglish }}>
      {children}
    </AppContext.Provider>
  );
};