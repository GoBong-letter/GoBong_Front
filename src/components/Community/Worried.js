import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/community/Worried.module.css";
import CommentNum from "./CommentNum";

function Worried({ onClick, title, commentCount }) {
  return (
    <div className={styles["worried-box"]} onClick={onClick}>
      <p>{title}</p>
      <CommentNum commentCount={commentCount} />
    </div>
  );
}

export default Worried;
