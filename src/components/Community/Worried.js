import React from "react";
import { Icon } from "@iconify/react";
import styles from "../../styles/Community/Worried.module.css";
import CommentNum from "./CommentNum";

function Worried({ onClick }) {
    return (
        <div className={styles['worried-box']} onClick={onClick}>
            <p>배에 거지가 들었어요</p>
            <CommentNum />
        </div>
    );
}

export default Worried;
