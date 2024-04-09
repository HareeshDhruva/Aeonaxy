import React, { createContext, useState } from "react";
export const ProgressContext = createContext();

function ProgressContextProvider({ children }) {
  const [progress, setProgress] = useState(20);
  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}
export default ProgressContextProvider;
