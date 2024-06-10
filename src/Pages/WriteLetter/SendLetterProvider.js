import React, { createContext, useState } from "react";
export const sendLetterContext = createContext();

function SendLetterProvider({ children }) {
  const [title, setTitle] = useState(null);
  const saveData = (title) => {
    setTitle(title);
  };
  return (
    <sendLetterContext.Provider value={{ title, saveData }}>
      {children}
    </sendLetterContext.Provider>
  );
}
export default SendLetterProvider;
