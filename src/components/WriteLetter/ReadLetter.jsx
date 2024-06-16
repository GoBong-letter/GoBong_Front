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
    onSuccess: () => {
      console.log("답장 보내기 성공");
      setReply(<div></div>);
    },
    onError: (error) => console.log("답장 보내기 실패", error),
  });
  console.log(item.LetterReply);
  console.log(item.envelope);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
  const applyNewline = (content) => {
    return content.replace(/\n/g, "<br />");
  };
  useEffect(() => {
    // console.log(reply);
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
      if (item.LetterReply.content === null) {
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
          <div
            style={{ display: "flex", alignItems: "end", columnGap: "2.3vw" }}
          >
            <span
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: 600,
                marginLeft: "3.5vw",
                maxWidth: "40vw",
                height: 22,
                // wordBreak: "break-all",
                overflowX: "scroll",
              }}
            >
              {item.title}
            </span>
            <span
              style={{
                color: "white",
                fontSize: 14,
                marginBottom: "2px",
                fontWeight: 400,
              }}
            >
              {formatDate(item.createdAt)}
            </span>
          </div>
          <div onClick={() => handleShowLetter(item)}>
            <BiX style={{ color: "white", fontSize: 25 }} />
          </div>
        </div>
        <div className={styles["letterContent"]}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${item.envelope}.svg`}
            style={{
              width: "83.6vw",
              zIndex: -1000,
              objectFit: "cover",
              position: "absolute",
            }}
            alt=""
          />
          <div
            className={styles["letterContentText"]}
            dangerouslySetInnerHTML={{ __html: applyNewline(item.content) }}
          ></div>
        </div>
        <div className={styles["letterBottom"]}>{reply}</div>
      </div>
      <div className={styles["Background"]}></div>
    </div>
  );
}
