import styled from "styled-components";

export function LetterItem({ item, handleShowLetter }) {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}.${month}.${day}`;
  };
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
          {formatDate(item.createdAt)}
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
