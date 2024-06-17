import React, { useState } from "react";
import styles from "../../styles/Community/Community.module.css";

function SelectList({ onSelectItem }) {
  const [selectedItem, setSelectedItem] = useState("고민보기");

  const handleClick = (item) => {
    setSelectedItem(item);
    onSelectItem(item);
  };

  const getStyle = (item) => {
    return item === selectedItem ? { fontWeight: "bold", color: "black" } : {};
  };

  return (
    <div className={styles["community-list"]}>
      <p onClick={() => handleClick("고민보기")} style={getStyle("고민보기")}>
        고민보기
      </p>
      <p onClick={() => handleClick("고민쓰기")} style={getStyle("고민쓰기")}>
        고민쓰기
      </p>
      <p onClick={() => handleClick("내고민")} style={getStyle("내고민")}>
        내고민
      </p>
    </div>
  );
}

export default SelectList;
