import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/Community/Worried.module.css";

function CommentNum({ commentCount }) {
  return (
    <div className={styles["comment"]}>
      <Icon icon="mage:message-dots-round" />
      <p>{commentCount}</p>
    </div>
  );
}
export default CommentNum;
