import React, { useState } from "react";
import SelectList from "../../components/Community/SelectList";
import CommunityContent from "../../components/Community/CommunityContent";
import CommunityWrite from "../../components/Community/CommunityWrite";
import CommunityMyWorried from "../../components/Community/CommunityMyWorried";
import MyWorried from "../../components/Community/MyWorried";

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

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <SelectList onSelectItem={handleSelectItem} />
      {selectedItem === "고민보기" && <CommunityContent />}
      {selectedItem === "고민쓰기" && <CommunityWrite />}
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
