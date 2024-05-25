import React from 'react';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Back.module.css'

function Back(props) {
  const { onClick, text } = props;
  const location = useLocation();

  return (
    <div className={styles['backContainer']}>
        <Icon icon="formkit:left"/>
        <p>{text}</p>
    </div>
  );
}

export default Back;

// import React from "react";
// import { SlArrowLeft } from "react-icons/sl";
// import styles from '../styles/Back.module.css'
// import { Icon } from '@iconify/react';

// function Back({ text }) {
//     const handleGoBack = () => {
//         window.history.back();
//     };

//     return (
//         <nav className={styles['header']}>
//             <div className={styles['navContainer']}>
//                 <Icon icon="formkit:left" onClick={handleGoBack}/>
//             </div>
//             <div className={styles['joinText']}> <p>{text}</p> </div>
//         </nav>
//     )
// }

// export default Back;