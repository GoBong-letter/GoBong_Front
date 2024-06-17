import React, { useContext, useState } from 'react';
import styles from '../../styles/Card.module.css';
import Popup from './CardPopup';
import JoinContext from '../../Pages/Join/JoinProvider'
function CardImg({ cardImg, nickname }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const images = [
    { src: "/images/cards/rice.png", alt: "rice", text: "쌀밥" },
    { src: "/images/cards/bean.png", alt: "bean", text: "콩밥" },
    { src: "/images/cards/egg_soy.png", alt: "egg_soy", text: "간장계란밥" },
    { src: "/images/cards/emelet.png", alt: "emelet", text: "오므라이스" },
    { src: "/images/cards/ham_mayo.png", alt: "ham_mayo", text: "햄마요덮밥" },
    { src: "/images/cards/salmon.png", alt: "salmon", text: "연어덮밥" },
    { src: "/images/cards/bibim.png", alt: "bibim", text: "비빔밥" },
  ];
  console.log("카드이미지", cardImg);

  const letters = [
    {
      name: "rice",
      for: "To.{name}님께",
      body: " 안녕하세요! 고봉이에요 😆\n첫 편지를 쓰셨군요! {name}님의 편지로 누군가는 위로를, 재미를 또는 행복을 받은 하루가 되었어요 :) {name}님은 어떤 편지를 받으셨나요? 또 어떤 하루를 보내셨나요? 앞으로도 고봉이랑 편지 주고받아요!! 언제든지 기다리고 있을게요 🤭",
      color: "#9AAEFF",
    },
    {
      name: "bean",
      for: "To.{name}님께",
      body: "안녕하세요! 고봉이에요 😆\n이제 점점 편지들이 쌓이기 시작했겠네요! 쌓이는 편지만큼 {name}님의 행복도 고봉밥처럼 가득가득 쌓이면 좋겠어요 ㅎㅎ 뭔가 편지를 쓰면 쓸수록 뿌듯한 마음도 커지지 않나요? 이게 편지의 매력인 것 같아요! {name}님과 편지를 쓸 수 있어서 정말 정말 행복해요 :)",
      color: "#FFE5A0",
    },
    {
      name: "egg_soy",
      for: "To.{name}님께",
      body: "안녕하세요! 고봉이에요😆\n익명이들을 위한 30통의 편지를 쓰면서 어떤 변화가 있었나요? 고봉이는 {name}님과 함께 편지를 쓰면서 큰 힘을 얻었답니다:) {name}님이 정성들여 쓰신 편지들은 익명이들에게 따뜻한 힘이 되었을 거에요☺️ 앞으로도 고봉이와 함께 열심히 편지 써봐요!",
      color: "#FFBFE9",
    },
    {
      name: "emelet",
      for: "To.{name}님께",
      body: "안녕하세요! 고봉이에요 😆\n익명이들을 위해 벌써 편지를 50개나 쓰셨다니! 정말 고마워요 :) 덕분에 익명이들뿐만 아니라 고봉이도 더 성장할 수 있었어요. 😍 {name}님은 익명이들에게도, 고봉에게도 큰 힘이 되는 정말 멋있는 사람이에요! 앞으로도 함께 따뜻한 세상 만들 수 있기를 기대할게요! 😚",
      color: "#A5E1A3",
    },
    {
      name: "ham_mayo",
      for: "To.{name}님께",
      body: " 안녕하세요! 고봉이에요 😆\n우와!! 벌써 편지를 100개나 쓰셨군요!\n고봉이와 함께 100개의 편지를 쓰면서, 혹은 받으면서 {name}님과 익명이들의 \n마음이 한층 더 따뜻해졌길 바라요 :) 지금까지 고봉이랑 함께해줘서 고마워요 앞으로 익명이들과 주고받은 편지가 1000개, 10000개가 될때까지 고봉이와 함께 해주실거죠? 고봉이가 응원할게요!! ㅎㅎ",
      color: "#DBC5FF",
    },
    {
      name: "salmon",
      for: "To.{name}님께",
      body: "안녕하세요! 고봉이에요😆\n어느덧 고봉 편지와 함께 쓴 편지가 무려 200통이 되었네요! 수백 통의 편지를 쓰고, 여러 익명이들과 교류해 오면서 어떤 일들이 있었나요? 위로를 받았나요? 혹은 힘을 얻었나요? 고봉편지에서 있었던 일들이 {name}님께 위로가 되고 힘이 되었길, 좋은 추억으로 남았길 바라요 {name}님의 기억 한 켠에 좋은 기억으로 고봉이 남을 수 있다면 정말 기쁠 것 같아요 쭉 고봉과 함께 더 좋은 기억을 남겨봐요! 오늘 하루도 좋은 하루이길 바라요☺️",
      color: "#FFB3B3",
    },
    {
      name: "bibim",
      for: "To.{name}님께",
      body: "안녕하세요! 고봉이에요 😆\n고봉 편지를 오랜 시간 동안 애용해주셔서\n 너무너무 고마워요!😆 {name}님 덕분에 500명의 익명이들이 따뜻한 위로와 응원을 얻어 감사하다고 전해달래요! :) {name}님이 500명의 익명이들을 웃게 해준 만큼 고봉도 {name}님에게 힘이 될 수 있도록 늘 노력할게요! 앞으로도 고봉편지와 함께 더 따뜻한 세상 만들어가요! 😉세상에서 제일 따뜻하고 행복한 하루 보내세요 :)",
      color: "#FFC793",
    },
  ];

  const filteredImages = images
    .map((image) => {
      if (cardImg.includes(image.alt)) {
        return image;
      }
      return null;
    })
    .filter((image) => image !== null);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    setPopupVisible(!isPopupVisible);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setIsFlipped(false);
  };

  const filteredLetters = letters
    .filter((letter) => letter.name === cardImg)
    .map((letter) => {
      const modifiedFor = letter.for.replace("{name}", nickname);
      const modifiedBody = letter.body
        .replaceAll("{name}", nickname)
        .split("\n")
        .map((line) => (
          <span>
            {line}
            <br />
          </span>
        ));
      return { ...letter, for: modifiedFor, body: modifiedBody };
    });

  return (
    <>
      {cardImg
        ? filteredImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
              onClick={handleCardClick}
            >
              <div className={styles["card-inner"]}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles["card-front"]}
                />
                <div className={styles["card-back"]}>
                  <div>획득</div>
                </div>
              </div>
            </div>
          ))
        : []}
      {isPopupVisible && (
        <Popup
          isVisible={true}
          onClose={handleClosePopup}
          nickname={nickname}
          letter={filteredLetters[0]}
        />
      )}
    </>
  );
}

export default CardImg;
