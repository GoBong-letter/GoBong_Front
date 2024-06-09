import styled from "styled-components";
import { LETTER_FILTER_ENUM } from "../../constants/filter";

export function Filter({ setSelectTag, selectTag }) {
  return (
    <Container>
      {Object.entries(LETTER_FILTER_ENUM).map(([key, value]) => (
        <FilterTag
          isSelected={selectTag === key}
          onClick={() => setSelectTag(key)}
          key={key}
        >
          {value}
        </FilterTag>
      ))}
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  width: 89vw;
  height: fit-content;
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
  row-gap: 11px;
  column-gap: 2vh;
  margin: 20px 7vw 30px 7vw;
`;

const FilterTag = styled.button`
  width: 26vw;
  height: 38px;
  border-radius: 117px;
  background-color: white;
  border: 1px solid ${({ isSelected }) => (isSelected ? "black" : "#bbbcc1")};
  color: ${({ isSelected }) => (isSelected ? "black" : "#bbbcc1")};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
