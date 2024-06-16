import styled from "styled-components";

export function LetterItem({ item, handleShowLetter }) {
  return (
    <LetterBox onClick={() => handleShowLetter(item)}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${item.envelope}.png`}
        style={{ width: 139 }}
        alt=""
      />
      <LetterTitle>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            width: 139,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {item.title}
        </div>
        <span style={{ fontSize: 12, fontWeight: 500, color: "#BABABA" }}>
          {item.createdAt}
        </span>
      </LetterTitle>
    </LetterBox>
  );
}

const LetterBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 11px;
`;
const LetterTitle = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;
