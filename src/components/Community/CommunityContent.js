import React, { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-creative';
import styles from "../../styles/Community/CommunityContent.module.css";
import CommunityProfile from "./CommnuityProfile";
import CommunityText from "./CommunityText";
import Nav from "../Nav";
import CommentContainer from "./CommentContainer";
import CommunityInput from "./CommunityInput";
import { EffectCreative } from 'swiper/modules';
import axios from "axios";

function CommunityContent() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/community`);
      if (res.status === 200) {
        console.log(res.data);
        setPosts(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const refreshPosts = async () => {
    await getPosts();
  };

  return (
    <div className={styles['content']}>
      <Swiper
        grabCursor={true}
        effect={'creative'}
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
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className={styles['contentbox']}>
              <div className={styles['box']}>box</div>
              <CommunityProfile createdAt={post.createdAt} profile={post.User.image} nickname={post.User.nickname} />
              <CommunityText title={post.title} text={post.content} />
              <div style={{border:"1px solid var(--sub-color)", margin:"7% 0%"}}></div>
              <CommentContainer comment={post.comments} />
              <CommunityInput postId={post.id} refreshPosts={refreshPosts} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{position:"absolute", bottom:"0", height:"88.5vh", backgroundColor:"white", width:"100vw", color:"white", borderRadius:"30px"}}>ds</div>
      <Nav />
    </div>
  );
}
export default CommunityContent;
