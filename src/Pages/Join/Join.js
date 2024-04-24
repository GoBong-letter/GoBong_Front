import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Button from '../../commponents/Button';
import styles from '../../styles/Join/Join.module.css'
import Num from '../../commponents/Join/Num'
import Info from '../../commponents/Join/Info';
import Input from '../../commponents/Join/Input'

function Join() {

    return (
        <div  style={{display:"flex", flexDirection:"column", alignItems:"center", height:"100%"}}>
            <div  style={{display:"flex", flexDirection:"column", alignItems:"start",width:"calc(100% - 58px)"}}>
                <Num/>
                <Info text1="기본 정보를 입력해주세요!" text2="회원가입에 필요 기본 정보예요"/>
                <div className={styles["inputContainer"]}>
                    <Input text1="닉네임" text2="닉네임 입력" type="text"/>
                    <Input text1="비밀번호" text2="비밀번호 입력" type="password"/>
                    <Input text1="이메일" text2="이메일 입력" type="email"/>
                </div>
            </div>

            <Button text="다음"/>
        </div>
    )
}

export default Join;