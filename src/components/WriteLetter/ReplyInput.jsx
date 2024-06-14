import { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

export function ReplyInput({ item, replyMutate }) {
  const [replyText, setReplyText] = useState("");
  return (
    <>
      <ReplyText>
        <ReplyTextarea
          placeholder="답장을 남겨보세요!"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
      </ReplyText>
      <SendBtn
        onClick={() => {
          console.log("dfdf", replyText);
          replyMutate({
            letter_id: item.LetterReply.letter_id,
            content: replyText,
          });
          setReplyText("");
        }}
      >
        <Icon
          icon="prime:send"
          width="24"
          height="24"
          style={{ color: "#ffff" }}
        />
      </SendBtn>
    </>
  );
}

const ReplyText = styled.div`
  box-sizing: border-box;
  width: 67vw;
  height: 6.25vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 2vh;
`;
const ReplyTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
  display: flex;
  font-size: 16px;
`;
const SendBtn = styled.div`
  width: 13vw;
  height: 6vh;
  background-color: #8d47ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
