"use client"
import React, { createContext, useState } from "react";

const oo = createContext();

const ContextOverlay = ({ children }) => {
  const [overlay, setOverlay] = useState(false);

  return <oo.Provider value={{ overlay, setOverlay }}>{children}</oo.Provider>;
};

export { ContextOverlay, oo };
