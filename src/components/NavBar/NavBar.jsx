import { useState } from "react";

import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import "./NavBar.css";

const NavBar = () => {
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="menuBar">
      <div className="menuBarInner">
        <div className="logoTitleContainer">
          <div className="logoContainer">
            {/* 사이트 로고 */}
            <RamenDiningIcon
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </div>
          <h1 className="siteTitle">레시피 추천 시스템</h1>
        </div>
        <div className="searchContainer">
          {/* 검색 창 */}
          <input
            type="text"
            placeholder="요리명 혹은 재료로 레시피 검색"
            className={`searchInput ${isInputFocused ? "focused" : ""}`}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {/* 돋보기 아이콘 */}
          <div className="searchIconContainer">
            <SearchIcon
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="profileContainer">
          {/* 내 정보 아이콘 */}
          <PersonIcon
            style={{
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
