import React, { createContext, useState } from "react";

export const JoinContext = createContext();

function JoinProvider({ children }) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState([]);
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState();
  const [letterId, setLetterId] = useState();
  const [envelope, setEnvelope] = useState("");
  const [letterCover, setLetterCover] = useState(0);


  const GetUserInfo = (nickname, image, category) => {
    setNickname(nickname);
    setImage(image);
    setCategory(category);
  };

  const UserInfo = (nickname, password, email) => {
    setNickname(nickname);
    setPassword(password);
    setEmail(email);
  };

  const UserProfile = (image) => {
    setImage(image);
  };

  const SetEnvelope = (envelope) => {
    setEnvelope(envelope);
  };

  return (
    <JoinContext.Provider
      value={{
        userId,
        nickname,
        password,
        email,
        image,
        category,
        UserInfo,
        setCategory,
        UserProfile,
        setUserId,
        GetUserInfo,
        envelope,
        SetEnvelope,
        letterCover,
        setLetterCover
      }}
    >
      {children}
    </JoinContext.Provider>
  );
}

export default JoinProvider;
