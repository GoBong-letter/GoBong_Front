import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Button from '../../commponents/Button';
import Logo from '../../commponents/Logo';
import styles from '../../styles/Login/Login.module.css'

function LoginPage() {
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const areInputsValid = () => {
        return nickname.trim() !== '' && password.trim() !== '';
    };

    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNext = () => {
        if (areInputsValid()) {
            console.log('회원 정보:', { nickname, password });
            navigate('/Home');
        } else {
            console.log("정보없음")
        }
    };

    return (
        <div className={styles['loginGroup']}>
            <div className={styles['divContainer']}>
                <div >
                    <p style={{margin:"0"}}><span style={{fontWeight:"bold"}}>익명</span>의 누군가에게 전하는 나의 편지</p>
                    <Logo/>
                </div>
                <div style={{width:"100%"}}>
                    <div className={styles["loginContainer"]}>
                        <input 
                            placeholder='닉네임 입력' 
                            type='text' 
                            className={styles['inputStyle']} 
                            value={nickname}
                            onChange={handleNicknameChange}
                        />
                        <input 
                            placeholder="비밀번호 입력" 
                            type='password' 
                            className={styles['inputStyle']} 
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
            </div>
            
            <Button text="로그인"  onClick={handleNext} disabled={!areInputsValid()}/>
        </div>
    )
}

export default LoginPage;
