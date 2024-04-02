'use client';

import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [passwordChangedBC, setPasswordChangedBC] = useState(false);

  return (
    <AppContext.Provider value={{ passwordChangedBC, setPasswordChangedBC }}>
      {children}
    </AppContext.Provider>
  );
};