import React from "react";
import styles from "../../styles/Community/CommunityText.module.css";

function CommunityText({ title, text = '' }) {
  const formattedText = text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={styles["community-text"]}>
      <h2 style={{ marginBottom: "15px" }}>{title}</h2>
      <p style={{ lineHeight: "25px", margin: "0" }}>{formattedText}</p>
    </div>
  );
}

export default CommunityText;
