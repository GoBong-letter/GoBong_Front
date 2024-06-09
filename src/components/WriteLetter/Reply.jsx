import styled from "styled-components";

export function Reply({ title, content }) {
  return (
    <ReplyContainer>
      <ReplyTitle>{title}</ReplyTitle>
      <ReplyContent>{content}</ReplyContent>
    </ReplyContainer>
  );
}
const ReplyContainer = styled.div`
  box-sizing: border-box;
  width: 83.6vw;
  max-height: 37vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.25vh 0 3.25vh 0;
  row-gap: 2.3vh;
  margin-top: 13px;
`;
const ReplyTitle = styled.span`
  display: "flex";
  justify-content: "center";
  font-size: 14px;
  font-weight: 600;
  color: "#8D47FF";
`;
const ReplyContent = styled.div`
  width: "64vw";
  display: "flex";
  flex-wrap: "wrap";
`;
