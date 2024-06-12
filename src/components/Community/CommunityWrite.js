import React, { useState, useContext } from "react";
import Box from "./Box";
import Nav from "../Nav";
import Button from "../Button"
import styles from "../../styles/Community/CommunityWrite.module.css"
import axios from "axios";
import { JoinContext } from "../../pages/Join/JoinProvider";


function CommunityWrite(){
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");
    const { userId } = useContext(JoinContext);

    console.log(userId)
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
            content: contentValue
        };
        try {
          const response = await axios.post(`${process.env.REACT_APP_HOST}/community`, {
            user_id: userId,
            title: titleValue,
            content: contentValue 
          });
          console.log(response.data);

    
          if (response.status === 200) {
            console.log(response.data);
          }
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <div>
            <div className={styles['write-container']}>
                <input
                    placeholder="고민 제목을 작성해주세요"
                    className={styles['input-style']}
                    value={titleValue} 
                    onChange={handleTitleChange} 
                />
                <textarea
                    placeholder="고민 내용을 작성해주세요"
                    className={styles['textarea-style']}
                    value={contentValue} 
                    onChange={handleContentChange}
                ></textarea>
                <Button text="업로드" onClick={UploadWorried}/>
            </div>
            <Box />
            <Nav />
        </div>
    )
}
export default CommunityWrite;
