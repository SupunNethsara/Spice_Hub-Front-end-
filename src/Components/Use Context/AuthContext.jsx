import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isloginmodal, setIsloginmodal] = useState(false);
  const [isregistermodal, setIsregistermodal] = useState(false);

  const value = {
    isloginmodal,
    setIsloginmodal,
    isregistermodal,
    setIsregistermodal
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};