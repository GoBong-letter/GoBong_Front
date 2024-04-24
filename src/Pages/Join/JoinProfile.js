import React from 'react';
import { Icon } from '@iconify/react';
import Button from '../../commponents/Button';
import styles from '../../styles/Join/Join.module.css'
import Num from '../../commponents/Join/Num'
import Info from '../../commponents/Join/Info';
import Profile from '../../commponents/Profile';

function JoinProfile() {

    const buttonStyle = {
        position: 'absolute',
        bottom: '116px'
      };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "calc(100% - 58px)" }}>
                <Num />
                <Info text1="해원님의 프로필을 골라보세요!" text2="커뮤니티에 보여질 프로필이에요!" />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "79px auto 0 auto", rowGap: "31px" }}>
                    <div style={{ display: "flex", columnGap: "23px" }}>
                    <Profile/>
                </div>
            </div>
            </div>
            <Button text="다음"  style={buttonStyle} />
        </div>

    )
}


export default JoinProfile;

// import React, { useState } from 'react';
// import { Icon } from '@iconify/react';
// import Button from '../../commponents/Button';
// import Logo from '../../commponents/Logo';
// import styles from '../../styles/Join/Join.module.css'
// import Num from '../../commponents/Join/Num'
// import Info from '../../commponents/Join/Info';
// import Profile from '../../commponents/Profile';
// import cj from '../../images/cj.png'
// import ssal from '../../images/ssal.png';
// import hek from '../../images/hek.png'
// import cong from '../../images/cong.png'
// import jab from '../../images/jab.png'

// function JoinProfile() {
//     const [selectedProfileIndex, setSelectedProfileIndex] = useState(null);

//     const buttonStyle = {
//         position: 'absolute',
//         bottom: '116px'
//     };

//     const handleProfileClick = (index) => {
//         setSelectedProfileIndex(index);
//     };

//     const handleNextButtonClick = () => {
//         setSelectedProfileIndex(null);
//         // 다음 단계로 이동하는 로직을 추가할 수 있습니다.
//     };

//     return (
//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", position: "relative" }}>
//             <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width: "calc(100% - 58px)" }}>
//                 <Num />
//                 <Info text1="해원님의 프로필을 골라보세요!" text2="커뮤니티에 보여질 프로필이에요!" />
//                 <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "79px auto 0 auto", rowGap: "31px" }}>
//                     <div style={{ display: "flex", columnGap: "23px" }}>
//                         <Profile src={cj} text="차조밥" onClick={() => handleProfileClick(0)} isSelected={selectedProfileIndex === 0} />
//                         <Profile src={ssal} text="쌀밥" onClick={() => handleProfileClick(1)} isSelected={selectedProfileIndex === 1} />
//                         <Profile src={hek} text="흑미밥" onClick={() => handleProfileClick(2)} isSelected={selectedProfileIndex === 2} />
//                     </div>
//                     <div style={{ display: "flex", columnGap: "23px" }}>
//                         <Profile src={cong} text="콩밥" onClick={() => handleProfileClick(3)} isSelected={selectedProfileIndex === 3} />
//                         <Profile src={jab} text="잡곡밥" onClick={() => handleProfileClick(4)} isSelected={selectedProfileIndex === 4} />
//                     </div>
//                 </div>
//             </div>

//             <Button text="다음" className={styles['btnPosition']} onClick={handleNextButtonClick} />
//         </div>
//     );
// }

// export default JoinProfile;
