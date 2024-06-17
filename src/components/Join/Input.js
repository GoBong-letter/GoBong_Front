import React, { useState } from "react";
import styles from "../../styles/join/Input.module.css";

function Info(props) {
  const { text1, text2, type, value, onChange, ...rest } = props;

  return (
    <div className={styles["inputContainer"]}>
      <span className={styles["textStyle"]}>{text1}</span>
      <input
        className={styles["inputStyle"]}
        placeholder={text2}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Info;
