import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/effect-creative';

import styles from "../../styles/Community/CommunityContent.module.css";
import CommunityProfile from "./CommnuityProfile";
import CommunityText from "./CommunityText";
import Nav from "../Nav"
import CommentContainer from "./CommentContainer"
import CommunityInput from "./CommunityInput";
import { EffectCreative } from 'swiper/modules';

function CommunityContent() {
  return (
    <div className={styles['content']}>
      <Swiper
        grabCursor={true}
        effect={'creative'}
        trans
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
        id={styles['swiper']}
      >
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['contentbox']}>
                <div className={styles['box']}>box</div>
                <CommunityProfile />
                <CommunityText title="저를 팔로우한 남자애가 있는데 저를 좋아하면 어떡하죠? ㅠㅠ" text="하 ㅜㅜ 곤란곤란 살짝 투어스 도훈닮았는데;; 저는 솔직히 제 취향이 아니거든요? ㅋㅋ;;; 제 취향은 약간 손아섭? 하 이거 어떡하죠? 진짜 곤란해요 ㅠ 인기녀의 삶이란..? 이런걸까요? 제 고민좀 상담해주세요 ㅜ"/>
                <div style={{border:"1px solid var(--sub-color", margin:"7% 0%"}}></div>
                <CommentContainer />
            </div>
        </SwiperSlide>
      </Swiper>
      <CommunityInput />

      <Nav />
    </div>
  );
}
export default CommunityContent;