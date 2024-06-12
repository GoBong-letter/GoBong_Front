import React, { useState, useContext } from "react";
import { JoinContext } from "../../pages/Join/JoinProvider";
import { Icon } from '@iconify/react';
import axios from 'axios';

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

  const { image } = useContext(JoinContext);
  const profiles = [
    { src: '/images/chajo.png', alt: 'chajo', text: '차조밥' },
    { src: '/images/rice.png', alt: 'rice', text: '쌀밥' },
    { src: '/images/black.png', alt: 'black', text: '흑미밥' },
    { src: '/images/bean.png', alt: 'bean', text: '콩밥' },
    { src: '/images/multi_grain.png', alt: 'multi_grain', text: '잡곡밥' }
  ];

  const [selectedProfile, setSelectedProfile] = useState(() => {
    return profiles.find(profile => profile.alt === image) || profiles[0];
  });

  const handleClick = (profile) => {
    setSelectedProfile(profile);
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
            clicked={profile.alt === selectedProfile.alt}
            onClick={() => handleClick(profile)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileContainer;
