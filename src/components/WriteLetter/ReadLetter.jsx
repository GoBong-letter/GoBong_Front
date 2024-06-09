import { useState, useEffect } from "react";
import styles from "../../styles/WriteLetter/ReadLetter.module.css";
import { BiX } from "react-icons/bi";
import { useMutation } from "@tanstack/react-query";
import { postLettersReply } from "../../services/mutations/reply";
import { Reply } from "./Reply";
import { ReplyInput } from "./ReplyInput";

export function ReadLetter({ item, handleShowLetter, showLetter }) {
  const [reply, setReply] = useState(<div></div>);

  const { mutate: replyMutate } = useMutation({
    mutationFn: postLettersReply,
    onSuccess: () => console.log("답장 보내기 성공"),
    onError: (error) => console.log("답장 보내기 실패", error.status),
  });
  console.log(item.LetterReply);

  useEffect(() => {
    console.log(reply);
    // 내가 받은 편지
    if (!item.send) {
      // 아직 답장하지 않은 경우
      if (item.LetterReply.content === null) {
        setReply(<ReplyInput item={item} replyMutate={replyMutate} />);
      } else {
        // 답장한 경우
        setReply(
          <Reply
            title={"답장을 보냈어요!"}
            content={item.LetterReply.content}
          />
        );
      }
    } else {
      // 내가 쓴 편지
      if (item.LetterReply === null) {
        setReply(<div />);
      } else {
        setReply(
          <Reply
            title={"답장을 받았어요!"}
            content={item.LetterReply.content}
          />
        );
      }
    }
  }, [item.send, showLetter]);

  return (
    <div className={styles["ReadLetterContainer"]}>
      <div className={styles["letterDiv"]}>
        <div className={styles["letterHeader"]}>
          <div>
            <span
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: 600,
                marginLeft: "3.5vw",
              }}
            >
              {item.title}
            </span>
            <span
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: 400,
                marginLeft: "7.5vw",
              }}
            >
              {item.createdAt.slice(0, 10)}
            </span>
          </div>
          <div onClick={handleShowLetter}>
            <BiX style={{ color: "white", fontSize: 25 }} />
          </div>
        </div>
        <div
          className={styles["letterContent"]}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/${item.envelope}.svg)`,
          }}
        >
          <div className={styles["letterContentText"]}>{item.content}</div>
        </div>
        <div className={styles["letterBottom"]}>{reply}</div>
      </div>
      <div className={styles["Background"]}></div>
    </div>
  );
}
