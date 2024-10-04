import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState("transparent");

  return (
    <NavbarContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </NavbarContext.Provider>
  );
};
