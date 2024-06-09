import { useState } from "react";
import { Icon } from "@iconify/react";
import { Sliders } from "react-bootstrap-icons";
import { Filter } from "../../components/WriteLetter/Filter";
import { useFilteredLetter } from "../../hooks/queries/useFilteredLetter";
import styles from "../../styles/WriteLetter/LetterStorage.module.css";
import Nav from "../../components/Nav";
import { BottomSheet } from "../../components/BottomSheet";
import { LetterItem } from "../../components/WriteLetter/LetterItem";
import { ReadLetter } from "../../components/WriteLetter/ReadLetter";

function LetterStorage() {
  const [inputValue, setValue] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [selectTag, setSelectTag] = useState("all");
  const [showLetter, setShowLetter] = useState(null);
  const filteredLetter = useFilteredLetter(selectTag);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleShowLetter = (item) => {
    if (showLetter === null) setShowLetter(item);
    else setShowLetter(null);
  };
  const handleSearchResult = (e) => {
    if (e.key === "Enter") {
      console.log("click");
    }
  };

  // if (isLoading) return;
  // if (!!error) return <>error 발생</>;
  // console.log(filteredLetter);

  return (
    <div className={styles["LetterStorageContainer"]}>
      <div className={styles["searchLetterDiv"]}>
        <div className={styles["letterInput"]}>
          <Icon
            icon="tabler:search"
            width="24px"
            height="24px"
            style={{ color: "#A5A5A5" }}
          />
          <input
            className={styles["Input"]}
            value={inputValue}
            placeholder="검색"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleSearchResult}
          />
        </div>
        <button
          className={styles["fillterButton"]}
          onClick={() => setOpen(true)}
        >
          <Sliders color="white" style={{ width: 19, height: 19 }} />
        </button>
      </div>

      <div className={styles["letterStorage"]}>
        {/*letter컴포넌트*/}
        <div className={styles["lettersDiv"]}>
          {filteredLetter.length > 0 ? (
            filteredLetter.map((item, index) => (
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