import React from "react";
import styles from "../../styles/Community/Comment.module.css";

function Comment({ name, text, index }) {
    const alignment = index % 2 === 0 ? "flex-start" : "flex-end";
    const boxStyle = {
        borderRadius: index % 2 === 0 ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
        alignSelf: alignment,
    };

    return (
        <div className={styles['comment-box']} style={boxStyle}>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    );
}

export default Comment;
