import React, { useState } from "react";
import SelectList from "../../components/community/SelectList";
import CommunityContent from "../../components/community/CommunityContent";
import CommunityWrite from "../../components/community/CommunityWrite";
import CommunityMyWorried from "../../components/community/CommunityMyWorried";
import MyWorried from "../../components/community/MyWorried";

function Community() {
  const [selectedItem, setSelectedItem] = useState("고민보기");
  const [showMyWorriedDetail, setShowMyWorriedDetail] = useState(false);

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

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
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
