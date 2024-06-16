import React, { useState, useContext } from "react";
import Box from "./Box";
import Nav from "../Nav";
import Button from "../Button";
import styles from "../../styles/community/CommunityWrite.module.css";
import axios from "axios";
import { JoinContext } from "../../pages/join/JoinProvider";

function CommunityWrite({ onUpload }) {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const { userId } = useContext(JoinContext);

  console.log(userId);
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleContentChange = (event) => {
    setContentValue(event.target.value);
  };

  const UploadWorried = async () => {
    const req = {
      user_id: userId,
      title: titleValue,
      content: contentValue,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/community`,
        req
      );
      console.log(response.data);

      if (response.status === 200) {
        console.log(response.data);
        onUpload(); // 성공적으로 업로드된 후 onUpload 호출
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className={styles["write-container"]}>
        <input
          placeholder="고민 제목을 작성해주세요"
          className={styles["input-style"]}
          value={titleValue}
          onChange={handleTitleChange}
        />
        <textarea
          style={{ whiteSpace: "pre-wrap" }}
          placeholder="고민 내용을 작성해주세요"
          className={styles["textarea-style"]}
          value={contentValue}
          onChange={handleContentChange}
        ></textarea>
        <Button text="업로드" onClick={UploadWorried} />
      </div>
      <Box />
      <Nav />
    </div>
  );
}

export default CommunityWrite;
