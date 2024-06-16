import React from "react";
import styles from "../styles/Button.module.css";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

function Button(props) {
  const { onClick, text, disabled, icon } = props;
  const location = useLocation();

  const buttonStyle = {
    backgroundColor: disabled ? "#D0D2DA" : "black",
    position:
      location.pathname === "/join" || location.pathname === "/joinProfile"
        ? "absolute"
        : "",
    bottom:
      location.pathname === "/join" ||
      location.pathname === "/joinProfile" ||
      location.pathname === "/joinAbout"
        ? "116px"
        : "",
    width:
      location.pathname === "/home" || location.pathname === "/draw"
        ? "100%"
        : "",
  };

  return (
    <button
      className={styles["button"]}
      onClick={onClick}
      style={buttonStyle}
      disabled={disabled}
    >
      <Icon icon={icon} style={{ marginRight: "8px" }} />
      {text}
    </button>
  );
}

export default Button;
