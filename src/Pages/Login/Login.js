import React from "react";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import styles from "../../styles/Login/Login.module.css";

function Login() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <img
        className={styles["background-img"]}
        alt="login_img"
        src="/images/loginImg.png"
      />
      <div className={styles["gradient"]}></div>
      <div className={styles["loginBox"]}>
        <div className={styles["infoContainer"]}>
          <p style={{ margin: "0" }}>
            <span style={{ fontWeight: "bold" }}>익명</span>의 누군가에게 전하는
            나의 편지
          </p>
          <Logo />
        </div>
        <Button text="로그인" onClick={() => handleClick("/LoginPage")} />
        <div>
          <p style={{ fontSize: "14px" }}>
            아직 회원이 아니라면?{" "}
            <span
              onClick={() => handleClick("/Join")}
              style={{
                color: "var(--primary-color)",
                textDecoration: "underline",
              }}
            >
              회원가입 바로가기
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
