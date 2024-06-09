import React from "react";
import Comment from "./Comment";
import styles from "../../styles/Community/Worried.module.css"

function CommentContainer(){
    const comments = [
        { name: "안녕", text: "키 크려는 거 아님? 나도 요즘 그럼 ㅠ" },
        { name: "울지마바보야", text: "나 거지인데 니 배에 든 거 나 맞다" },
        { name: "돼지얌", text: "음 그냥 니가 돼지인듯?" },
        { name: "봉구보고싶다", text: "걍 먹어 ㄱㅊ 나중에 다 빠져 ~~~~~" },
        { name: "봉구보고싶다", text: "걍 먹어 ㄱㅊ 나중에 다 빠져 ~~~~~" },
        { name: "봉구보고싶다", text: "걍 먹어 ㄱㅊ 나중에 다 빠져 ~~~~~" },
        { name: "봉구보고싶다", text: "걍 먹어 ㄱㅊ 나중에 다 빠져 ~~~~~" },
        { name: "봉구보고싶다", text: "걍 먹어 ㄱㅊ 나중에 다 빠져 ~~~~~" },
    ];

    return(
        <div className={styles['comment-container']}>
            {comments.map((comment, index) => (
                    <Comment
                        key={index}
                        name={comment.name}
                        text={comment.text}
                        index={index}
                    />
                ))}
        </div>
    )
}

export default CommentContainer;