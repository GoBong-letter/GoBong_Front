import { useEffect, useState } from "react";
import { Sliders } from "react-bootstrap-icons";
import { Filter } from "../../components/WriteLetter/Filter";
import { useFilteredLetter } from "../../hooks/queries/useFilteredLetter";
import styles from "../../styles/WriteLetter/LetterStorage.module.css";
import Nav from "../../components/Nav";
import { BottomSheet } from "../../components/BottomSheet";
import { LetterItem } from "../../components/WriteLetter/LetterItem";
import { ReadLetter } from "../../components/WriteLetter/ReadLetter";
import { LetterInput } from "../../components/WriteLetter/LetterInput";

function LetterStorage() {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState(true); // true 이면 filter, false이면 search
  const [selectTag, setSelectTag] = useState("all");
  const [showLetter, setShowLetter] = useState(null);
  const [letterList, setLetterList] = useState([]);
  const { letters, loading } = useFilteredLetter(selectTag);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleShowLetter = (item) => {
    if (showLetter === null) setShowLetter(item);
    else setShowLetter(null);
  };

  useEffect(() => {
    console.log("letterstorage 출력");
    console.log(letters, letterList, showLetter);

    if (active) {
      setLetterList(letters);
    }
  }, [active, letters, selectTag]);
  return (
    <div className={styles["LetterStorageContainer"]}>
      <div className={styles["searchLetterDiv"]}>
        <LetterInput
          setLetterList={setLetterList}
          active={active}
          setActive={setActive}
        />
        <button
          className={styles["fillterButton"]}
          onClick={() => {
            setOpen(true);
            setActive(true);
          }}
        >
          <Sliders color="white" style={{ width: 19, height: 19 }} />
        </button>
      </div>

      <div className={styles["letterStorage"]}>
        {/*letter컴포넌트*/}
        <div className={styles["lettersDiv"]}>
          {letterList.length > 0 ? (
            letterList.map((item, index) => (
              <LetterItem
                item={item}
                key={index}
                handleShowLetter={handleShowLetter}
              />
            ))
          ) : (
            <p
              style={{
                margin: "0 auto",
                height: "content-fit",
                position: "relative",
                top: "32.5%",
                left: "60%",
                color: "#CACACA",
              }}
            >
              검색 결과가 없어요
            </p>
          )}
        </div>
      </div>
      <Nav />
      {isOpen && (
        <BottomSheet
          handleOpen={handleOpen}
          text="필터"
          image={
            <Sliders
              color="black"
              style={{ width: 19, height: 19, marginLeft: 11 }}
            />
          }
        >
          <Filter setSelectTag={setSelectTag} selectTag={selectTag} />
        </BottomSheet>
      )}
      {showLetter && (
        <ReadLetter
          item={showLetter}
          handleShowLetter={handleShowLetter}
          showLetter={showLetter}
        />
      )}
    </div>
  );
}
export default LetterStorage;
