import React, { useState, useEffect } from "react";
import Box from "./Box";
import Nav from "../Nav";
import CommunityText from "./CommunityText";
import styles from "../../styles/community/Worried.module.css";
import CommentNum from "./CommentNum";
import Comment from "./Comment";
import CommentContainer from "./CommentContainer";
import axios from "axios";

function MyWorried({ post }) {
  const [posts, setPosts] = useState([]);

  const GetContent = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_HOST}/community`);
      if (res.status === 200) {
        console.log("나의 뭐시기 그거", res.data);
        const postData = res.data.find((p) => p.id === post.id);
        setPosts(postData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetContent();
  }, []);

  return (
    <div>
      <div className={styles["worried-contaienr"]}>
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "3vw" }}
        >
          <CommunityText title={post.title} text={posts.content} />
          <CommentNum commentCount={post.commentCount} />
          <div style={{ border: "1px solid var(--sub-color" }}></div>
        </div>
        <div>
          <CommentContainer comment={posts.comments} />
        </div>
      </div>
      <Box />
      <Nav />
    </div>
  );
}
export default MyWorried;
