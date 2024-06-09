import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/Community/Worried.module.css"

function CommentNum(){
    return(
        <div className={styles['comment']}>
            <Icon icon="mage:message-dots-round" />
            <p>4</p>
        </div>
    )
}
export default CommentNum;