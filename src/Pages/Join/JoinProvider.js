// import React, { createContext, useState, useEffect } from "react";

// export const JoinContext = createContext();

// function JoinProvider({ children }) {
//   const [nickname, setNickname] = useState("");
//   const [password, setPassword] = useState("");
//   const [category, setCategory] = useState([]);
//   const [email, setEmail] = useState("");
//   const [image, setImage] = useState("");
//   const [userId, setUserId] = useState();
//   const [letterId, setLetterId] = useState();
//   const [envelope, setEnvelope] = useState("");
//   const [letterCover, setLetterCover] = useState(0);

//   useEffect(() => {
//     const storedId = localStorage.getItem("nickName");
//     const storedImage = localStorage.getItem("image");
//     const storedCategory = localStorage.getItem("category");

//     if (storedId) {
//       setNickname(storedId);
//     }
//     if (storedImage) {
//       setImage(storedImage);
//     }
//     if (storedCategory) {
//       setCategory(storedCategory);
//     }
//   }, []);

//   console.log("닉네임",nickname);
//   console.log("이미지",image);
//   console.log("카테고리",category);
//   const GetUserInfo = (nickname, image, category) => {
//     setNickname(nickname);
//     setImage(image);
//     setCategory(category);
//   };

//   const UserInfo = (nickname, password, email) => {
//     setNickname(nickname);
//     setPassword(password);
//     setEmail(email);
//   };

//   const UserProfile = (image) => {
//     setImage(image);
//   };

//   const SetEnvelope = (envelope) => {
//     setEnvelope(envelope);
//   };

//   return (
//     <JoinContext.Provider
//       value={{
//         userId,
//         nickname,
//         password,
//         email,
//         image,
//         category,
//         UserInfo,
//         setImage,
//         setCategory,
//         UserProfile,
//         setUserId,
//         setNickname,
//         GetUserInfo,
//         envelope,
//         SetEnvelope,
//         letterCover,
//         setLetterCover,
//       }}
//     >
//       {children}
//     </JoinContext.Provider>
//   );
// }

// export default JoinProvider;

import React, { createContext, useState, useEffect } from "react";

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
        setImage,
        setCategory,
        UserProfile,
        setUserId,
        setNickname,
        GetUserInfo,
        envelope,
        SetEnvelope,
        letterCover,
        setLetterCover,
      }}
    >
      {children}
    </JoinContext.Provider>
  );
}

export default JoinProvider;