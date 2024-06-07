import React, { useState } from "react";
import Back from "../../commponents/Back";
import Input from "../../commponents/Join/Input"
import styles from "../../styles/MyPage.module.css"
import { Icon } from "@iconify/react";
import Button from "../../commponents/Button";
import ProfilePopup from "./ProfilePopup";

export default function Setting() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleIconClick = () => {
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <div>
            <Back text="내 정보 수정"/>
            <div style={{display:"flex", flexDirection:"column", rowGap:"7vw"}}>
                <div style={{margin:"0 auto", width:"fit-content", position:"relative"}}>
                    <img src="/images/cj.png" alt="profile" className={styles['profile-img']}/>
                    <Icon icon="jam:camera" className={styles['icon']} onClick={handleIconClick} />
                </div>
                <div style={{width:"80vw", margin:"0 auto", display:"flex", flexDirection:"column", rowGap:"5vw"}}>
                    <Input text1="닉네임" value="이해원"></Input>
                    <div style={{textAlign:"end", color:"var(--primary-color)", fontSize:"0.9rem"}}>비밀번호 변경</div>
                </div>
                <Button text="저장" style={{margin:"0 auto"}}/>
            </div>
            {isPopupVisible && <ProfilePopup onClose={handleClosePopup} />}
        </div>
    );
}
