import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import styles from "../../styles/Login/Login.module.css";
import { JoinContext } from "../Join/JoinProvider";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userId, setUserId } = useContext(JoinContext);
  const navigate = useNavigate();

  const areInputsValid = () => {
    return email.trim() !== "" && password.trim() !== "";
  };

  const handleNicknameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/users/login`,
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setUserId(response.data.id);
        localStorage.setItem("id", response.data.id);

        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles["loginGroup"]}>
      <div className={styles["divContainer"]}>
        <div>
          <p style={{ margin: "0" }}>
            <span style={{ fontWeight: "bold" }}>익명</span>의 누군가에게 전하는
            나의 편지
          </p>
          <Logo />
        </div>
        <div style={{ width: "100%" }}>
          <div className={styles["loginContainer"]}>
            <input
              placeholder="이메일 입력"
              type="text"
              className={styles["inputStyle"]}
              value={email}
              onChange={handleNicknameChange}
            />
            <input
              placeholder="비밀번호 입력"
              type="password"
              className={styles["inputStyle"]}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
      </div>

      <Button
        text="로그인"
        onClick={handleLogin}
        disabled={!areInputsValid()}
      />
    </div>
  );
}

export default LoginPage;
