import React from 'react';
import { Icon } from '@iconify/react';
import styles from '../../styles/Home.module.css'
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate();

    const handleNext = () => {
      navigate('/alram');
    };

    return (
        <div className={styles['headerStyle']}>
            <h1 className={styles['logo']}>GO<span style={{color: "var(--primary-color)", fontFamily:"var(--logo-font)"}}>BONG</span></h1>
            <Icon icon="heroicons-solid:bell" style={{fontSize:"24px", color:"#C7C8CB"}}  onClick={handleNext}/>
        </div>
    )
}

export default Header;