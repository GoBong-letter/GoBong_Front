import React from "react";
import { Icon } from '@iconify/react';
import styles from "../../styles/Community/CommunityText.module.css"

function CommunityInput() {
    return(
        <div className={styles['input-container']}>
            <div style={{display:"flex"}}>
                <input className={styles['input-style']}></input>
                <Icon icon="gravity-ui:paper-plane" className={styles['send']}/>
            </div>
        </div>
    )
}
export default CommunityInput;