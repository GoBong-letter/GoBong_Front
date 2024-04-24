import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function Profile({ src, alt, text, onClick, clicked }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "24vw",
          cursor: 'pointer'
        }}
        onClick={onClick} // 클릭 이벤트 핸들러
      />
      {clicked && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "24vw",
            height: "24vw",
            backgroundColor: "rgba(0, 0, 0, 58%)", // 반투명한 검정색 배경
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon icon="bi:check" style={{ color: "#FFF", fontSize: "58px" }} />
        </div>
      )}
      <p style={{ margin: "7px 0", fontWeight: "bold", fontSize: "12px" }}>{text}</p>
    </div>
  );
}

function ProfileContainer() {
  const [clickedIndex, setClickedIndex] = useState(null); // 클릭된 프로필의 인덱스를 상태로 관리합니다.

  // 이미지 클릭 핸들러 함수
  const handleClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index); // 클릭된 프로필의 인덱스를 업데이트합니다.
  };

  // 이미지 정보를 담은 배열
  const profiles = [
    { src: 'images/cj.png', alt: '차조밥', text: '차조밥' },
    { src: 'images/ssal.png', alt: '쌀밥', text: '쌀밥' },
    { src: 'images/hek.png', alt: '흑미밥', text: '흑미밥' },
    { src: 'images/cong.png', alt: '콩밥', text: '콩밥' },
    { src: '/images/jab.png', alt: '잡곡밥', text: '잡곡밥' }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", rowGap:"30px" }}>
      <div style={{ display: "flex", columnGap:"23px" }}>
        {profiles.slice(0, 3).map((profile, index) => (
          <Profile
            key={index}
            src={profile.src}
            alt={profile.alt}
            text={profile.text}
            clicked={index === clickedIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div style={{ display: "flex", columnGap:"23px" }}>
        {profiles.slice(3).map((profile, index) => (
          <Profile
            key={index + 3} // 키를 고유하게 설정하기 위해 인덱스에 3 더함
            src={profile.src}
            alt={profile.alt}
            text={profile.text}
            clicked={(index + 3) === clickedIndex}
            onClick={() => handleClick(index + 3)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileContainer;
