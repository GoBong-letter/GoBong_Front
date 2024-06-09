import React, { createContext, useState } from "react";
export const sendLetterContext = createContext();

function SendLetterProvider({ children }) {
  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState([]);
  const saveData = (title, category) => {
    setTitle(title);
    setCategory(category);
  };
  return (
    <sendLetterContext.Provider value={{ title, category, saveData }}>
      {children}
    </sendLetterContext.Provider>
  );
}
export default SendLetterProvider;
