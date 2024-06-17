import React, { useState } from "react";
import SelectList from "../../components/Community/SelectList";
import CommunityContent from "../../components/Community/CommunityContent";
import CommunityWrite from "../../components/Community/CommunityWrite";
import CommunityMyWorried from "../../components/Community/CommunityMyWorried";
import MyWorried from "../../components/Community/MyWorried";
import CommunityPopup from "../../components/Community/CommunityPopup";

function Community() {
  const [selectedItem, setSelectedItem] = useState("고민보기");
  const [showMyWorriedDetail, setShowMyWorriedDetail] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    if (item === "내고민") {
      setShowMyWorriedDetail(false);
    }
  };

  const handleWorriedClick = () => {
    setShowMyWorriedDetail(true);
  };

  const handleUpload = () => {
    setSelectedItem("고민보기");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      {showPopup && <CommunityPopup onClose={handleClosePopup} />}
      <SelectList onSelectItem={handleSelectItem} />
      {selectedItem === "고민보기" && <CommunityContent />}
      {selectedItem === "고민쓰기" && (
        <CommunityWrite onUpload={handleUpload} />
      )}
      {selectedItem === "내고민" &&
        (showMyWorriedDetail ? (
          <MyWorried />
        ) : (
          <CommunityMyWorried onWorriedClick={handleWorriedClick} />
        ))}
    </div>
  );
}

export default Community;
