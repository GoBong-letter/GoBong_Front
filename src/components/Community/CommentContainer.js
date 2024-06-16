import React from "react";
import Comment from "./Comment";
import styles from "../../styles/community/Worried.module.css";

function CommentContainer({ comment = [] }) {
  return (
    <div className={styles["comment-container"]}>
      {comment.map((commentItem, index) => (
        <Comment
          key={index}
          name={commentItem.user.nickname}
          text={commentItem.content}
          index={index}
        />
      ))}
      <div className={styles["spacer"]}></div>
    </div>
  );
}

export default CommentContainer;
