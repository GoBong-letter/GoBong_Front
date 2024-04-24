import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../commponents/Button';
import styles from '../../styles/Join/Join.module.css';
import Num from '../../commponents/Join/Num';
import Info from '../../commponents/Join/Info';
import Input from '../../commponents/Join/Input';

function Join() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showWarning, setShowWarning] = useState(false);

    const navigate = useNavigate();

    const areInputsValid = () => {
        return nickname.trim() !== '' && password.trim() !== '' && email.trim() !== '';
    };

    const handleNext = () => {
        if (areInputsValid()) {
            console.log('회원 정보:', { nickname, password, email });
            navigate('/JoinProfile');
        } else {
            setShowWarning(true);
        }
    };

    return (
        <div className={styles["joinContainer"]}>
            <div className={styles['joinBox']}>
                <Num/>
                <Info text1="기본 정보를 입력해주세요!" text2="회원가입에 필요 기본 정보예요"/>
                <div className={styles["inputContainer"]}>
                    <Input text1="닉네임" text2="닉네임 입력" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    <Input text1="비밀번호" text2="비밀번호 입력" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input text1="이메일" text2="이메일 입력" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>

            <Button text="다음" onClick={handleNext} disabled={!areInputsValid()} />
        </div>
    )
}

export default Join;
