import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function Profile({ src, alt, text, onClick, clicked }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "15vw",
          cursor: 'pointer'
        }}
        onClick={onClick}
      />
      {clicked && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "15vw",
            height: "15vw",
            backgroundColor: "rgba(0, 0, 0, 58%)",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Icon icon="bi:check" style={{ color: "#FFF", fontSize: "38px" }} />
        </div>
      )}
      <p style={{ margin: "7px 0", fontWeight: "bold", fontSize: "12px" }}>{text}</p>
    </div>
  );
}

function ProfileContainer() {
  const profiles = [
    { src: 'images/cj.png', alt: '차조밥', text: '차조밥' },
    { src: 'images/ssal.png', alt: '쌀밥', text: '쌀밥' },
    { src: 'images/hek.png', alt: '흑미밥', text: '흑미밥' },
    { src: 'images/cong.png', alt: '콩밥', text: '콩밥' },
    { src: '/images/jab.png', alt: '잡곡밥', text: '잡곡밥' }
  ];

  const [clickedIndex, setClickedIndex] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  const handleClick = (index) => {
    setClickedIndex(index);
    setSelectedProfile(profiles[index]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {selectedProfile && (
        <div style={{ marginBottom: "12px", textAlign: "center" }}>
          <img
            src={selectedProfile.src}
            alt={selectedProfile.alt}
            style={{
              width: "30vw",
              height: "30vw",
              objectFit: "cover",
              borderRadius: "50%"
            }}
          />
          <p style={{ margin: "7px 0", fontWeight: "bold", fontSize: "16px" }}>{selectedProfile.text}</p>
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", columnGap: "10px", marginBottom:"11px"}}>
        {profiles.map((profile, index) => (
          <Profile
            key={index}
            src={profile.src}
            alt={profile.alt}
            clicked={index === clickedIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileContainer;
