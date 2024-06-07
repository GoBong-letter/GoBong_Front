import React, { useState } from "react";
import Box from "./Box";
import Nav from "../Nav";
import Button from "../Button"
import styles from "../../styles/Community/CommunityWrite.module.css"

function CommunityWrite(){
    const [content, setContent] = useState("");

    const handleTextareaChange = (event) => {
        setContent(event.target.value);
    };

    return(
        <div>
            <div className={styles['write-container']}>
                <input placeholder="고민 제목을 작성해주세요" className={styles['input-style']}></input>
                <textarea
                    placeholder="고민 내용을 작성해주세요"
                    className={styles['textarea-style']}
                    value={content}
                    onChange={handleTextareaChange}
                ></textarea>
                <Button text="업로드" />
            </div>
            <Box />
            <Nav />
        </div>
    )
}
export default CommunityWrite;
