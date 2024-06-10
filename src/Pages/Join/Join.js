import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import styles from "../../styles/Join/Join.module.css";
import Num from "../../components/Join/Num";
import Info from "../../components/Join/Info";
import Input from "../../components/Join/Input";
import { JoinContext } from "./JoinProvider";

function Join() {
  const { UserInfo } = useContext(JoinContext);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const maxLength = 8;

  const navigate = useNavigate();

  const areInputsValid = () => {
    return (
      nickname.trim() !== "" && password.trim() !== "" && email.trim() !== ""
    );
  };

  const handleNext = () => {
    if (areInputsValid()) {
      console.log("회원 정보:", { nickname, password, email });
      UserInfo(nickname, password, email);
      navigate("/joinProfile");
    } else {
      setShowWarning(true);
    }
  };

  const handleChangeNickname = (e) => {
    const input = e.target.value;
    if (input.length <= maxLength) {
      setNickname(input);
    }
  };

  return (
    <div className={styles["joinContainer"]}>
      <div className={styles["joinBox"]}>
        <Num />
        <Info
          text1="기본 정보를 입력해주세요!"
          text2="회원가입에 필요 기본 정보예요"
        />
        <div className={styles["inputContainer"]}>
          <Input
            text1="닉네임"
            text2={`닉네임 입력 (최대 ${maxLength}글자)`}
            type="text"
            value={nickname}
            onChange={handleChangeNickname}
          />
          <Input
            text1="비밀번호"
            text2="비밀번호 입력"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            text1="이메일"
            text2="이메일 입력"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <Button text="다음" onClick={handleNext} disabled={!areInputsValid()} />
    </div>
  );
}

export default Join;
