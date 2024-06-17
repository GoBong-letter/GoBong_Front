import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/GoHome.module.css";

function GoHome() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/home");
  };
  return (
    <div>
      <Icon
        icon="heroicons:home-20-solid"
        className={styles["iconStyle"]}
        onClick={handleNext}
      />
    </div>
  );
}

export default GoHome;
