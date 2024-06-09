import React from "react";
import styles from "../../styles/Community/CommunityText.module.css"

function CommunityText(props){
    const { title, text } = props;
    return(
        <div className={styles['text-container']}>
            <p className={styles['title']}>{title}</p>
            <p className={styles['text']}>{text}</p>
        </div>
    )
}
export default CommunityText;