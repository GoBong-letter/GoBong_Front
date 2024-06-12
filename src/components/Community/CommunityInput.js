import React, { useContext, useState } from "react";
import { Icon } from '@iconify/react';
import styles from "../../styles/Community/CommunityText.module.css";
import axios from "axios";
import { JoinContext } from "../../pages/Join/JoinProvider";

function CommunityInput({ postId, refreshComments }) {
    const { userId } = useContext(JoinContext);
    const [content, setContent] = useState(""); 
    const [comment, setComment] = useState();

    const SendComment = async () => {
        const req = {
            post_id: postId,
            user_id: userId,
            content: content
        };

        console.log("Request:", req); 

        try {
            const res = await axios.post(`${process.env.REACT_APP_HOST}/community/comment`, req);
            console.log("Response:", res);
            if (res.status === 200) {
                setComment(res.data);
                setContent("");
                refreshComments();
                console.log("댓글보내기", res.data);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleInputChange = (event) => {
        setContent(event.target.value);
    };

    return (
        <div className={styles['input-container']}>
            <div style={{ display: "flex" }}>
                <input 
                    className={styles['input-style']} 
                    value={content}
                    onChange={handleInputChange} 
                />
                <Icon icon="gravity-ui:paper-plane" className={styles['send']} onClick={SendComment} />
            </div>
        </div>
    );
}

export default CommunityInput;
